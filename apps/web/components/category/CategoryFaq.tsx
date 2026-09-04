"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FaqItem {
  q: string;
  a: string;
}

interface CategoryFaqProps {
  title: string;
  faqs: FaqItem[];
}

export default function CategoryFaq({ title, faqs }: CategoryFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midpoint = Math.ceil((faqs?.length || 0) / 2);
  const leftFaqs = faqs?.slice(0, midpoint) || [];
  const rightFaqs = faqs?.slice(midpoint) || [];

  const renderFaq = (faq: FaqItem, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={`faq-${index}`}
        className={`bg-white border rounded-3xl transition-all duration-300 overflow-hidden shadow-lg shadow-[#1a4550]/5 ${
          isOpen ? "border-[#1a4550] ring-2 ring-[#1a4550]/10" : "border-gray-200 hover:border-[#1a4550]/40"
        }`}
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full flex items-center justify-between p-7 md:p-8 text-left focus:outline-none cursor-pointer group"
        >
          <h3 className="text-lg md:text-xl font-bold text-[#0d2b33] group-hover:text-[#1a4550] transition-colors pr-4">
            {faq.q}
          </h3>

          <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? "bg-[#1a4550] text-white rotate-180 shadow-md shadow-[#1a4550]/20" : "bg-[#1a4550]/5 text-[#1a4550] group-hover:bg-[#1a4550]/10"
          }`}>
            <FaChevronDown className="w-3.5 h-3.5" />
          </div>
        </button>

        {isOpen && (
          <div className="px-7 pb-8 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100 mt-1 bg-[#f7fafa]/50">
            <p className="pt-4">{faq.a}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f7fafa] to-white pb-24 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
            Got Questions?
          </span>
          <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d2b33] tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
        <div className="space-y-4">
          {leftFaqs.map((faq, i) => renderFaq(faq, i))}
        </div>
        <div className="space-y-4">
          {rightFaqs.map((faq, i) => renderFaq(faq, i + midpoint))}
        </div>
      </div>
    </section>
  );
}