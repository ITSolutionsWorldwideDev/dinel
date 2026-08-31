"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Type definition define kar di
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

  return (
    <section className="mb-16 w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#0d2b33] tracking-tight text-center">
        {title}
      </h2>
      
      <div className="w-full max-w-3xl space-y-4">
        {faqs?.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={`faq-${index}`}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <h3 className="text-lg font-bold text-[#0d2b33] pr-4">
                  {faq.q}
                </h3>
                <FaChevronDown
                  className={`w-4 h-4 text-[#0d2b33] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-50 mt-1">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}