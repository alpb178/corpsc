"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/i18n/get-dictionary";

const DURATION_MS = 1400;

/** "9+" -> ["", 9, "+"] — keeps whatever decoration the copy carries. */
function splitValue(value: string): [string, number, string] {
  const m = /^(\D*)(\d[\d.,]*)(.*)$/.exec(value);
  if (!m) return ["", NaN, value];
  return [m[1], Number(m[2].replace(/[.,]/g, "")), m[3]];
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function HeroStats({ dict }: { dict: Dict }) {
  const stats = dict.hero.stats;
  const ref = useRef<HTMLDListElement>(null);
  const [progress, setProgress] = useState(0);
  // Rendered on the server and on the first client pass as the final value, so
  // the numbers are correct with JS disabled and never flash 0 before hydration.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setAnimate(true);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setProgress(easeOutCubic(t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative border-t border-white/15">
      <div className="container-page">
        <dl ref={ref} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const [prefix, target, suffix] = splitValue(stat.value);
            const shown = Number.isNaN(target)
              ? stat.value
              : `${prefix}${Math.round(target * (animate ? progress : 1))}${
                  // The suffix only earns its place once the count lands.
                  animate && progress < 1 ? "" : suffix
                }`;

            return (
              <div
                key={stat.label}
                className={
                  "py-7 lg:py-8 " +
                  (idx % 2 === 1 ? "border-l border-white/15 pl-6 " : "lg:pr-6 ") +
                  (idx > 1 ? "border-t border-white/15 lg:border-t-0 " : "") +
                  (idx === 2 ? "lg:border-l lg:border-white/15 lg:pl-6 " : "") +
                  (idx === 3 ? "lg:pl-6 " : "")
                }
              >
                <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {/* Screen readers get the final figure, never the ticking one. */}
                  <span aria-hidden="true" className="tabular-nums">
                    {shown}
                  </span>
                  <span className="sr-only">{stat.value}</span>
                </dd>
                <dt className="mt-1.5 text-sm text-white/55">{stat.label}</dt>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
