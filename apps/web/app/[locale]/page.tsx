import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Homei from "@/components/layout/home/Home";
import { getCanonicalUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const commonPath = path.join(process.cwd(), "i18n", "locales", locale, "common.json");

  if (!fs.existsSync(commonPath)) {
    return {
      title: "Staff Outsourcing",
      description: "Recruit and outsource staff in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale),
      },
    };
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, "utf8"));
  const seo = commonData.home?.seo;

  return {
    title: seo?.metaTitle ?? "Staff Outsourcing",
    description: seo?.metaDescription ?? "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale), // no segments — homepage root
    },
  };
}

export default function Home() {
  return (
    <div>
      <Homei />
    </div>
  );
}