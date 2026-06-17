import type { Dict } from "@/i18n/get-dictionary";

export default function Leadership({ dict }: { dict: Dict }) {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "var(--hero-glow-2)" }}
        />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          {/* Text column */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-6 bg-accent/60" />
              {dict.leadership.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
              {dict.leadership.title}
            </h2>

            <div className="mt-6">
              <p className="text-2xl font-semibold text-fg sm:text-3xl">
                {dict.leadership.name}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                {dict.leadership.role}
              </p>
            </div>

            <div className="mt-6 space-y-4 text-base text-fg-muted sm:text-lg">
              {dict.leadership.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="surface-card mt-8 rounded-2xl border-l-4 border-l-accent px-6 py-5 text-base italic text-fg sm:text-lg">
              “{dict.leadership.quote}”
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:alpb17.08@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-surface transition hover:opacity-90"
              >
                {dict.leadership.contactLabel}
              </a>
              <a
                href="https://www.linkedin.com/in/alpb1708/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-fg transition hover:border-line-strong"
              >
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
