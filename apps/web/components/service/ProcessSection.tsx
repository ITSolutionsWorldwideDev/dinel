interface StepItem {
  step: string;
  title: string;
  desc: string;
}

interface ProcessProps {
  sec: {
    processTitle: string;
    steps?: StepItem[];
  };
}

export default function ProcessSection({ sec }: ProcessProps) {
  return (
    <section className="w-full bg-[#f7fafa] py-16 px-6 lg:px-12 rounded-3xl border border-[#1a4550]/10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1a4550]/10 text-[#1a4550] text-xs font-bold tracking-wider uppercase mb-3 transition-transform duration-300 hover:scale-105">
          ~ Process ~
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2b33] tracking-tight">
          {sec.processTitle}
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sec.steps?.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-[#1a4550]/5 border border-gray-100 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1a4550]/15 hover:border-[#1a4550]/20 transition-all duration-500 relative overflow-hidden"
          >
            {/* Top glowing line animation on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a4550] to-[#f2c40d] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

            <div>
              {/* Step Number Box with scale effect */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a4550] to-[#0d2b33] text-white flex items-center justify-center font-black text-lg mb-6 shadow-md shadow-[#1a4550]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.step}
              </div>

              <h3 className="text-xl font-bold text-[#0d2b33] mb-3 group-hover:text-[#1a4550] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Bottom Accent Bar */}
            <div className="w-8 h-1 bg-[#f2c40d] rounded-full mt-6 transition-all duration-500 group-hover:w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}