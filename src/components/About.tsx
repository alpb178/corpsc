import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

export default function About({ dict }: { dict: Dict }) {
  return (
    <Section
      id="about"
      eyebrow={dict.about.eyebrow}
      title={dict.about.title}
      align="center"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
        <div className="space-y-5 text-base text-fg-muted sm:text-lg lg:col-span-5">
          {dict.about.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {dict.about.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="surface-card group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-line-strong"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-soft blur-3xl transition group-hover:opacity-100" />
              <h3 className="relative text-base font-semibold text-fg">{pillar.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-fg-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
