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

  // Split faqs into two halves for left/right columns
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  const renderFaq = (faq: Faq, i: number) => {
    const isOpen = openIndex === i;
    return (
      <div
        key={faq.q}
        className={`w-full rounded-3xl border-2 transition-all duration-300 overflow-hidden shadow-lg shadow-[#1a4550]/5 ${
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
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
  };

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="relative z-10 w-full flex-1 flex flex-col">

        {/* Header */}
        <div className="text-center mb-10">
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

        {/* FAQ Accordion - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full flex-1">
          <div className="space-y-4">
            {leftFaqs.map((faq, i) => renderFaq(faq, i))}
          </div>
          <div className="space-y-4">
            {rightFaqs.map((faq, i) => renderFaq(faq, i + midpoint))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;