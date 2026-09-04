import { Link } from "../../../i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Impact() {
  const t = await getTranslations("impact");

  return (
    <section className="bg-[#0d2b33] relative overflow-hidden mb-12 md:mb-16 rounded-[2.5rem] mx-4 sm:mx-8 lg:mx-16 shadow-2xl">
      <img
        src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        alt=""
      />

      <div className="bg-gradient-to-br from-[#0d2b33] via-[#1a4550]/80 to-[#0d2b33] absolute inset-0 opacity-90" />

      {/* Decorative ambient lighting elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#f2c40d]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#f2c40d]/15 blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-20 py-12 md:py-16 relative z-10 text-center max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          <span className="text-xs font-black tracking-[0.2em] uppercase text-[#f2c40d] bg-[#f2c40d]/10 border border-[#f2c40d]/20 px-3.5 py-1.5 rounded-full">
            {t("badge")}
          </span>
          <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
          {t("heading")}
        </h2>

        <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
          {t("subheading")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <Link href={"/contact-us"}>
            <button className="bg-[#f2c40d] text-[#0d2b33] font-black px-9 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer text-sm md:text-base">
              {t("ctaPrimary")}
            </button>
          </Link>
          <Link href={"/contact-us"}>
            <button className="bg-transparent text-white font-black px-9 py-4 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto cursor-pointer text-sm md:text-base">
              {t("ctaSecondary")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}