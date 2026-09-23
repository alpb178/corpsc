"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { resolveOutbound } from "@/lib/outbound";
import { visitOrigin, type VisitOrigin } from "@/lib/visit-origin";
import { describeClick } from "@/lib/click-target";

/**
 * The site's own analytics: one page view per route, and one event per click
 * on a link or button, saying where on the page it happened. Clicks that leave
 * for a sibling site go as `site_click`, with their destination.
 *
 * Both go to `/api/hub-track`, which is what talks to the hub — the key stays on
 * the server. Everything here is best-effort: if it fails, nothing about the
 * page changes.
 *
 * Clicks are listened for on the document instead of wired into each link, so
 * a project card, a store button or a new section added later is counted
 * without anyone remembering to add a handler.
 */
export default function Analytics() {
  const pathname = usePathname();
  // Last path sent. Without it the same page counts twice: StrictMode runs the
  // effect a second time in development, and any remount would repeat it.
  const lastPath = useRef<string | null>(null);
  // The first page view of this load is the landing: only it carries the
  // source. Later client-side navigations keep the same document.referrer.
  const landed = useRef(false);

  useEffect(() => {
    if (!pathname || lastPath.current === pathname) return;
    lastPath.current = pathname;

    const origin = landed.current ? {} : visitOrigin();
    landed.current = true;
    void send({ type: "page_view", path: pathname, ...origin });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Modified clicks open a tab without leaving the page; they are still
      // the reader going to that site. The portfolio has no private area.
      const click = describeClick(event.target, false);
      if (!click) return;

      const { section, label } = click;
      const path = pathname ?? "/";
      const anchor = click.element.closest("a[href]");
      const target =
        anchor instanceof HTMLAnchorElement
          ? resolveOutbound(anchor.href, window.location.host)
          : null;

      send(
        target
          ? { type: "site_click", path, section, label, target: target.slug, linkType: target.linkType }
          : { type: "click", path, section, label },
        // The page may be unloading a millisecond later: a normal fetch would
        // be cancelled, sendBeacon is handed to the browser and survives.
        true,
      );
    }

    // Capture phase: the click still counts even if something downstream calls
    // stopPropagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}

interface TrackedEvent extends VisitOrigin {
  type: "page_view" | "site_click" | "click";
  path: string;
  section?: string;
  label?: string;
  target?: string;
  linkType?: "web" | "android" | "ios";
}

function send(event: TrackedEvent, beacon = false): void {
  const body = JSON.stringify({ events: [event] });

  if (beacon && typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon("/api/hub-track", new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch("/api/hub-track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    /* best-effort: analytics never breaks navigation */
  });
}
