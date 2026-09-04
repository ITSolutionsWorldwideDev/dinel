import { getTranslations } from "next-intl/server";
import React from "react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { Link } from "../../../i18n/navigation";
import { ArrowRight } from "lucide-react";

const allCategories = [
  { value: "it-development", label: "IT & Development" },
  { value: "design-services", label: "Design Services" },
  { value: "marketing-analytics", label: "Marketing & Analytics" },
  { value: "admin-business-support", label: "Admin & Business Support" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "travel-reservations", label: "Travel & Reservations" },
];

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] text-white py-24 px-6 md:px-16 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block py-1.5 px-5 rounded-full bg-[#f2c40d]/10 text-[#f2c40d] border border-[#f2c40d]/30 text-xs font-bold tracking-widest uppercase shadow-sm">
            {t("hero.badge")}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Mission & Vision Statements Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission Box */}
          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-10 rounded-3xl border border-[#1a4550]/10 shadow-sm relative">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0d2b33]/10 text-[#0d2b33] text-xs font-extrabold tracking-widest uppercase mb-4">
              {t("mission.badge")}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0d2b33] mb-4">
              {t("mission.heading")}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t("mission.body")}
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-gradient-to-b from-[#f7fafa] to-white p-10 rounded-3xl border border-[#1a4550]/10 shadow-sm relative">
            <span className="inline-block py-1 px-3 rounded-full bg-[#f2c40d]/20 text-[#0d2b33] text-xs font-extrabold tracking-widest uppercase mb-4">
              {t("vision.badge")}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0d2b33] mb-4">
              {t("vision.heading")}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t("vision.body")}
            </p>
          </div>

        </div>
      </section>

      {/* What This Means in Practice */}
      <section className="py-20 px-6 md:px-16 bg-[#f7fafa] border-t border-b border-[#1a4550]/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full">
            {t("practice.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2b33] tracking-tight">
            {t("practice.title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {t("practice.description")}
          </p>
          <div className="pt-4">
            <Link href="/our-approach" className="inline-flex items-center gap-2 bg-[#1a4550] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0d2b33] transition-all shadow-md">
              <span>{t("practice.cta")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-16 max-w-[1500px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {t("contact.description")}
            </p>
          </div>

          <div className="w-full">
            <EnquiryForm categories={allCategories} defaultMode="hiring" />
          </div>
        </div>
      </section>
    </div>
  );
}