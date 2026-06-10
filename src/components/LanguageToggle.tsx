"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LanguageToggle({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const rest = pathname.replace(/^\/(es|en)/, "") || "/";

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-card p-1 text-xs font-medium">
      {locales.map((locale) => {
        const active = locale === current;
        const href = `/${locale}${rest === "/" ? "" : rest}`;
        return (
          <Link
            key={locale}
            href={href}
            className={
              "rounded-full px-3 py-1 transition " +
              (active
                ? "bg-fg text-surface shadow-sm"
                : "text-fg-subtle hover:text-fg")
            }
            aria-current={active ? "true" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
