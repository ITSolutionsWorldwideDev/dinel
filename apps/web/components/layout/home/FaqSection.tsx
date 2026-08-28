"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this legal under Dutch labor law?",
    a: "Yes. With Payrolling, we're the legal employer of record — contracts, tax withholding, and statutory obligations are ours to handle, not yours. With RPO, the candidate is hired directly by you, under your own employment terms, so standard Dutch employment law applies as it would for any hire you make.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the role and the model. Payrolling pricing is based on the employee's gross salary plus a service fee; RPO pricing is typically a placement fee based on the role's salary band. We'll give you an exact number on a call once we know the role — we don't publish a flat rate because a Virtual Assistant and an AI Engineer aren't priced the same way.",
  },
  {
    q: "How long does it take to fill a role?",
    a: "Varies by role and how niche the skill set is. [Confirm typical timeline per role category — e.g. \"2–3 weeks for most IT/digital roles\" — flagging as placeholder until confirmed.]",
  },
  {
    q: "Can we switch from Payrolling to a direct hire later?",
    a: "Yes — that's a common path. If a payrolled candidate works out and you want them on your own payroll long-term, we can convert the arrangement. Ask us about terms when you're ready.",
  },
  {
    q: "Do you only work with companies hiring one role, or can you handle multiple hires at once?",
    a: "Both. Some clients hire one role at a time; others are building out a whole team. Same process either way.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "[Placeholder — confirm minimum terms per model before publishing]",
  },
  {
    q: "What's the difference between Recruitment/Placement and Staff Outsourcing?",
    a: "With Placement, the person becomes your employee directly. With Staff Outsourcing, we employ them and lease them to you — you still direct their work, but the employment contract stays with us.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f2c40d] mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
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