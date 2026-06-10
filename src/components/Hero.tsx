import Link from "next/link";
import type { Dict } from "@/i18n/get-dictionary";

export default function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-[60rem] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div
            className="absolute left-1/2 top-[-20%] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "var(--hero-glow-1)" }}
          />
          <div
            className="absolute left-[20%] top-[10%] h-[30rem] w-[30rem] rounded-full blur-3xl"
            style={{ background: "var(--hero-glow-2)" }}
          />
          <div
            className="absolute right-[10%] top-[20%] h-[20rem] w-[20rem] rounded-full blur-3xl"
            style={{ background: "var(--hero-glow-3)" }}
          />
        </div>
        <div className="absolute inset-0 grain opacity-[0.4]" />
      </div>

      <div className="container-page">
        <div className="flex flex-col items-start gap-8 lg:max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-fg-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-positive shadow-[0_0_12px_var(--color-positive)]" />
            {dict.hero.eyebrow}
          </span>

          <h1 className="reveal text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[5rem]" style={{ animationDelay: "60ms" }}>
            <span className="text-gradient">{dict.hero.title}</span>{" "}
            <span className="text-accent-gradient">{dict.hero.titleAccent}</span>
          </h1>

          <p
            className="reveal max-w-2xl text-balance text-base text-fg-muted sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            {dict.hero.subtitle}
          </p>

          <div className="reveal flex flex-wrap items-center gap-3" style={{ animationDelay: "180ms" }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-surface transition hover:translate-y-[-1px] hover:opacity-90"
            >
              {dict.hero.primaryCta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-fg transition hover:border-line-strong"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <dl className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4" style={{ animationDelay: "260ms" }}>
          {dict.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-6">
              <dt className="text-xs uppercase tracking-[0.18em] text-fg-faint">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
