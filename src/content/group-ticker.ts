import { projects } from "./projects";

// Sibling sites promoted in the top ticker, in the order they scroll. Only the
// dot colour lives here — it is each brand's own, and nothing else in the
// portfolio carries it. Name, URL and the one-line blurb are read from the
// project entry so the copy stays in a single place.
const TICKER: ReadonlyArray<{ slug: string; color: string }> = [
  { slug: "tu-chamba", color: "#00b473" },
  { slug: "iris-natural", color: "#f9a8d4" },
  { slug: "invoices", color: "#2dd4bf" },
  { slug: "dandomuela", color: "#a78bfa" },
];

export interface GroupSite {
  slug: string;
  name: string;
  url: string;
  color: string;
  category: { es: string; en: string };
}

export const groupSites: GroupSite[] = TICKER.flatMap(({ slug, color }) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project?.url) return [];
  return [
    {
      slug,
      name: project.name,
      url: project.url,
      color,
      category: project.category,
    },
  ];
});

// The domain shown next to the name: the link as the reader sees it, without
// the protocol, the "www." or the trailing slash.
export function siteDomain(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}

// Marks the ticker links with UTM so the destination site can measure how much
// attention the group strip brings. Existing query params are kept, and calling
// it twice yields the same URL.
export function groupSiteUrl(url: string): string {
  const target = new URL(url);
  target.searchParams.set("utm_source", "corpsc");
  target.searchParams.set("utm_medium", "cintillo");
  target.searchParams.set("utm_campaign", "grupo-corpsc");
  return target.toString();
}
