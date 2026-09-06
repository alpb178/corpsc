"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Stagger, in ms — used to let a grid arrive one item after another. */
  delay?: number;
  className?: string;
}

/**
 * Fades a block up into place the first time it scrolls into view, and then
 * leaves it alone — the section reads as arriving, not as animating on every
 * pass. Same shape as the reveal on orlegitech.com: a 700ms ease-out from
 * 2rem below at 95%, triggered once a fifth of the block is past the fold.
 */
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    // Without an observer the content has to start visible — never leave it
    // stranded at opacity 0.
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={
        "transition-all duration-700 ease-out " +
        (shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
}
