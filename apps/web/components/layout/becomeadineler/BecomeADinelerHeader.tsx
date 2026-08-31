import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BecomeADinelerHeader() {
  return (
    <section className="relative w-full h-auto lg:h-screen min-h-125 overflow-hidden ">
      {/* Background Image */}
     
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent  to-[#0A7CD8]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent  to-[#0A7CD8]/70" />

      {/* Big faded text */}

      {/* Content */}
      <div className="relative z-10 h-full flex   container mx-auto p-10">
        <div className="px-6">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-1/2">
            Become a Staff Outsourcing Professional. Make an impact with your expertise.
          </h2>

          <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            Being a Staff Outsourcing professional means more than working on technical projects. It
            means choosing growth, impact and belonging to a community that
            values people as much as technology. At Staff Outsourcing, you don’t just work
            on projects; you help build the future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-blue-700 text-white px-6 py-3  font-medium transition"
            >
              Join US
            </Link>

            <Link
              href={"/vacancies"}
              className="inline-flex items-center gap-2 bg-white text-[#0A7CD8] border-2 border-[#0A7CD8] hover:bg-gray-100 px-6 py-3  font-medium transition"
            >
              View Vacancies
            </Link>
          </div>
        </div>
      </div>
      {/* <div className=""> */}

      <div className="absolute top-1/3 lg:top-1/4 right-0">
        <FaqHeaderSection />
      </div>
      {/* </div> */}
    </section>
  );
}
