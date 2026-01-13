import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ProfessinalsHeader() {
  return (
    <section className="relative w-full h-screen min-h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/professionals/67fda7679ab84f6d652e6ab45c424b5bf97582d5.jpg"
        alt="Industry Bridge"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0A7CD8F2]/80 to-white/9" />

      {/* Big faded text */}

      {/* Content */}
      <div className="relative z-10 h-full flex  items-center container mx-auto ">
        <div className="px-6">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-1/2">
            Your career deserves more than just another assign
          </h2>

          <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            At Dinel, it's all about your growth. Whether you are a starter or
            an experienced technical specialist, we help you take the next step
            in your career, one that truly fits who you are and where you want
            to go.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              View Vacancies
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
            >
              Become a Dineler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
