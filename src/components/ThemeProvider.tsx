"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface Ctx {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "corpsc-theme";

function readInitial(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readInitial());

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/**
 * Inline script written into the <head> to set the theme class BEFORE
 * React hydrates. This avoids the white-flash when reloading dark mode.
 */
export const themeBootstrapScript = `
(function(){
  try{
    var stored = localStorage.getItem('${STORAGE_KEY}');
    // Default to light unless the user explicitly chose dark.
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.add(theme);
  }catch(e){
    document.documentElement.classList.add('light');
  }
})();
`;
