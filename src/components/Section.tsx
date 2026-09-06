import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Band = "paper" | "alt" | "deep";

interface Props {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  band?: Band;
  /** Right-hand slot beside the heading — tabs, a link, a count. */
  aside?: ReactNode;
  className?: string;
  /** Set false when the children stagger their own reveal (a card grid). */
  revealChildren?: boolean;
}

const BAND_CLASS: Record<Band, string> = {
  paper: "band-paper",
  alt: "band-alt",
  deep: "band-deep",
};

/**
 * Section headings are left-aligned and sentence case. The eyebrow is a plain
 * muted label rather than tracked-out capitals; the accent rule above the
 * heading is what marks the start of a band.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  band = "paper",
  aside,
  className = "",
  revealChildren = true,
}: Props) {
  return (
    <section id={id} className={`${BAND_CLASS[band]} py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="heading-rule text-sm font-medium text-fg-faint">{eyebrow}</p>
            <h2 className="font-display text-balance text-3xl font-bold leading-[1.1] text-fg sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
                {subtitle}
              </p>
            ) : null}
          </div>
          {aside ? <div className="shrink-0">{aside}</div> : null}
        </Reveal>

        {revealChildren ? (
          <Reveal delay={120} className="mt-12">
            {children}
          </Reveal>
        ) : (
          <div className="mt-12">{children}</div>
        )}
      </div>
    </section>
  );
}
