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
      <div className="tile overflow-hidden !border-white/20 bg-[#0b1f42]">
        {/* Browser chrome — these are live products, so frame them like one. */}
        <div className="flex items-center gap-2 border-b border-white/12 px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="mx-auto max-w-[60%] truncate rounded-full bg-white/8 px-3 py-1 text-[11px] text-white/50">
            {active.url ? hostFromUrl(active.url) : active.name}
          </span>
        </div>

        {/* Stage: a light room the devices sit in, so the products read as
            objects rather than as flat screenshots pasted to the edges. */}
        <div
          className="relative aspect-[16/10]"
          style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #e6ebf3 100%)" }}
        >
          {slides.map((project, i) => (
            <div
              key={project.slug}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Laptop. Bottom-cropped by the stage, as on a real desk. */}
              <div className="absolute bottom-0 left-[1%] w-[84%] sm:left-[2%] sm:w-[83%]">
                <div className="rounded-t-[10px] bg-[#141a26] p-[7px] pb-0 shadow-[0_24px_50px_-14px_rgba(9,17,38,0.55)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-[5px] bg-white">
                    <Image
                      src={project.image as string}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 32vw, 70vw"
                      priority={i === 0}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Phone, overlapping the laptop on the right. */}
              <div className="absolute bottom-0 right-[1%] w-[23%] sm:right-[2%] sm:w-[21%]">
                <div className="rounded-t-[16px] bg-[#141a26] p-[5px] pb-0 shadow-[-14px_18px_36px_-12px_rgba(9,17,38,0.55)]">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-t-[11px] bg-white">
                    <Image
                      src={project.imageMobile as string}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 8vw, 18vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption + dots */}
        <div className="flex items-center justify-between gap-4 border-t border-white/12 px-4 py-3.5">
          <div aria-live="polite" className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{active.name}</p>
            <p className="truncate text-xs text-white/50">{active.category[locale]}</p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {active.url && (
              <a
                href={active.url}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1 rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:border-white hover:text-white sm:inline-flex"
              >
                {copy.visit}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            {/* Controls live on the bar, not floating over the mockups. */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label={copy.prev}
                className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white/70 transition hover:border-white hover:text-white"
              >
                <Chevron dir="left" />
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((project, i) => (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={copy.goTo.replace("{n}", String(i + 1))}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label={copy.next}
                className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white/70 transition hover:border-white hover:text-white"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
