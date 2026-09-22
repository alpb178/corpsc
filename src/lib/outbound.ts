import { projects } from "@/content/projects";

/**
 * Which sibling site a link points at.
 *
 * The portfolio's whole job is sending people to the group's sites, so a click
 * out is the metric that matters. It is resolved from the project registry, not
 * from hand-written markup: a project added to `projects.ts` is tracked the day
 * it ships, with no second list to keep in sync.
 */
export interface OutboundTarget {
  /** Project slug, the same one the hub knows. */
  slug: string;
  linkType: "web" | "android" | "ios";
}

function host(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}

/** Web links resolve by host: the path may carry campaign params. */
const BY_HOST = new Map<string, OutboundTarget>();
/**
 * Store links resolve by exact URL. Every iOS app lives under apps.apple.com,
 * so the host alone would merge three different projects into one.
 */
const BY_URL = new Map<string, OutboundTarget>();

for (const project of projects) {
  if (project.url) {
    BY_HOST.set(host(project.url), { slug: project.slug, linkType: "web" });
  }
  for (const link of project.links ?? []) {
    BY_URL.set(link.url, { slug: project.slug, linkType: link.kind });
  }
}

/**
 * `null` when the link goes nowhere we track — an internal anchor, a mailto.
 *
 * Resolved with no fallback base on purpose: with one, a relative link like
 * `/es` would resolve against this site's own domain and count as a click
 * leaving for ourselves. `ownHost` covers the same case for absolute links
 * back to this site.
 */
export function resolveOutbound(href: string, ownHost?: string): OutboundTarget | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  const host = url.host.replace(/^www\./, "");
  if (ownHost && host === ownHost.replace(/^www\./, "")) return null;

  return BY_URL.get(url.href) ?? BY_HOST.get(host) ?? null;
}
