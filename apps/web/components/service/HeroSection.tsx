import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaLink: string;
    ctaText: string;
  };
}

export default function HeroSection({ hero }: HeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,196,13,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block py-1.5 px-5 rounded-full bg-[#f2c40d]/10 text-[#f2c40d] border border-[#f2c40d]/30 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          {hero.badge}
        </span>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          {hero.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
          {hero.subtitle}
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-xl bg-[#f2c40d] text-[#0d2b33] font-bold text-sm hover:bg-[#e2b50b] transition-all shadow-lg shadow-[#f2c40d]/20 flex items-center gap-2"
          >
            <span>{hero.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}