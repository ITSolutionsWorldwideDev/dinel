import { Link } from "../../../i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Impact() {
  const t = await getTranslations("impact");

  return (
    <section className="bg-[#0d2b33] relative overflow-hidden">
      <img
        src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        alt=""
      />

      <div className="bg-[#0d2b33] absolute inset-0 opacity-80" />

      <div className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28 relative z-10 text-center max-w-5xl mx-auto">

        <span className="text-xs uppercase tracking-widest font-bold text-[#f2c40d] bg-[#f2c40d]/10 px-3 py-1.5 rounded-full inline-block mb-4">
          {t("badge")}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          {t("heading")}
        </h2>

        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t("subheading")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <Link href={"/become-a-team-member"}>
            <button className="bg-[#f2c40d] text-[#0d2b33] font-bold px-8 py-4 rounded-full hover:bg-[#e0b207] transition-all duration-200 shadow-sm w-full sm:w-auto cursor-pointer">
              {t("ctaPrimary")}
            </button>
          </Link>
          <Link href={"/vacancies"}>
            <button className="bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto cursor-pointer">
              {t("ctaSecondary")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}