// apps/web/components/layout/home/Header.tsx

import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";
import HeroVideo from "@/components/ui/HeroVideo";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
// import VacanciesSearchBar from "./VacanciesSearchBar";

export default function Header() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden">
      {/* Video Background */}
      <HeroVideo />

      <NavBar />

      {/* Big faded text */}
      <h1 className="absolute inset-0 font-extrabold text-[#1a4550]/20 text-[clamp(2rem,22vw,22rem)] flex items-center justify-center pointer-events-none select-none container mx-auto z-0 tracking-tight">
        STAFF OUTSOURCING
      </h1>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 flex items-center w-full px-6 md:px-12 lg:px-16 container mx-auto -mt-6 lg:-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-8">
          
          {/* Left Text Content */}
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1a4550] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-block mb-4 border border-white/20 shadow-sm">
              Staffing & Recruitment Partner
            </span>

            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight drop-shadow-md">
              Hire staff in the Netherlands <br />
              <span className="text-[#1a4550] drop-shadow-md">with staff outsourcing</span>
            </h2>

            <p className="mt-5 max-w-xl text-gray-200 text-base md:text-lg leading-relaxed font-normal">
              Two ways to grow your team: <strong className="text-white font-semibold">Payrolling</strong> (we employ, you lease) or <strong className="text-white font-semibold">RPO</strong> (we recruit, you hire directly). Built exclusively for Dutch companies using EU-based talent across IT, digital, admin, finance, and travel. You choose the model, we handle the hiring.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/become-a-dineler"
                className="inline-flex items-center gap-2.5 bg-[#1a4550] hover:bg-[#0d2b33] text-white px-7 py-3.5 text-sm font-bold transition-all rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Become a Call <FaArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/vacancies"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-7 py-3.5 text-sm font-semibold transition-all rounded-full shadow-md"
              >
                Questions first? WhatsApp us → 
              </Link>
            </div>
          </div>

          {/* Right FAQ Box */}
          <div className="lg:col-span-4 flex justify-end">
            <FaqHeaderSection />
          </div>

        </div>
      </div>

      {/* Chota spacer taaki bilkul touch na ho niche wale section se */}
      <div className="h-6 lg:h-8 w-full shrink-0" aria-hidden="true" />
    </section>
  );
}