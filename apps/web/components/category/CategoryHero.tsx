import { FaArrowRight } from "react-icons/fa6";

export default function CategoryHero({ data }: { data: any }) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e8f2f5] via-[#f4f9fa] to-white pt-14 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Light blue premium glow, matches site's blue theme */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] -z-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-220px] w-[700px] h-[700px] rounded-full bg-[#153f4a]/[0.12] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-white/70 border border-[#0d2b33]/10 px-4 py-1.5 rounded-full mb-5 shadow-sm">
          Category Overview
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 text-[#0d2b33] leading-[1.1]">
          {data?.h1}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-9 leading-relaxed max-w-2xl">
          {data?.subhead}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={data?.primaryCtaLink || "/contact-us"}
            className="inline-flex items-center gap-2 bg-[#153f4a] hover:bg-[#0d2b33] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base"
          >
            {data?.primaryCtaText || "Get Started"}{" "}
            <FaArrowRight className="w-4 h-4 text-[#f2c40d]" />
          </a>

          <a
            href={data?.secondaryCtaLink || "/vacancies"}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#153f4a] border-2 border-[#153f4a]/20 hover:border-[#153f4a] px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all duration-300 text-base"
          >
            {data?.secondaryCtaText || "Explore Vacancies"}
          </a>
        </div>
      </div>
    </section>
  );
}