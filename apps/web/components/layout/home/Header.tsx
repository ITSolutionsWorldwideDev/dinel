import { FaqHeaderSection } from "@/components/ui/FaqHeaderSection";
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="relative w-full h-auto lg:h-screen block overflow-hidden p-5">
      {/* Background Image */}
      <Image
        src="/assets/home/dc3a9870370aac2ce5a74f925281e910465b64aa (1).png" // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full  "
      />
      <NavBar />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Big faded text */}

      {/* Content */}
      <h1 className="absolute -top-1/4 left-0 p-10 inset-0  font-extrabold text-[#0A7CD8]/25 text-[clamp(2rem,31vw,30rem)]  flex items-center justify-center pointer-events-none select-none container mx-auto">
        DINEL
      </h1>
      {/* <div className="relative  items-center flex justify-between mt-40"> */}
      <div className=" h-full  flex   container mx-auto  ">
        <div className="px-6 relative">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Become a Dineler. <br />
            Help build the future.
          </h2>

          <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            We connect professionals with meaningful projects in energy,
            infrastructure, industry and sustainable technology. Projects where
            your knowledge makes an impact and your career can truly grow.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dineler"
              className="inline-flex items-center gap-2 bg-[#0A7CD8] hover:bg-blue-700 text-white px-6 py-3  font-medium transition"
            >
              Become a Dineler <FaArrowRight />
            </Link>

            <Link
              href="/vaccancies"
              className="inline-flex items-center gap-2 bg-white text-[#0A7CD8] hover:bg-gray-100 px-6 py-3  font-medium transition"
            >
              View Vacancies <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="absolute top-1/3 lg:top-1/4 right-0">
          <FaqHeaderSection />
        </div>
      </div>

      {/* </div> */}
    </section>
  );
}
