import { projects } from "@/content/projects";
import type { OutboundTarget } from "@/lib/hub-tracker/group-sites";

/**
 * Which sibling site a link points at, as data for the hub tracker.
 *
 * The portfolio's whole job is sending people to the group's sites, so a click
 * out is the metric that matters. It is built from the project registry, not
 * from hand-written markup: a project added to `projects.ts` is tracked the day
 * it ships, with no second list to keep in sync.
 *
 * Plain objects on purpose: they are passed from the server layout to the
 * tracker's client component.
 */

function host(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

/** Web links resolve by host: the path may carry campaign params. */
export const GROUP_SITES: Record<string, string> = Object.fromEntries(
  projects.filter((p) => p.url).map((p) => [host(p.url as string), p.slug]),
);

/**
 * Store links resolve by exact URL. Every iOS app lives under apps.apple.com,
 * so the host alone would merge different projects into one.
 */
export const STORE_LINKS: Record<string, OutboundTarget> = Object.fromEntries(
  projects.flatMap((p) =>
    (p.links ?? []).map((link) => [new URL(link.url).href, { slug: p.slug, linkType: link.kind }]),
  ),
);
