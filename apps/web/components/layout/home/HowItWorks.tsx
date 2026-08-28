// HowItWorks.tsx
import React from "react";
import { ArrowRight, MessageSquare, Users, Calendar, Briefcase } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const stepIcons = [
  <MessageSquare key="msg" className="w-6 h-6 text-[#f2c40d]" />,
  <Users key="users" className="w-6 h-6 text-[#f2c40d]" />,
  <Calendar key="cal" className="w-6 h-6 text-[#f2c40d]" />,
  <Briefcase key="brief" className="w-6 h-6 text-[#f2c40d]" />,
];

type Step = { num: string; title: string; desc: string };

const HowItWorks = async () => {
  const t = await getTranslations("howItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-white relative overflow-hidden py-20 md:py-28">
      <div className="w-full px-6 md:px-12 lg:px-16">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0d2b33]/30 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d2b33] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-extrabold text-gray-200 group-hover:text-[#0d2b33]/20 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-gray-100 rounded-full mt-8 overflow-hidden">
                <div className="w-0 h-full bg-[#f2c40d] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#0d2b33] hover:bg-[#153f4a] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-sm"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4 text-[#f2c40d]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;