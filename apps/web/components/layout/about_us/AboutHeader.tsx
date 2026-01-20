import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutHeader() {
  return (
    <section className="relative w-full h-screen min-h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/aboutus/979194d0a724928fcf4293d251f622f12ca61d92.jpg" // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a7cd8]/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex  items-center container mx-auto justify-center">
        <div className="px-6 text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            About Dinel
          </h2>

          <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            Dinel is an organization built by and for technical professionals.
            Founded on the belief that people, not processes or invoices make
            technology succeed.
          </p>

          
        </div>
      </div>
    </section>
  );
}
