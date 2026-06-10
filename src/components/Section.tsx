import type { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  className = "",
}: Props) {
  const headerAlign = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <div className={`mx-auto flex max-w-3xl flex-col gap-4 ${headerAlign}`}>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            {eyebrow}
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-balance text-base text-fg-muted sm:text-lg">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
