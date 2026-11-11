import idMessages from "@/messages/id.json";
import enMessages from "@/messages/en.json";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export interface LocalizedString {
  id: string;
  en: string;
}

export type Messages = typeof idMessages;

const dictionaries: Record<Locale, Messages> = {
  id: idMessages,
  en: enMessages,
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function t(field: LocalizedString, locale: Locale): string {
  return field[locale] ?? field[defaultLocale];
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "id" ? "en" : "id";
}
