"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section className="bg-gray-50 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f2c40d] mb-3">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {t("heading")}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? "border-[#1a4550] bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span
                    className={`font-semibold text-sm md:text-base ${
                      isOpen ? "text-[#1a4550]" : "text-black"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-[#0d2b33] to-[#1a4550] rotate-180"
                        : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${
                        isOpen ? "text-[#f2c40d]" : "text-gray-500"
                      }`}
                    />
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
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
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