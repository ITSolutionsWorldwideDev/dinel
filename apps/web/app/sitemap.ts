import { MetadataRoute } from "next";
import { routing } from "../i18n/routing";
import { allJobs } from "./data/jobs";

const baseUrl = "https://staffoutsourcing.nl";

// Static routes that exist for every locale
const staticRoutes = [
  "",
  "/our-approach",
  "/about",
  "/careers",
  "/contact-us",
  "/it-development",
  "/design-services",
  "/marketing-analytics",
  "/admin-business-support",
  "/finance-accounting",
  "/travel-reservations",
  "/service/recruitment-placement",
  "/service/recruitment-process-outsourcing",
  "/service/temporary-staffing",
  "/service/payrolling",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes for each locale
  for (const locale of routing.locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  // Dynamic job detail pages for each locale
  for (const locale of routing.locales) {
    for (const job of allJobs) {
      entries.push({
        url: `${baseUrl}/${locale}/jobs/${job.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return entries;
}