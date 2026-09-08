// lib/seo.ts
import { routing } from "@/i18n/routing";

const BASE_URL = "https://staffoutsourcing.nl";

/**
 * Builds a canonical URL automatically based on actual locale + route segments.
 * Matches "as-needed" locale prefix behavior: default locale has no prefix,
 * other locales get their prefix.
 */
export function getCanonicalUrl(locale: string, segments: string[] = []) {
  const needsPrefix = locale !== routing.defaultLocale;

  const localePart = needsPrefix ? `/${locale}` : "";
  const pathPart = segments.filter(Boolean).length
    ? `/${segments.filter(Boolean).join("/")}`
    : "";

  return `${BASE_URL}${localePart}${pathPart}` || BASE_URL;
}