import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

interface Props {
  locale: Locale;
  dict: Dict;
}

export default function Navbar({ locale, dict }: Props) {
  const items = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#leadership", label: dict.nav.leadership },
    { href: "#stack", label: dict.nav.stack },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-8 text-sm text-fg-muted lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle label={dict.nav.theme} />
          <LanguageToggle current={locale} />
          <Link
            href="#contact"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-semibold text-surface transition hover:opacity-90 md:inline-flex"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
