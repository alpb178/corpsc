import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import Logo from "./Logo";

export default function Footer({ dict, locale }: { dict: Dict; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Logo locale={locale} />
            <p className="max-w-sm text-sm text-fg-muted">{dict.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 sm:grid-cols-3">
            <FooterCol title={dict.footer.sections.product}>
              <Link href="#about">{dict.nav.about}</Link>
              <Link href="#services">{dict.nav.services}</Link>
              <Link href="#projects">{dict.nav.projects}</Link>
              <Link href="#leadership">{dict.nav.leadership}</Link>
            </FooterCol>
            <FooterCol title={dict.footer.sections.links}>
              <a href="https://kods.ai" target="_blank" rel="noreferrer">kods.ai</a>
              <a href="https://take.corpsc.com" target="_blank" rel="noreferrer">take.corpsc.com</a>
              <a href="https://invoices.corpsc.com" target="_blank" rel="noreferrer">invoices.corpsc.com</a>
              <a href="https://irisnatural.corpsc.com" target="_blank" rel="noreferrer">irisnatural.corpsc.com</a>
            </FooterCol>
            <FooterCol title={dict.footer.sections.contact}>
              <a href="mailto:alpb17.08@gmail.com">alpb17.08@gmail.com</a>
              <a href="https://wa.me/59173655692" target="_blank" rel="noreferrer">+591 736 556 92</a>
              <span>Santa Cruz, Bolivia</span>
            </FooterCol>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-fg-faint sm:flex-row sm:items-center">
          <span>© {year} CORPSC. {dict.footer.rights}</span>
          <span>{dict.contact.direct.locationValue}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-fg-faint">{title}</p>
      <div className="mt-4 flex flex-col gap-2 text-sm text-fg-muted [&>a:hover]:text-fg [&>a]:transition">
        {children}
      </div>
    </div>
  );
}
