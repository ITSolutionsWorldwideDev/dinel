import { routing } from "@/i18n/routing";
import { getCanonicalUrl } from "@/lib/seo";
import { getDbPublishedJobs } from "@/lib/jobs/dbJobs";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const staticRoutes = [
  "",
  "/about",
  "/our-approach",
  "/careers",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/it-development",
  "/design-services",
  "/marketing-analytics",
  "/admin-business-support",
  "/finance-accounting",
  "/travel-reservations",
  "/supply-chain",
  "/recruitment-outsourcing",
  "/recruitment-process-outsourcing",
  "/temporary-staffing",
  "/payrolling",
];

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function formatDate(dateVal?: string | Date | null): string | undefined {
  if (!dateVal) return undefined;
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString().split("T")[0];
  } catch {
    return undefined;
  }
}

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 1. Static routes across all locales (without hreflang tags)
  for (const locale of routing.locales) {
    for (const route of staticRoutes) {
      const segments = route ? route.split("/").filter(Boolean) : [];
      const url = getCanonicalUrl(locale, segments);

      const priority = route === "" ? "1.0" : "0.8";
      const changefreq = route === "" ? "daily" : "weekly";

      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(url)}</loc>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  // 2. Dynamic job routes (Strictly from the Admin Dashboard database only)
  const seenSlugs = new Set<string>();
  const jobsToInclude: { slug: string; lastmod?: string }[] = [];

  try {
    const dbJobs = await getDbPublishedJobs();
    for (const job of dbJobs) {
      const slug = (job.slug || (job.id ? String(job.id) : "")).trim();
      if (slug && !seenSlugs.has(slug)) {
        seenSlugs.add(slug);
        jobsToInclude.push({
          slug,
          lastmod: formatDate(job.published_at || job.created_at),
        });
      }
    }
  } catch (err) {
    console.error("[Sitemap] Error fetching DB jobs:", err);
  }

  // Dynamic job routes for all locales (without hreflang tags)
  for (const locale of routing.locales) {
    for (const job of jobsToInclude) {
      const jobSegments = ["jobs", job.slug];
      const url = getCanonicalUrl(locale, jobSegments);

      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(url)}</loc>\n`;
      if (job.lastmod) {
        xml += `    <lastmod>${job.lastmod}</lastmod>\n`;
      }
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=0, must-revalidate",
    },
  });
}
