import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ProfessinalsHeader() {
  return (
    <section className="relative w-full h-auto lg:h-screen min-h-125 overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/assets/professionals/43939db4ff8ef854de7943c03ea4ea0e13036c3e.jpg"
        alt="Industry Bridge"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full scale-x-[-1] "
      />
      <NavBar />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0A7CD8] to-transparent" />

      {/* Big faded text */}

      {/* Content */}
      <div className="relative z-10 h-full flex   container mx-auto p-10">
        <div className="px-6">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-1/2">
            Your career deserves more than just another assignment.
          </h2>

          <p className="mt-6 w-2xl text-white/90 text-base md:text-xl leading-relaxed">
            At Staff Outsourcing, your professional growth comes first.Whether you are
            starting your career or are an experienced technical specialist, we
            help you take the next step in your career, one that truly fits who
            you are and where you want to go.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/vacancies"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-blue-700 text-white px-6 py-3  font-medium transition"
            >
              View Vacancies
            </Link>

            <Link
              href="/become-a-dineler"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3  font-medium transition"
            >
              Become a Team Mmember 
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
