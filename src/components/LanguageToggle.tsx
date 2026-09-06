"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LanguageToggle({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const rest = pathname.replace(/^\/(es|en)/, "") || "/";

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/20 p-1 text-xs font-medium">
      {locales.map((locale) => {
        const active = locale === current;
        const href = `/${locale}${rest === "/" ? "" : rest}`;
        return (
          <a
            key={locale}
            href={href}
            className={
              "rounded-full px-3 py-1 transition " +
              (active
                ? "bg-white text-[#06132e]"
                : "text-white/60 hover:text-white")
            }
            aria-current={active ? "true" : undefined}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
