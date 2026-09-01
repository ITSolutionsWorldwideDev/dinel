interface DecisionProps {
  sec: {
    comparisonTitle: string;
    comparisonSubtitle: string;
    rpoTitle: string;
    rpoDesc: string;
    payrollTitle: string;
    payrollDesc: string;
  };
}

export default function DecisionGuideSection({ sec }: DecisionProps) {
  return (
    <section className="w-full bg-[#0d2b33] text-white py-16 px-6 md:px-12 rounded-3xl shadow-xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#f2c40d]/20 text-[#f2c40d] text-xs font-bold tracking-wider uppercase mb-3">
          ~ Decision Guide ~
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {sec.comparisonTitle}
        </h2>
        <p className="text-gray-300 text-sm mt-2">{sec.comparisonSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-[#f2c40d] mb-4">{sec.rpoTitle}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{sec.rpoDesc}</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-300 mb-4">{sec.payrollTitle}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{sec.payrollDesc}</p>
        </div>
      </div>
    </section>
  );
}