import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dict }) {
  const items = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#leadership", label: dict.nav.leadership },
    { href: "#stack", label: dict.nav.stack },
  ];

  return (
    <header className="sticky top-0 z-50 site-header">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo locale={locale} tone="onDark" />

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle label={dict.nav.theme} />
          <LanguageToggle current={locale} />
          {/* Wrapper, not `hidden` on the Link: `.btn` sets display and would
              win the specificity tie against the utility. */}
          <div className="hidden lg:block">
            <Link href="#contact" className="btn btn-primary !px-4 !py-2">
              {dict.nav.cta}
            </Link>
          </div>
          <MobileMenu
            items={items}
            ctaHref="#contact"
            ctaLabel={dict.nav.cta}
            menuLabel={dict.nav.menu}
          />
        </div>
      </div>
    </header>
  );
}
