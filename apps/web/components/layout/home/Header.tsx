import HeroVideo from "@/components/ui/HeroVideo";
// NavBar yahan se hata diya hai kyunki yeh layout mein already mojood hai
import { Link } from "../../../i18n/navigation";
import { FaArrowRight } from "react-icons/fa6";
import VacanciesSearchBar from "@/components/layout/home/VacanciesSearchBar";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-visible pt-16 lg:pt-20 pb-56 sm:pb-64 md:pb-72">
      <HeroVideo />

      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* <NavBar /> <- Yeh line yahan se delete kardi hai */}

      <h1 className="absolute inset-0 font-extrabold text-white/5 text-[clamp(2rem,22vw,22rem)] flex items-center justify-center pointer-events-none select-none container mx-auto z-[2] tracking-tighter">
        {t("bigText")}
      </h1>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 container mx-auto my-auto">
        <div className="w-full max-w-5xl mx-auto text-center">
          
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-xl">
            {t("titleLine1")}{" "}
            <span className="italic font-serif font-light text-[#f2c40d] tracking-normal drop-shadow-lg">
              {t("titleLine2")}
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed font-light tracking-wide drop-shadow-md">
            {t.rich("description", {
              b: (chunks) => (
                <strong className="text-white font-semibold underline decoration-[#f2c40d]/60 decoration-2 underline-offset-4">
                  {chunks}
                </strong>
              ),
            })}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 bg-[#1a4550] hover:bg-[#0d2b33] text-white px-8 py-4 text-sm font-bold transition-all rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-white/10"
            >
              {t("ctaPrimary")} <FaArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-8 py-4 text-sm font-semibold transition-all rounded-full shadow-lg"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar pushed further down below the buttons with increased section padding */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 container mx-auto flex justify-center mb-[-11rem] sm:mb-[-13rem] translate-y-16 sm:translate-y-20">
        <div className="w-full max-w-4xl">
          <VacanciesSearchBar />
        </div>
      </div>
    </section>
  );
}