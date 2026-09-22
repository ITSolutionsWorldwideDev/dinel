import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "as-needed",
  localeDetection: false,

  pathnames: {
    // ================= STATIC PAGES =================
    "/": "/",
    "/about": {
      nl: "/over-ons",
      en: "/about",
    },
    "/our-approach": {
      nl: "/onze-aanpak",
      en: "/our-approach",
    },
    "/careers": {
      nl: "/vacatures",
      en: "/careers",
    },
    "/contact-us": {
      nl: "/neem-contact-op",
      en: "/contact-us",
    },
    "/privacy-policy": {
      nl: "/privacybeleid",
      en: "/privacy-policy",
    },
    "/terms-and-conditions": {
      nl: "/algemene-voorwaarden",
      en: "/terms-and-conditions",
    },

    // ================= CATEGORY PAGES =================
    "/it-development": {
      nl: "/it-ontwikkeling",
      en: "/it-development",
    },
    "/design-services": {
      nl: "/ontwerpdiensten",
      en: "/design-services",
    },
    "/marketing-analytics": {
      nl: "/marketing-analyse",
      en: "/marketing-analytics",
    },
    "/admin-business-support": {
      nl: "/administratie-bedrijfsondersteuning",
      en: "/admin-business-support",
    },
    "/finance-accounting": {
      nl: "/financien-boekhouding",
      en: "/finance-accounting",
    },
    "/travel-reservations": {
      nl: "/reizen-reserveringen",
      en: "/travel-reservations",
    },
    "/supply-chain": {
      nl: "/toeleveringsketen",
      en: "/supply-chain",
    },

    // ================= SERVICE MODEL PAGES =================
    "/recruitment-outsourcing": {
      nl: "/werving-selectie",
      en: "/recruitment-outsourcing",
    },
    "/recruitment-process-outsourcing": {
      nl: "/rpo-wervingsproces-uitbesteding",
      en: "/recruitment-process-outsourcing",
    },
    "/temporary-staffing": {
      nl: "/uitzendwerk",
      en: "/temporary-staffing",
    },
    "/payrolling": {
      nl: "/payrolling",
      en: "/payrolling",
    },

    // ================= DYNAMIC ROUTES =================
    "/jobs/[slug]": {
      nl: "/vacatures/[slug]",
      en: "/jobs/[slug]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;