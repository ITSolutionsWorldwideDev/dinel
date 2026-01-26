import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Stats from "./Stats";
import NavBar from "@/components/ui/NavBar";

export default function ClientHeader() {
  return (
    <section className="relative w-full h-auto lg:min-h-screen container mx-auto overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/client/b360af01f2ddfe5859c6cc5cb540d49215dd76e3.jpg"
        alt="Industry Bridge"
        fill
        priority
        className="object-cover scale-x-[-1] absolute inset-0 w-full h-full "
      />
      <NavBar />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0A7CD8]/70 to-transparent" />

      {/* Big faded text */}

      {/* Content */}
      <div className="">
        <div className="relative z-10  2xl:flex  items-center   mx-auto ">
          <div className="px-6 ">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
              The right people make your projects succeed
            </h2>

            <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
              Organizations today face major challenges in energy transition,
              sustainability and technological innovation. Successful projects
              require the right technical professionals at the right time.Dinel
              supports organizations with experienced, committed specialists who
              bring knowledge, continuity and results.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-blue-700 text-white px-6 py-3  font-medium transition"
              >
                Contact Dinel
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#0A7CD8] border-2 border-[#0A7CD8] hover:bg-gray-100 px-6 py-3 font-medium transition"
              >
                Discover Our Approach
              </Link>
            </div>
          </div>
          <Stats />

          <FaqHeaderSection />
        </div>
      </div>

      {/* <div className=""> */}

      {/* </div> */}
    </section>
  );
}
