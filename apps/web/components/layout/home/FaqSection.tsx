"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type Faq = { q: string; a: string };

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations("faqSection");
  const faqs = t.raw("faqs") as Faq[];

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#f7fafa] to-white pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#0d2b33]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#f2c40d]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550] bg-[#1a4550]/5 border border-[#1a4550]/15 px-3.5 py-1.5 rounded-full">
              {t("badge")}
            </span>
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight">
            {t("heading")}
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden shadow-lg shadow-[#1a4550]/5 ${
                  isOpen
                    ? "border-[#1a4550] bg-white shadow-xl"
                    : "border-[#1a4550]/15 bg-white hover:border-[#1a4550]/40"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-7 py-6 focus:outline-none"
                >
                  <span
                    className={`font-bold text-base md:text-lg transition-colors ${
                      isOpen ? "text-[#1a4550]" : "text-[#0d2b33]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isOpen
                        ? "bg-gradient-to-br from-[#0d2b33] to-[#1a4550] rotate-180 text-[#f2c40d]"
                        : "bg-[#f7fafa] text-gray-500 border border-[#0d2b33]/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7 pt-2 border-t border-gray-100">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;