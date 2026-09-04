import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function CategoryHero({ data }: { data: any }) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0d2b33] via-[#153f4a] to-[#0d2b33] text-white pt-20 pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden shadow-2xl">
      {/* Dynamic background glow and subtle geometric accent */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-20">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-100px] w-[800px] h-[400px] rounded-full bg-[#f2c40d] blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.255em] uppercase text-[#f2c40d] bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6 shadow-inner">
          ✦ Category Overview ✦
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 text-white leading-[1.08] drop-shadow-md">
          {data?.h1}
        </h1>

        <p className="text-base sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light tracking-wide opacity-90">
          {data?.subhead}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#f2c40d] hover:bg-white text-[#0d2b33] px-8 py-4 rounded-full font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
          >
            {data?.primaryCtaText || "Get Started"}
            <FaArrowRight className="w-4 h-4 text-[#0d2b33]" />
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-bold shadow-sm transition-all duration-300 text-sm tracking-wide backdrop-blur-sm"
          >
            {data?.secondaryCtaText || "Explore Vacancies"}
          </Link>
        </div>
      </div>
    </section>
  );
}