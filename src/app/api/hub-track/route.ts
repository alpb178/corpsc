import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

/**
 * Collects the site's own analytics and forwards them to the CORPSC hub.
 *
 * This route exists for one reason: **the hub key must never reach the
 * browser**. Anyone holding it can write metrics for this project, so the page
 * posts to its own origin and the key is added here, on the server.
 *
 * The portfolio has no database — it is a static-ish site on Vercel — so it
 * does not aggregate anything. It sends the bare fact and the hub rolls the
 * days up. Contract: corpsc-admin/docs/envio-de-metricas/eventos.md
 *
 * Environment (without it the route is a no-op, which is what local and
 * preview deployments want):
 *   HUB_URL      https://hub.corpsc.com/api
 *   HUB_API_KEY  this project's key
 */

/** Same cap the hub enforces. */
const MAX_EVENTS = 50;

/**
 * The visit cookie. Half an hour of inactivity closes the visit, which is the
 * usual session window, and it never outlives the browser session either. The
 * name is the same across the group's sites so the five integrations read alike.
 *
 * It holds a random id and nothing else: no identity, no history, nothing that
 * survives a closed browser. It is what keeps five pages from counting as five
 * visits.
 */
const SESSION_COOKIE = "hub_v";
const SESSION_MINUTES = 30;

/**
 * Crawlers announce themselves and there is no reason to count them as people.
 * This filter is deliberately coarse: what it lets through is a rounding error,
 * and what it would wrongly block is a reader.
 */
const BOT = /bot|crawl|spider|slurp|bingpreview|headless|lighthouse|monitor|pingdom|curl|wget/i;

interface IncomingEvent {
  type: "page_view" | "site_click";
  path: string;
  target?: string;
  linkType?: "web" | "android" | "ios";
}

function isValid(event: unknown): event is IncomingEvent {
  if (typeof event !== "object" || event === null) return false;
  const e = event as Record<string, unknown>;

  if (e.type !== "page_view" && e.type !== "site_click") return false;
  if (typeof e.path !== "string" || e.path.length === 0 || e.path.length > 512) return false;
  if (e.type === "site_click" && typeof e.target !== "string") return false;
  if (e.linkType !== undefined && !["web", "android", "ios"].includes(e.linkType as string)) {
    return false;
  }
  return true;
}

export async function POST(request: Request): Promise<NextResponse> {
  // 204 for everything, always. This endpoint is fire-and-forget from the
  // page's point of view: a tracking problem must never look like a broken
  // site, and telling a caller why its payload was dropped only helps someone
  // probing the endpoint.
  const noContent = new NextResponse(null, { status: 204 });

  if (BOT.test(request.headers.get("user-agent") ?? "")) return noContent;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return noContent;
  }

  const incoming = (body as { events?: unknown })?.events;
  if (!Array.isArray(incoming)) return noContent;

  const events = incoming.filter(isValid).slice(0, MAX_EVENTS);
  if (events.length === 0) return noContent;

  // The id is minted here rather than in the page: as an httpOnly cookie no
  // script can read it, so a bug in a third-party snippet cannot leak it or
  // forge someone else's visit.
  const existing = request.headers
    .get("cookie")
    ?.split(";")
    .map((part) => part.trim().split("="))
    .find(([name]) => name === SESSION_COOKIE)?.[1];

  const sessionId = existing ?? randomUUID().replace(/-/g, "");

  noContent.cookies.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    // Refreshed on every event, so a visit ends after half an hour of silence
    // and not half an hour after it started.
    maxAge: SESSION_MINUTES * 60,
  });

  const hubUrl = process.env.HUB_URL;
  const apiKey = process.env.HUB_API_KEY;
  if (!hubUrl || !apiKey) return noContent;

  const at = new Date().toISOString();

  try {
    await fetch(`${hubUrl}/ingest/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Api-Key": apiKey },
      body: JSON.stringify({
        schemaVersion: 1,
        events: events.map((event) => ({
          type: event.type,
          sessionId,
          path: event.path,
          ...(event.type === "site_click"
            ? { target: event.target, linkType: event.linkType ?? "web" }
            : {}),
          at,
        })),
      }),
      cache: "no-store",
    });
  } catch {
    // The hub being down is not the visitor's problem. The event is lost on
    // purpose: queueing it would mean storage, which is exactly what this site
    // does not have.
  }

  return noContent;
}
