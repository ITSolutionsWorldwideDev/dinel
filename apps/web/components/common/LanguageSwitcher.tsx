"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === "nl" ? "en" : "nl";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: switchTo })}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-300 hover:bg-[#0d2b33]/5 transition-colors"
    >
      <ReactCountryFlag
        countryCode={locale === "nl" ? "US" : "NL"}
        svg
        style={{ width: "1.1em", height: "1.1em", borderRadius: "2px" }}
        title={locale === "nl" ? "English" : "Nederlands"}
      />
      <span>{locale === "nl" ? "EN" : "NL"}</span>
    </button>
  );
}