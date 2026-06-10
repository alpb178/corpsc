"use client";

import { useState } from "react";
import { projects, type ProjectKind } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";

interface Props {
  dict: Dict;
  locale: Locale;
}

export default function Projects({ dict, locale }: Props) {
  const [active, setActive] = useState<ProjectKind>("own");

  const visible = projects.filter((p) => p.kind === active);

  const tabs: Array<{ kind: ProjectKind; label: string; count: number }> = [
    {
      kind: "own",
      label: dict.projects.ownTab,
      count: projects.filter((p) => p.kind === "own").length,
    },
    {
      kind: "client",
      label: dict.projects.clientTab,
      count: projects.filter((p) => p.kind === "client").length,
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            {dict.projects.eyebrow}
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
            {dict.projects.title}
          </h2>
          <p className="text-balance text-base text-fg-muted sm:text-lg">{dict.projects.subtitle}</p>

          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-line bg-card p-1 text-sm">
            {tabs.map((tab) => {
              const isActive = active === tab.kind;
              return (
                <button
                  key={tab.kind}
                  type="button"
                  onClick={() => setActive(tab.kind)}
                  className={
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium transition " +
                    (isActive
                      ? "bg-fg text-surface"
                      : "text-fg-subtle hover:text-fg")
                  }
                >
                  {tab.label}
                  <span
                    className={
                      "rounded-full px-1.5 text-xs " +
                      (isActive
                        ? "bg-surface/15 text-surface"
                        : "bg-line text-fg-subtle")
                    }
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="surface-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-line-strong"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-2.5 py-1 text-[11px] uppercase tracking-wider text-fg-muted">
                  {project.kind === "own" ? "CORPSC" : locale === "es" ? "Cliente" : "Client"}
                </span>
                {project.highlight ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-positive/15 px-2 py-0.5 text-[11px] font-medium text-positive">
                    ★ {locale === "es" ? "Destacado" : "Featured"}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-fg">{project.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-accent">
                {project.category[locale]}
              </p>
              <p className="mt-3 text-sm text-fg-muted">{project.summary[locale]}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-card px-2 py-0.5 text-[11px] text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs">
                <span className="text-fg-faint">{new URL(project.url).host}</span>
                <span className="inline-flex items-center gap-1 font-medium text-fg transition group-hover:gap-2">
                  {dict.projects.visit}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
