interface CoreConceptProps {
  sec: {
    conceptTitle: string;
    conceptBody1: string;
    conceptBody2: string;
    conceptBody3: string;
    noteTitle: string;
    noteBody: string;
  };
}

export default function CoreConceptSection({ sec }: CoreConceptProps) {
  return (
    <section className="w-full">
      {/* Main Grid: items-stretch lagane se dono columns ki height bilkul equal ho jayegi */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Content Area (Col 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f7fafa] border border-[#1a4550]/10 shadow-sm transition-all duration-300 hover:shadow-md w-fit">
              <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full transition-all duration-300 group-hover:w-12" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
                Core Concept
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d2b33] tracking-tight leading-tight">
              {sec.conceptTitle}
            </h2>
          </div>

          {/* flex-grow aur h-full ki wajah se ye box baki bachi height ko barabar cover karega */}
          <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed bg-[#f7fafa] p-8 sm:p-10 rounded-3xl border border-[#1a4550]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#1a4550]/20 hover:-translate-y-1 flex-grow flex flex-col justify-center">
            <p className="transition-colors duration-300 hover:text-[#0d2b33]">{sec.conceptBody1}</p>
            <p className="transition-colors duration-300 hover:text-[#0d2b33]">{sec.conceptBody2}</p>
            <p className="transition-colors duration-300 hover:text-[#0d2b33]">{sec.conceptBody3}</p>
          </div>
        </div>

        {/* Right Highlight/Note Card Area (Col 5) */}
        <div className="lg:col-span-5 relative group flex flex-col">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a4550]/15 to-[#f2c40d]/30 rounded-[2.5rem] blur-2xl -z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-70" />
          
          {/* h-full lagane se ye left wale section ke sath bilkul barabar height lega */}
          <div className="bg-[#0d2b33] text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(13,43,51,0.3)] h-full flex flex-col justify-between">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#f2c40d]/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
            
            <div className="relative z-10 space-y-6 my-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#f2c40d]/10 border border-[#f2c40d]/30 flex items-center justify-center text-[#f2c40d] text-xl font-bold">
                💡
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#f2c40d] tracking-tight">
                {sec.noteTitle}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                {sec.noteBody}
              </p>
            </div>
            
            {/* Bottom visual indicator taaki alignment balance lage */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium tracking-wider uppercase">
              <span>Key Insight</span>
              <span className="w-8 h-[2px] bg-[#f2c40d]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}