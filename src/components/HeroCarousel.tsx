"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroProjects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";

const AUTOPLAY_MS = 5000;

function hostFromUrl(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroCarousel({ dict, locale }: { dict: Dict; locale: Locale }) {
  const slides = heroProjects;
  const copy = dict.hero.carousel;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  // Autoplay, unless the user is interacting, the tab is hidden, or they have
  // asked for reduced motion.
  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const active = slides[index];

  return (
    <div
      ref={rootRef}
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={copy.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
    >
      {/* Soft brand glow behind the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
        style={{
          background:
            "conic-gradient(from 210deg, var(--hero-glow-1), var(--hero-glow-2), var(--hero-glow-3), var(--hero-glow-1))",
        }}
      />

      <div className="overflow-hidden rounded-2xl border border-line-strong bg-elevated shadow-2xl shadow-black/20">
        {/* Browser chrome — these are live products, so frame them like one. */}
        <div className="flex items-center gap-2 border-b border-line bg-card px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
          </span>
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-surface/70 px-3 py-1 text-[11px] text-fg-faint">
            {active.url ? hostFromUrl(active.url) : active.name}
          </span>
        </div>

        <div className="relative aspect-[16/10]">
          {slides.map((project, i) => (
            <Image
              key={project.slug}
              src={project.image as string}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 40vw, 92vw"
              priority={i === 0}
              className={`object-cover object-top transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
            />
          ))}

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={copy.prev}
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-surface/80 text-fg backdrop-blur transition hover:bg-surface"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={copy.next}
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-surface/80 text-fg backdrop-blur transition hover:bg-surface"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* Caption + dots */}
        <div className="flex items-center justify-between gap-4 border-t border-line bg-card px-4 py-3">
          <div aria-live="polite" className="min-w-0">
            <p className="truncate text-sm font-semibold text-fg">{active.name}</p>
            <p className="truncate text-xs text-fg-faint">{active.category[locale]}</p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {active.url && (
              <a
                href={active.url}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-fg-muted transition hover:border-line-strong hover:text-fg sm:inline-flex"
              >
                {copy.visit}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            <div className="flex items-center gap-1.5">
              {slides.map((project, i) => (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={copy.goTo.replace("{n}", String(i + 1))}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-fg" : "w-1.5 bg-fg-faint/40 hover:bg-fg-faint"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
