import fs from "fs";
import path from "path";
import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactDetailsAndReassurance from "@/components/contact/ContactDetailsAndReassurance";
import EnquiryForm from "@/components/forms/EnquiryForm";
import React from "react";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/seo";
interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const commonPath = path.join(process.cwd(), "i18n", "locales", locale, "common.json");

  if (!fs.existsSync(commonPath)) {
    return {
      title: "Contact Us | Staff Outsourcing",
      description: "Get in touch with our team to discuss your hiring needs in the Netherlands.",
      alternates: {
        canonical: getCanonicalUrl(locale, ["contact-us"]),
        languages: getHreflangAlternates(["contact-us"]),
      },
    };
  }

  const commonData = JSON.parse(fs.readFileSync(commonPath, "utf8"));
  const meta = commonData.contact?.meta;

  return {
    title: meta?.title ?? "Contact Us | Staff Outsourcing",
    description: meta?.description ?? "Get in touch with our team to discuss your hiring needs in the Netherlands.",
    alternates: {
      canonical: getCanonicalUrl(locale, ["contact-us"]),
       languages: getHreflangAlternates(["contact-us"]),
    },
  };
}

const allCategories = [
  { value: "it-development", label: "IT & Development" },
  { value: "design-services", label: "Design Services" },
  { value: "marketing-analytics", label: "Marketing & Analytics" },
  { value: "admin-business-support", label: "Admin & Business Support" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "travel-reservations", label: "Travel & Reservations" },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactChannels />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white py-20">
        <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-[#0d2b33]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#f2c40d]/10 blur-3xl" />

        <div className="w-full px-6 md:px-12 lg:px-16 max-w-[1500px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Connect with our team or visit our office location to explore seamless collaboration opportunities.
            </p>
          </div>

          <div className="w-full">
            <EnquiryForm categories={allCategories} defaultMode="hiring" />
          </div>
        </div>
      </section>

      <ContactDetailsAndReassurance />
    </div>
  );
};

export default ContactPage;