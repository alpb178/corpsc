import type { MetadataRoute } from "next";
import { localeAlternates, locales } from "@/i18n/config";

const base = "https://www.corpsc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    Object.entries(localeAlternates()).map(([tag, path]) => [tag, `${base}${path}`]),
  );

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    alternates: { languages },
  }));
}
