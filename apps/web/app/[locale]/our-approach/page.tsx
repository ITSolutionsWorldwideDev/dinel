import React from "react";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

import OurApproachHero from "@/components/layout/our-approach/OurApproachHero";
import OurApproachThinking from "@/components/layout/our-approach/OurApproachThinking";
import OurApproachWork from "@/components/layout/our-approach/OurApproachWork";
import OurApproachLines from "@/components/layout/our-approach/OurApproachLines";
import OurApproachCTA from "@/components/layout/our-approach/OurApproachCTA";
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
        canonical: getCanonicalUrl(locale, ["our-approach"]),
      },
    };
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, "utf8"));
  const meta = commonData.ourApproach?.meta;

  return {
    title: meta?.title ?? "Staff Outsourcing",
    description: meta?.description ?? "Recruit and outsource staff in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, ["our-approach"]),
      languages: getHreflangAlternates(["our-approach"]),
    },
  };
}

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12">
      <OurApproachHero />
      <OurApproachThinking />
      <OurApproachWork />
      <OurApproachLines />
      <OurApproachCTA />
    </main>
  );
}