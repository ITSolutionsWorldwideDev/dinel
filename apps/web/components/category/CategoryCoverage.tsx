import React from "react";

export default function CategoryCoverage({ title, body }: { title: string; body: string }) {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f7fafa] to-white py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
              Comprehensive Coverage
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-[#0d2b33] tracking-tight leading-tight">
            {title}
          </h2>

          <div className="text-gray-600 whitespace-pre-line leading-relaxed text-base md:text-lg font-normal bg-white/60 p-8 rounded-3xl border border-[#0d2b33]/10 shadow-sm backdrop-blur-sm">
            {body}
          </div>
        </div>

        {/* Right Side: Professional Corporate Image with Styled Accents */}
        <div className="lg:col-span-5 relative w-full">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a4550]/10 to-[#f2c40d]/20 rounded-[2.5rem] blur-xl -z-10" />
          
          <div className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1a4550]/15 border-2 border-white group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Corporate Team Collaboration"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b33]/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-[#f2c40d]">Verified Excellence</p>
              <p className="text-sm font-medium text-white/90">Driving high-impact enterprise solutions globally.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}