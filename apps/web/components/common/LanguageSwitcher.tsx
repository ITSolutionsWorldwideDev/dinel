"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === "nl" ? "en" : "nl";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: switchTo })}
      className="px-3 py-1.5 rounded-full text-sm font-medium border border-gray-300 hover:bg-[#0d2b33]/5 transition-colors"
    >
      {locale === "nl" ? "EN" : "NL"}
    </button>
  );
}
