"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  items: { href: string; label: string }[];
  ctaHref: string;
  ctaLabel: string;
  menuLabel: string;
}

export default function MobileMenu({ items, ctaHref, ctaLabel, menuLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 site-header"
        >
          <nav className="container-page flex flex-col gap-1 py-4 text-sm">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
