// WhoWeHelp.tsx
import React from "react";
import { Search, Users, Clock3, FileSignature, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const iconsA = [Search, Users];
const iconsB = [Clock3, FileSignature];

const GroupHeader = ({ badge, title }: { badge: string; title: string }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#0d2b33]/10 pb-5 mb-8 gap-3">
    <div className="flex items-center gap-3.5">
      <span className="w-3.5 h-3.5 rounded-full bg-[#f2c40d] ring-4 ring-[#f2c40d]/20 shadow-sm" />
      <h3 className="text-xl md:text-2xl font-black text-[#0d2b33] tracking-tight">
        {title}
      </h3>
    </div>
    <span className="text-xs font-black tracking-[0.2em] uppercase bg-[#1a4550]/5 border border-[#1a4550]/15 text-[#1a4550] px-4 py-1.5 rounded-full self-start md:self-auto shadow-sm">
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
  <div className="group relative rounded-3xl bg-white border-2 border-[#1a4550]/15 shadow-xl shadow-[#1a4550]/5 hover:shadow-2xl hover:border-[#1a4550] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a4550] to-[#f2c40d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d2b33] to-[#1a4550] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
          <Icon className="w-7 h-7 text-[#f2c40d]" />
        </div>
        <h4 className="text-xl font-bold text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">
          {title}
        </h4>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
        {desc}
      </p>
    </div>

    <div>
      <div className="bg-[#f7fafa] rounded-2xl p-4 border border-[#0d2b33]/10 shadow-inner mb-6 group-hover:border-[#1a4550]/30 transition-all duration-300">
        <p className="text-xs md:text-sm text-gray-600">
          <span className="font-extrabold text-[#0d2b33] block mb-1 uppercase tracking-wider text-[11px]">{fitsLabel}</span>
          {fit}
        </p>
      </div>

      <Link
        href="#"
        className="inline-flex items-center gap-2 text-xs md:text-sm font-black text-[#1a4550] hover:text-[#0d2b33] transition-colors"
      >
        {cta}
        <ArrowRight className="w-4 h-4 text-[#f2c40d] group-hover:translate-x-1.5 transition-transform" />
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
    <section className="relative bg-gradient-to-b from-white via-[#f7fafa] to-white pb-24 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#0d2b33]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#f2c40d]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 max-w-[1500px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
              Targeted Solutions
            </span>
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            {t("subheading")}
          </p>
        </div>

        <div className="mb-12 rounded-[2.5rem] bg-white border border-[#0d2b33]/10 shadow-2xl shadow-[#1a4550]/5 p-6 md:p-10 w-full">
          <GroupHeader title={t("groupATitle")} badge={t("groupABadge")} />
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {cardsA.map((card, i) => (
              <HelpCard key={card.title} icon={iconsA[i]} fitsLabel={fitsLabel} {...card} />
            ))}
          </div>
        </div>

        <div className="mb-16 rounded-[2.5rem] bg-white border border-[#0d2b33]/10 shadow-2xl shadow-[#1a4550]/5 p-6 md:p-10 w-full">
          <GroupHeader title={t("groupBTitle")} badge={t("groupBBadge")} />
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {cardsB.map((card, i) => (
              <HelpCard key={card.title} icon={iconsB[i]} fitsLabel={fitsLabel} {...card} />
            ))}
          </div>
        </div>

        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] px-8 py-12 md:px-16 md:py-14 text-center overflow-hidden shadow-2xl w-full border border-white/10">
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#f2c40d]/15 blur-2xl" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#f2c40d]/10 blur-2xl" />

          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10 tracking-tight">
            {t("bannerTitle")}
          </h3>
          <p className="relative z-10 text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            {t("bannerDesc")}
          </p>

          <Link
            href="#"
            className="relative z-10 inline-flex items-center gap-3 bg-[#f2c40d] text-[#0d2b33] font-black px-9 py-4 rounded-full text-sm md:text-base hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
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