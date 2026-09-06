import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

export default function About({ dict }: { dict: Dict }) {
  return (
    <Section id="about" band="alt" eyebrow={dict.about.eyebrow} title={dict.about.title}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-5 text-base leading-relaxed text-fg-muted lg:col-span-5">
          {dict.about.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Oracle's tile grid: hairline cells, flush against each other. */}
        <div className="cell-grid grid sm:grid-cols-2 lg:col-span-7">
          {dict.about.pillars.map((pillar) => (
            <article key={pillar.title} className="bg-surface p-7">
              <h3 className="text-base font-semibold text-fg">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
