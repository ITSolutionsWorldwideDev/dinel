// WhoWeHelp.tsx
import React from "react";
import { Search, Users, Clock3, FileSignature, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const iconsA = [Search, Users];
const iconsB = [Clock3, FileSignature];

const GroupHeader = ({ badge, title }: { badge: string; title: string }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-2">
    <div className="flex items-center gap-3">
      <span className="w-3 h-3 rounded-full bg-[#f2c40d] ring-4 ring-[#f2c40d]/20" />
      <h3 className="text-xl md:text-2xl font-bold text-[#0d2b33]">
        {title}
      </h3>
    </div>
    <span className="text-xs font-bold tracking-wider uppercase bg-[#0d2b33]/5 text-[#0d2b33] px-3 py-1 rounded-full self-start md:self-auto">
      {badge}
    </span>
  </div>
);

const HelpCard = ({
  icon: Icon,
  title,
  desc,
  fit,
  fitsLabel,
  cta,
}: {
  icon: any;
  title: string;
  desc: string;
  fit: string;
  fitsLabel: string;
  cta: string;
}) => (
  <div className="group relative rounded-2xl bg-gradient-to-b from-white to-gray-50/60 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#1a4550]/40 transition-all duration-300 p-5 md:p-6 flex flex-col justify-between overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f2c40d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0d2b33] to-[#1a4550] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <h4 className="text-lg font-bold text-[#0d2b33] mb-2 group-hover:text-[#1a4550] transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {desc}
      </p>
    </div>

    <div>
      <div className="bg-white rounded-xl p-3.5 border border-gray-200/70 shadow-xs mb-4 group-hover:border-[#f2c40d]/50 group-hover:shadow-sm transition-all duration-300">
        <p className="text-xs text-gray-600">
          <span className="font-bold text-[#0d2b33] block mb-0.5">{fitsLabel}</span>
          {fit}
        </p>
      </div>

      <Link
        href="#"
        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#0d2b33] hover:text-[#f2c40d] transition-colors"
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
      </Link>
    </div>
  </div>
);

const WhoWeHelp = async () => {
  const t = await getTranslations("whoWeHelp");
  const cardsA = t.raw("cardsA") as { title: string; desc: string; fit: string; cta: string }[];
  const cardsB = t.raw("cardsB") as { title: string; desc: string; fit: string; cta: string }[];
  const fitsLabel = t("fitsLabel");

  return (
    <section className="relative bg-gray-50/50 pt-12 md:pt-16 pb-0 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#0d2b33]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#f2c40d]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full py-0 px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b33] mb-3">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        <div className="mb-8 rounded-3xl bg-white border border-gray-200/60 shadow-md p-5 md:p-8 w-full">
          <GroupHeader title={t("groupATitle")} badge={t("groupABadge")} />
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {cardsA.map((card, i) => (
              <HelpCard key={card.title} icon={iconsA[i]} fitsLabel={fitsLabel} {...card} />
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-3xl bg-white border border-gray-200/60 shadow-md p-5 md:p-8 w-full">
          <GroupHeader title={t("groupBTitle")} badge={t("groupBBadge")} />
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {cardsB.map((card, i) => (
              <HelpCard key={card.title} icon={iconsB[i]} fitsLabel={fitsLabel} {...card} />
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-[#0d2b33] to-[#1a4550] px-6 py-8 md:px-10 md:py-10 text-center overflow-hidden shadow-xl w-full">
          <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#f2c40d]/10 blur-xl" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-[#f2c40d]/5 blur-xl" />

          <h3 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">
            {t("bannerTitle")}
          </h3>
          <p className="relative z-10 text-gray-300 text-xs md:text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            {t("bannerDesc")}
          </p>

          <Link
            href="#"
            className="relative z-10 inline-flex items-center gap-2 bg-[#f2c40d] text-[#0d2b33] font-bold px-7 py-3 rounded-full text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t("bannerCta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;