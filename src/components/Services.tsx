import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

export default function Services({ dict }: { dict: Dict }) {
  return (
    <Section
      id="services"
      band="paper"
      eyebrow={dict.services.eyebrow}
      title={dict.services.title}
      subtitle={dict.services.subtitle}
    >
      <div className="cell-grid grid md:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((item) => (
          <article key={item.title} className="flex flex-col bg-surface p-7">
            <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
            <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm text-fg-subtle">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
