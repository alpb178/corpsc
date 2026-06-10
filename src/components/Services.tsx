import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

const ICONS: React.ReactNode[] = [
  <svg key="web" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 9h18M7 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="mobile" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="backend" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="testing" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m4 12 5 5L20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="ai" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="product" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2 3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
];

export default function Services({ dict }: { dict: Dict }) {
  return (
    <Section
      id="services"
      eyebrow={dict.services.eyebrow}
      title={dict.services.title}
      subtitle={dict.services.subtitle}
      align="center"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dict.services.items.map((item, idx) => (
          <article
            key={item.title}
            className="surface-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-line-strong"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-line [&>svg]:h-5 [&>svg]:w-5">
              {ICONS[idx % ICONS.length]}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
              <p className="text-sm text-fg-muted">{item.body}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-full border border-line bg-card px-2.5 py-1 text-[11px] text-fg-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
