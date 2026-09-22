// lib/seo.ts
import { getPathname } from "@/i18n/navigation"; // 👈 was "next-intl/routing" — getPathname actually
                                                   // comes from createNavigation()'s return object
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.staffoutsourcing.nl";

/**
 * Builds a canonical URL for the given locale, resolving the CORRECT
 * translated slug via next-intl's `pathnames` config (routing.ts) —
 * e.g. "it-development" + locale "nl" → "/it-ontwikkeling".
 *
 * IMPORTANT: `segments` must be the CANONICAL (English) route key(s) —
 * the same key you used in routing.ts's `pathnames` object — not the
 * already-localized slug from the URL. For dynamic routes, pass the
 * special ["jobs", slug] shape and it's handled below.
 */
export function getCanonicalUrl(locale: string, segments: string[] = []) {
  // Dynamic job route: ["jobs", slug] → resolve via the "/jobs/[slug]" pathname entry
  if (segments[0] === "jobs" && segments[1]) {
    const path = getPathname({
      locale: locale as any,
      href: { pathname: "/jobs/[slug]", params: { slug: segments[1] } },
    });
    return `${BASE_URL}${path}`;
  }

  // Static / category / service routes
  const href = segments.filter(Boolean).length
    ? (`/${segments.filter(Boolean).join("/")}` as any)
    : "/";

  const path = getPathname({ locale: locale as any, href });
  return `${BASE_URL}${path}` || BASE_URL;
}

export function getHreflangAlternates(segments: string[] = []) {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = getCanonicalUrl(locale, segments);
  }

  languages["x-default"] = getCanonicalUrl(routing.defaultLocale, segments);

  return languages;
}