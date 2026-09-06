import type { Dict } from "@/i18n/get-dictionary";
import Reveal from "./Reveal";

export default function Leadership({ dict }: { dict: Dict }) {
  return (
    <section id="leadership" className="band-deep py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="border-b border-line pb-8">
          <p className="heading-rule text-sm font-medium text-fg-faint">
            {dict.leadership.eyebrow}
          </p>
          <h2 className="font-display max-w-2xl text-balance text-3xl font-bold leading-[1.1] text-fg sm:text-4xl lg:text-5xl">
            {dict.leadership.title}
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-semibold text-fg">
              {dict.leadership.name}
            </p>
            <p className="mt-1.5 text-sm text-accent">{dict.leadership.role}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="mailto:alpb17.08@gmail.com" className="btn btn-primary">
                {dict.leadership.contactLabel}
              </a>
              <a
                href="https://www.linkedin.com/in/alpb1708/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4 text-base leading-relaxed text-fg-muted">
              {dict.leadership.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-[var(--color-brand-blue-light)] pl-5 text-lg leading-relaxed text-fg">
              {dict.leadership.quote}
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
