import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="relative w-full h-screen min-h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/home/dc3a9870370aac2ce5a74f925281e910465b64aa (1).png" // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Big faded text */}

      {/* Content */}
      <div className="relative z-10 h-full flex  items-center container mx-auto ">
        <h1 className="absolute p-5 top-30 lg:top-0  text-[clamp(6rem,30vw,25rem)] font-extrabold text-white/15 select-none pointer-events-none">
          DINEL
        </h1>
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
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Become a Dineler <FaArrowRight />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
            >
              View Vacancies <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
