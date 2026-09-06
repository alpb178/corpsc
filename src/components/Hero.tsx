import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import HeroCarousel from "./HeroCarousel";
import HeroStats from "./HeroStats";

export default function Hero({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <section className="band-deep relative overflow-hidden">
      {/* One flat diagonal wash — the only non-flat surface on the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #06132e 0%, #0b2a6b 55%, #123a8f 100%)",
        }}
      />

      <div className="container-page relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 text-sm text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue-light)]" />
              {dict.hero.eyebrow}
            </p>

            <h1 className="font-display mt-6 text-balance text-4xl font-bold leading-[1.03] text-white sm:text-5xl lg:text-[3.75rem]">
              {dict.hero.title} {dict.hero.titleAccent}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn btn-primary">
                {dict.hero.primaryCta}
              </Link>
              <Link
                href="#projects"
                className="btn btn-secondary !border-white/35 !text-white hover:!border-white"
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroCarousel dict={dict} locale={locale} />
          </div>
        </div>
      </div>

      <HeroStats dict={dict} />
    </section>
  );
}
