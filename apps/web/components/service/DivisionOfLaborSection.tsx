import { CheckCircle2 } from 'lucide-react';

interface LaborProps {
  sec: {
    laborTitle: string;
    weHandle?: string[];
    youHandle?: string[];
    laborFooter: string;
  };
}

export default function DivisionOfLaborSection({ sec }: LaborProps) {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1a4550]/10 text-[#1a4550] text-xs font-bold tracking-wider uppercase mb-3 transition-transform duration-300 hover:scale-105">
          ~ Division of Labor ~
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2b33] tracking-tight">
          {sec.laborTitle}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* We Handle Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#1a4550]/15 shadow-lg shadow-[#1a4550]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1a4550]/10 hover:border-[#1a4550]/30 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1a4550] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          
          <div>
            <h3 className="text-2xl font-bold text-[#0d2b33] mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#1a4550] transition-transform duration-300 group-hover:scale-125" /> 
              We Handle
            </h3>
            <ul className="space-y-4">
              {sec.weHandle?.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base transition-all duration-300 hover:translate-x-1">
                  <CheckCircle2 className="w-5 h-5 text-[#1a4550] shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="transition-colors duration-300 hover:text-[#0d2b33]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* You Handle Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#f2c40d]/40 shadow-lg shadow-[#1a4550]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f2c40d]/10 hover:border-[#f2c40d] flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f2c40d] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

          <div>
            <h3 className="text-2xl font-bold text-[#0d2b33] mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#f2c40d] transition-transform duration-300 group-hover:scale-125" /> 
              You Handle
            </h3>
            <ul className="space-y-4">
              {sec.youHandle?.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base transition-all duration-300 hover:translate-x-1">
                  <CheckCircle2 className="w-5 h-5 text-[#f2c40d] shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="transition-colors duration-300 hover:text-[#0d2b33]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-500 text-xs md:text-sm mt-8 max-w-3xl mx-auto leading-relaxed">
        {sec.laborFooter}
      </p>
    </section>
  );
}