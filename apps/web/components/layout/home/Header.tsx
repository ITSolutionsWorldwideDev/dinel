import HeroVideo from "@/components/ui/HeroVideo";
// NavBar yahan se hata diya hai kyunki yeh layout mein already mojood hai
import { Link } from "../../../i18n/navigation";
import { FaArrowRight } from "react-icons/fa6";
import VacanciesSearchBar from "@/components/layout/home/VacanciesSearchBar";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <section className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center overflow-hidden">
      <HeroVideo />

      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-[1]" />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* <NavBar /> <- Yeh line yahan se delete kardi hai */}

      <h1 className="absolute inset-0 font-extrabold text-white/10 text-[clamp(2rem,22vw,22rem)] flex items-center justify-center pointer-events-none select-none container mx-auto z-[2] tracking-tight">
        {t("bigText")}
      </h1>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 container mx-auto">
        <div className="w-full max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#1a4550] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-block mb-5 border border-white/20 shadow-sm">
            {t("badge")}
          </span>

          <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight drop-shadow-md">
            {t("titleLine1")} <br />
            <span className="text-[#e8c95a] drop-shadow-md">{t("titleLine2")}</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-100 text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
            {t.rich("description", {
              b: (chunks) => <strong className="text-white font-semibold">{chunks}</strong>,
            })}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/become-a-team-member"
              className="inline-flex items-center gap-2.5 bg-[#1a4550] hover:bg-[#0d2b33] text-white px-7 py-3.5 text-sm font-bold transition-all rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("ctaPrimary")} <FaArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/vacancies"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-7 py-3.5 text-sm font-semibold transition-all rounded-full shadow-md"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>

        <div className="mt-10">
        
        </div>
      </div>

      <div className="h-6 lg:h-8 w-full shrink-0" aria-hidden="true" />
    </section>
  );
}