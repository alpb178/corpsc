"use client";

import { useMemo, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { GROUP_LANGUAGES, LanguageSwitcher, type LanguageOption } from "./LanguageSwitcher";

const LOCALE_PREFIX = new RegExp(`^/(${locales.join("|")})(?=/|$)`);

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("hashchange", listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("hashchange", listener);
    window.removeEventListener("popstate", listener);
  };
}

function readSuffix() {
  return window.location.search + window.location.hash;
}

/**
 * Wires the group's shared LanguageSwitcher to this site's routing.
 *
 * Options are plain anchors on purpose (no `linkAs`): switching locale swaps
 * the root layout's `<html>`, and the theme class set by ThemeProvider only
 * survives a full document load (see the note in `[locale]/layout.tsx`).
 */
export default function LanguageMenu({
  current,
  label,
  placement,
}: {
  current: Locale;
  label: string;
  placement?: "bottom" | "top";
}) {
  const pathname = usePathname() ?? "/";
  const rest = pathname.replace(LOCALE_PREFIX, "");

  // Query string and hash only exist in the browser. They are read on
  // hydration, on hashchange/popstate and again right before the menu is used
  // (Next's Link moves the hash with pushState, which fires no event), so the
  // link keeps the reader on the same section. The snapshot is a string, so an
  // unchanged location does not re-render and the options stay stable while
  // the menu is open.
  const suffix = useSyncExternalStore(subscribe, readSuffix, () => "");

  const options = useMemo<LanguageOption[]>(
    () =>
      GROUP_LANGUAGES.map((lang) => ({
        ...lang,
        href: `/${lang.code}${rest}${suffix}`,
      })),
    [rest, suffix],
  );

  return (
    <div className="lang-menu" onPointerDownCapture={notify} onKeyDownCapture={notify}>
      <LanguageSwitcher current={current} options={options} label={label} placement={placement} />
    </div>
  );
}
