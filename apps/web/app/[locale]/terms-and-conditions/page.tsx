import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import React from "react";
import { getCanonicalUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getCanonicalUrl(locale, ["terms-and-conditions"]),
    },
  };
}

export default async function TermsConditionsPage() {
  const t = await getTranslations("terms");

  return (
    <div className="min-h-screen bg-gray-50/50 w-full selection:bg-[#f2c40d] selection:text-[#0d2b33]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] text-white py-20 px-4 sm:px-8 lg:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,196,13,0.08),transparent_50%)] pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto space-y-4 relative z-10">
          <span className="inline-block py-1.5 px-5 rounded-full bg-[#f2c40d]/10 text-[#f2c40d] border border-[#f2c40d]/30 text-xs font-bold tracking-widest uppercase shadow-sm">
            {t("hero.badge")}
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Content Section - Animated Styled Cards */}
      <section className="py-16 px-4 sm:px-6 md:px-12 w-full bg-white">
        <div className="w-full max-w-7xl mx-auto space-y-8 text-slate-700 leading-relaxed text-base md:text-lg">
          
          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-6 sm:p-10 rounded-3xl border border-[#1a4550]/20 hover:border-[#f2c40d]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group">
            <h2 className="text-2xl font-black text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">{t("sections.s1.title")}</h2>
            <p>{t("sections.s1.body")}</p>
          </div>

          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-6 sm:p-10 rounded-3xl border border-[#1a4550]/20 hover:border-[#f2c40d]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group">
            <h2 className="text-2xl font-black text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">{t("sections.s2.title")}</h2>
            <p>{t("sections.s2.body")}</p>
          </div>

          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-6 sm:p-10 rounded-3xl border border-[#1a4550]/20 hover:border-[#f2c40d]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group">
            <h2 className="text-2xl font-black text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">{t("sections.s3.title")}</h2>
            <p>{t("sections.s3.body")}</p>
          </div>

          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-6 sm:p-10 rounded-3xl border border-[#1a4550]/20 hover:border-[#f2c40d]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group">
            <h2 className="text-2xl font-black text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">{t("sections.s4.title")}</h2>
            <p>{t("sections.s4.body")}</p>
          </div>

          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-6 sm:p-10 rounded-3xl border border-[#1a4550]/20 hover:border-[#f2c40d]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group">
            <h2 className="text-2xl font-black text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">{t("sections.s5.title")}</h2>
            <p>{t("sections.s5.body")}</p>
          </div>

        </div>
      </section>
    </div>
  );
}