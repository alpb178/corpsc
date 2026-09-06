import type { Dict } from "@/i18n/get-dictionary";
import Section from "./Section";

export default function TechStack({ dict }: { dict: Dict }) {
  return (
    <Section id="stack" band="paper" eyebrow={dict.stack.eyebrow} title={dict.stack.title}>
      <div className="cell-grid grid md:grid-cols-2 lg:grid-cols-3">
        {dict.stack.groups.map((group) => (
          <div key={group.label} className="bg-surface p-6">
            <h3 className="text-sm font-semibold text-fg">{group.label}</h3>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[3px] border border-line px-2 py-1 text-xs text-fg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
