import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";

export default function AboutHeader() {
  return (
    <section className="relative w-full h-auto lg:h-screen min-h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/aboutus/979194d0a724928fcf4293d251f622f12ca61d92.jpg" // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full "
      />
      <NavBar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a7cd8]/60" />

      {/* Content */}
      <div className="relative z-10 h-1/2 flex items-center-safe container mx-auto justify-center">
        <div className="px-6 text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            About Dinel
          </h2>

          <p className="mt-6 w-40 sm:w-60 md:w-100 lg:w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            Dinel is an organization built by and for technical professionals.
            Founded on the belief that people, not processes or invoices make
            technology succeed.
          </p>
        </div>
      </div>
      <div className="absolute top-1/3 lg:top-1/4 right-0">
        <FaqHeaderSection />
      </div>
    </section>
  );
}
