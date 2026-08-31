export default function CategoryFinalCta({ data }: { data: any }) {
  return (
    <section className="text-center bg-[#0d2b33] text-white p-10 md:p-14 rounded-3xl shadow-xl mb-12">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-tight">
        {data?.headline}
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href={data?.primaryCtaLink || "/contact-us"}
          className="bg-[#f2c40d] hover:bg-[#e0b207] text-[#0d2b33] px-8 py-3.5 rounded-full font-bold shadow-lg transition-all"
        >
          {data?.primaryCtaText}
        </a>
        <a
          href={data?.secondaryCtaLink || "/vacancies"}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-3.5 rounded-full font-bold transition-all"
        >
          {data?.secondaryCtaText}
        </a>
      </div>
    </section>
  );
}