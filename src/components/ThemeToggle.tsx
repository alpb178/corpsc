"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ label }: { label: { light: string; dark: string } }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? label.light : label.dark}
      title={isDark ? label.light : label.dark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-fg-muted transition hover:bg-card/80 hover:text-fg"
    >
      {/* Sun */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={
          "absolute transition duration-300 " +
          (isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")
        }
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {/* Moon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={
          "absolute transition duration-300 " +
          (isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")
        }
      >
        <path
          d="M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
