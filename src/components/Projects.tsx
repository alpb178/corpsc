"use client";

import { useState } from "react";
import { projects, type ProjectKind, type ProjectLink, type ProjectLinkKind } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";

interface Props {
  dict: Dict;
  locale: Locale;
}

/** Display host without crashing the section on a malformed URL in the data. */
function hostFromUrl(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function linkLabel(link: ProjectLink): string {
  if (link.kind === "android") return "Google Play";
  if (link.kind === "ios") return "App Store";
  return hostFromUrl(link.url);
}

function PlatformIcon({ kind }: { kind: ProjectLinkKind }) {
  if (kind === "android") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.2 3.3c-.3.2-.45.5-.45.9v15.6c0 .4.15.7.45.9l9.05-8.7L4.2 3.3zm10.3 7.05 2.55-2.45-9.4-5.3 6.85 7.75zm0 3.3-6.85 7.75 9.4-5.3-2.55-2.45zm1.05-1.65 2.5 1.4c.65.37.65 1.3 0 1.67l-2.5 1.4-2.7-2.24 2.7-2.23z" />
      </svg>
    );
  }
  if (kind === "ios") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.5c0-2.3 1.9-3.4 2-3.45-1.1-1.6-2.8-1.8-3.4-1.85-1.45-.15-2.83.85-3.56.85-.73 0-1.86-.83-3.06-.81-1.57.02-3.02.91-3.83 2.32-1.63 2.83-.42 7.02 1.17 9.32.78 1.12 1.7 2.38 2.91 2.34 1.17-.05 1.61-.76 3.02-.76 1.41 0 1.8.76 3.04.73 1.26-.02 2.05-1.14 2.82-2.27.89-1.3 1.26-2.56 1.28-2.62-.03-.01-2.45-.94-2.48-3.72zM14.7 5.3c.64-.78 1.07-1.86.95-2.94-.92.04-2.04.61-2.7 1.39-.59.69-1.11 1.79-.97 2.85 1.03.08 2.08-.52 2.72-1.3z" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects({ dict, locale }: Props) {
  // Lead with client work — it's the strongest proof for a prospect.
  const [active, setActive] = useState<ProjectKind>("client");

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
          {visible.map((project) => {
            const links: ProjectLink[] = [
              ...(project.url ? [{ kind: "web" as const, url: project.url }] : []),
              ...(project.links ?? []),
            ];
            // A single web link makes the whole card clickable; store links
            // render as separate buttons (nested <a> inside <a> is invalid).
            const wholeCardLink = links.length === 1 && links[0].kind === "web";

            const cardClass =
              "surface-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition" +
              (wholeCardLink ? " hover:-translate-y-1 hover:border-line-strong" : "");

            const inner = (
              <>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-2.5 py-1 text-[11px] uppercase tracking-wider text-fg-muted">
                    {project.kind === "own" ? "CORPSC" : locale === "es" ? "Cliente" : "Client"}
                  </span>
                  {project.highlight ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-positive/15 px-2 py-0.5 text-[11px] font-medium text-positive-text">
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

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-xs">
                  {wholeCardLink ? (
                    <>
                      <span className="text-fg-faint">{hostFromUrl(links[0].url)}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-fg transition group-hover:gap-2">
                        {dict.projects.visit}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </>
                  ) : links.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 font-medium text-fg transition hover:border-line-strong"
                        >
                          <PlatformIcon kind={link.kind} />
                          {linkLabel(link)}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-fg-faint">
                      {locale === "es" ? "Proyecto privado" : "Private project"}
                    </span>
                  )}
                </div>
              </>
            );

            return wholeCardLink ? (
              <a
                key={project.slug}
                href={links[0].url}
                target="_blank"
                rel="noreferrer noopener"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div key={project.slug} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
