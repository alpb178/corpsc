import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";
import es from "./dictionaries/es";
import en from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type Dict = Dictionary;
