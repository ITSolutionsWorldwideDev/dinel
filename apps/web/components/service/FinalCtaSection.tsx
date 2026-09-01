import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  sec: {
    finalCta?: {
      heading: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export default function FinalCtaSection({ sec }: FinalCtaProps) {
  return (
    <section className="w-full bg-gradient-to-br from-[#0d2b33] to-[#1a4550] text-white p-10 md:p-16 rounded-3xl text-center shadow-xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          {sec.finalCta?.heading}
        </h2>
        <p className="text-slate-300 text-sm md:text-base">
          {sec.finalCta?.description}
        </p>
        <div className="pt-4">
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-xl bg-[#f2c40d] text-[#0d2b33] font-bold text-sm hover:bg-[#e2b50b] transition-all shadow-lg inline-flex items-center gap-2"
          >
            <span>{sec.finalCta?.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}