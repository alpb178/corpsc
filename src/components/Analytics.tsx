"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { resolveOutbound } from "@/lib/outbound";

/**
 * The site's own analytics: one page view per route, one event per click that
 * leaves for a sibling site.
 *
 * Both go to `/api/track`, which is what talks to the hub — the key stays on
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

  useEffect(() => {
    if (!pathname || lastPath.current === pathname) return;
    lastPath.current = pathname;

    void send({ type: "page_view", path: pathname });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Modified clicks open a tab without leaving the page; they are still
      // the reader going to that site.
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const target = resolveOutbound(anchor.href);
      if (!target) return;

      send(
        {
          type: "site_click",
          path: pathname ?? "/",
          target: target.slug,
          linkType: target.linkType,
        },
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

interface TrackedEvent {
  type: "page_view" | "site_click";
  path: string;
  target?: string;
  linkType?: "web" | "android" | "ios";
}

function send(event: TrackedEvent, beacon = false): void {
  const body = JSON.stringify({ events: [event] });

  if (beacon && typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    /* best-effort: analytics never breaks navigation */
  });
}
