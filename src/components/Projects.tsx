"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type ProjectKind, type ProjectLink, type ProjectLinkKind } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import Reveal from "./Reveal";
import Section from "./Section";

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
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.609 1.814 13.792 12 3.61 22.186c-.352-.338-.61-.83-.61-1.428V3.242c0-.598.258-1.09.609-1.428zm11.24 11.244 2.257 2.257-11.83 6.744 9.573-9.001zm0-2.116L5.276 1.941l11.83 6.744-2.257 2.257zm1.488 1.488 3.195 1.821c.91.519.91 1.365 0 1.884l-3.195 1.821-2.008-2.008 2.008-2.018z" />
      </svg>
    );
  }
  if (kind === "ios") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.77 1 .08 2.03-.51 2.67-1.27z" />
      </svg>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="text-base leading-none transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
    >
      ↗
    </span>
  );
}

export default function Projects({ dict, locale }: Props) {
  // Lead with our own products — they are the ones CORPSC builds, runs and
  // answers for, and the hero carousel already puts them first.
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

  // Underline tabs rather than a pill switch — they read as navigation
  // through a catalogue, which is what this section is. The count rides in a
  // chip beside the label so the size of each set is visible before clicking.
  const tabBar = (
    <nav
      aria-label={dict.projects.eyebrow}
      className="flex w-full items-center gap-2 border-b border-line pb-1 lg:w-auto lg:border-b-0 lg:pb-0"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.kind;
        return (
          <button
            key={tab.kind}
            type="button"
            onClick={() => setActive(tab.kind)}
            aria-pressed={isActive}
            className={
              "group relative flex items-center gap-2 px-4 py-2 text-sm transition-colors " +
              (isActive ? "font-bold text-accent" : "font-semibold text-fg-faint hover:text-fg")
            }
          >
            <span>{tab.label}</span>
            <span
              className={
                "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs transition-colors " +
                (isActive
                  ? "bg-accent-soft font-bold text-accent"
                  : "bg-elevated font-semibold text-fg-faint group-hover:text-fg")
              }
            >
              {tab.count}
            </span>
            {isActive ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[var(--color-brand-blue)]"
              />
            ) : null}
          </button>
        );
      })}
    </nav>
  );

  return (
    <Section
      id="projects"
      band="alt"
      eyebrow={dict.projects.eyebrow}
      title={dict.projects.title}
      subtitle={dict.projects.subtitle}
      aside={tabBar}
      revealChildren={false}
    >
      <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => {
          const links: ProjectLink[] = [
            ...(project.url ? [{ kind: "web" as const, url: project.url }] : []),
            ...(project.links ?? []),
          ];
          // The button is the link now, so the card itself is not an anchor —
          // that would nest interactive elements.
          const [primary, ...secondary] = links;

          return (
            // Cards arrive one after another. The stagger is capped so the last
            // row of a long tab does not sit blank for a second and a half.
            <Reveal key={project.slug} delay={Math.min(index, 5) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(13,21,38,0.04),0_1px_2px_rgba(13,21,38,0.02)] transition-all duration-300 ease-out hover:-translate-y-3 hover:border-line-strong hover:shadow-[0_28px_45px_-12px_rgba(13,21,38,0.16),0_2px_6px_rgba(13,21,38,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                {/* Preview window: the real screenshot, with the status line,
                    the name and the ownership label laid over it. */}
                <div className="relative h-[230px] w-full overflow-hidden bg-[var(--color-brand-navy)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="font-display absolute inset-0 grid place-items-center text-3xl font-bold text-white/25"
                    >
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}

                  {/* Scrim on both ends so the overlaid chrome stays legible
                      over any screenshot. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/85"
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex items-center gap-2 text-xs font-medium text-white/85">
                        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        {dict.projects.live}
                      </span>

                      {project.highlight ? (
                        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-bold tracking-wide text-[#0d1526] shadow-sm">
                          {dict.projects.featured}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex items-end justify-between gap-3 border-t border-white/15 pt-2">
                      <h3 className="font-display truncate text-base font-extrabold tracking-tight text-white">
                        {project.name}
                      </h3>
                      <span className="shrink-0 text-[11px] text-white/70">
                        {project.kind === "own" ? dict.projects.ownBadge : dict.projects.clientBadge}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <span className="inline-block rounded-md bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                      {project.category[locale]}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-fg-muted">
                    {project.summary[locale]}
                  </p>

                  <ul aria-label={dict.projects.stackLabel} className="mb-6 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-line bg-elevated px-2 py-1 text-xs font-medium text-fg-subtle"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-2 pt-2">
                    {primary ? (
                      <a
                        href={primary.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-primary group/btn w-full"
                      >
                        {primary.kind === "web" ? dict.projects.visit : linkLabel(primary)}
                        <PlatformIcon kind={primary.kind} />
                      </a>
                    ) : null}

                    {secondary.length > 0 ? (
                      <div className={secondary.length > 1 ? "grid grid-cols-2 gap-2" : "grid gap-2"}>
                        {secondary.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="btn btn-secondary group/btn !px-3 !py-2 !text-xs"
                          >
                            <PlatformIcon kind={link.kind} />
                            {linkLabel(link)}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
