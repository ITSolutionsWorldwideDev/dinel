import { routing } from "@/i18n/routing";
import { allJobs } from "@/app/data/jobs";

export const dynamic = "force-dynamic";

const baseUrl = "https://www.staffoutsourcing.nl";

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
      const url = `${baseUrl}/${locale}${route}`;

      const priority = route === "" ? "1.0" : "0.8";
      const changefreq = route === "" ? "daily" : "weekly";

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      for (const l of routing.locales) {
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${route}" />\n`;
      }

      xml += `  </url>\n`;
    }
  }

  // Dynamic job routes
  for (const locale of routing.locales) {
    for (const job of allJobs) {
      const url = `${baseUrl}/${locale}/jobs/${job.slug}`;

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
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