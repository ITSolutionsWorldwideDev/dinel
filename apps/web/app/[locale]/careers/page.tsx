import fs from "fs";
import path from "path";
import type { Metadata } from "next";

import CareerHero from "../../../components/careers/CareerHero";
import CareerIntro from "../../../components/careers/CareerIntro";
import JobList from "../../../components/careers/JobList";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/seo";

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
        canonical: getCanonicalUrl(locale, ["careers"]),
        languages: getHreflangAlternates(["careers"]),
      },
    };
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, "utf8"));
  const meta = commonData.careers?.meta;

  return {
    title: meta?.title ?? "Staff Outsourcing",
    description: meta?.description ?? "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, ["careers"]),
      languages: getHreflangAlternates(["careers"]),
    },
  };
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CareerHero />
      <CareerIntro />
      <JobList />
      <div className="max-w-7xl mx-auto px-6 py-12"></div>
    </main>
  );
}