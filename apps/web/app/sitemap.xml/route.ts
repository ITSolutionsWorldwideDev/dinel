import { routing } from "@/i18n/routing";
import { allJobs } from "@/app/data/jobs";
import { getCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

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

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;

  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Static routes
  for (const locale of routing.locales) {
    for (const route of staticRoutes) {
      const segments = route ? route.split("/").filter(Boolean) : [];
      const url = getCanonicalUrl(locale, segments);

      const priority = route === "" ? "1.0" : "0.8";
      const changefreq = route === "" ? "daily" : "weekly";

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      for (const l of routing.locales) {
        const altUrl = getCanonicalUrl(l, segments);
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl}" />\n`;
      }

      xml += `  </url>\n`;
    }
  }

  // Dynamic job routes
  for (const locale of routing.locales) {
    for (const job of allJobs) {
      const jobSegments = ["jobs", job.slug];
      const url = getCanonicalUrl(locale, jobSegments);

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;

      for (const l of routing.locales) {
        const altUrl = getCanonicalUrl(l, jobSegments);
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl}" />\n`;
      }

      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}