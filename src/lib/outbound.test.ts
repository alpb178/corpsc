import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import { resolveTarget } from "@/lib/hub-tracker/group-sites";
import { GROUP_SITES, STORE_LINKS } from "@/lib/outbound";

describe("outbound registry", () => {
  it("names every project with a web URL by its host, without www", () => {
    expect(GROUP_SITES["take.corpsc.com"]).toBe("take");
    expect(GROUP_SITES["tu-chamba.corpsc.com"]).toBe("tu-chamba");
    expect(Object.keys(GROUP_SITES).every((host) => !host.startsWith("www."))).toBe(true);
    expect(Object.keys(GROUP_SITES)).toHaveLength(projects.filter((p) => p.url).length);
  });

  it("resolves a store link to its project and platform", () => {
    const [url, target] = Object.entries(STORE_LINKS)[0];
    expect(resolveTarget(url, "www.corpsc.com", GROUP_SITES, STORE_LINKS)).toEqual(target);
    expect(["web", "android", "ios"]).toContain(target.linkType);
  });

  it("does not count a link to the portfolio itself as leaving", () => {
    expect(resolveTarget("https://www.corpsc.com/es", "www.corpsc.com", GROUP_SITES, STORE_LINKS)).toBeNull();
  });
});
