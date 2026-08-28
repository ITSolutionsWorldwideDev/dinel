import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const messagesMap = {
  en: () => import("./locales/en/common.json"),
  nl: () => import("./locales/nl/common.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = await messagesMap[locale as keyof typeof messagesMap]();

  return {
    locale,
    messages: messages.default,
  };
});
