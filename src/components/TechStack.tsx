import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

export default function TechStack({ dict }: { dict: Dict }) {
  return (
    <Section id="stack" eyebrow={dict.stack.eyebrow} title={dict.stack.title} align="center">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dict.stack.groups.map((group) => (
          <div
            key={group.label}
            className="surface-card rounded-2xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{group.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-card px-3 py-1.5 text-sm text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
