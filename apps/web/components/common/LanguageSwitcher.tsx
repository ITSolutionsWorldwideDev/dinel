"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import { useParams } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams(); // 👈 gets { slug: "..." } etc. for dynamic routes like /jobs/[slug]

  const switchTo = locale === "nl" ? "en" : "nl";

  const handleSwitch = () => {
    // 👇 For dynamic routes (e.g. "/jobs/[slug]"), `pathname` is the literal
    // template string, not the real URL — next-intl needs `params` alongside
    // it to fill in the actual slug when building the translated URL. Static
    // routes ignore the extra params object, so this is safe everywhere.
    router.replace(
      // @ts-expect-error -- pathname type is route-dependent, params covers dynamic segments
      { pathname, params },
      { locale: switchTo }
    );
  };

  const flagTitle = locale === "nl" ? "English flag" : "Nederlands flag";

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-300 hover:bg-[#0d2b33]/5 transition-colors"
      aria-label={`Switch language to ${locale === "nl" ? "English" : "Nederlands"}`}
    >
      <ReactCountryFlag
        countryCode={locale === "nl" ? "US" : "NL"}
        svg
        style={{ width: "1.1em", height: "1.1em", borderRadius: "2px" }}
        title={flagTitle}
        aria-label={flagTitle}
      />
      <span>{locale === "nl" ? "EN" : "NL"}</span>
    </button>
  );
}