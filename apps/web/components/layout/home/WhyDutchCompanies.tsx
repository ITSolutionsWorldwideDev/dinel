import React from "react";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Point = { title: string; desc: string };

const WhyDutchCompanies = async () => {
  const t = await getTranslations("whyDutchCompanies");
  const points = t.raw("points") as Point[];

  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-20">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">

          <div className="w-full h-full min-h-[350px] md:min-h-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="Dutch business team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center py-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full inline-block mb-3 w-fit">
              {t("badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-6 leading-tight">
              {t("heading")}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              {t("para1")}
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {t("para2")}
            </p>

            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point.title} className="flex gap-3.5 items-start">
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#0d2b33] flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5 text-[#f2c40d]" />
                  </span>
                  <div>
                    <p className="font-bold text-[#0d2b33] text-base">
                      {point.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyDutchCompanies;