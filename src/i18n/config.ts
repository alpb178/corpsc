export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** BCP 47 tag for `<html lang>` and hreflang. The URL keeps the short code. */
export const localeTags: Record<Locale, string> = {
  es: "es",
  en: "en",
  pt: "pt-BR",
};

/** Open Graph locale (`language_TERRITORY`). */
export const ogLocales: Record<Locale, string> = {
  es: "es_BO",
  en: "en_US",
  pt: "pt_BR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** hreflang → path of the same page in every locale, plus x-default. */
export function localeAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[localeTags[locale]] = `/${locale}${path}`;
  languages["x-default"] = `/${defaultLocale}${path}`;
  return languages;
}
