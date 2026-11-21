import { locales, translations, type Dictionary, type Locale } from './translations';

export type { Dictionary, Locale };

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getTranslation(locale: Locale): Dictionary {
  return translations[locale];
}

export function localePath(locale: Locale): string {
  return locale === 'id' ? '/' : `/${locale}/`;
}
