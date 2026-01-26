import Image from "next/image";
import { LuRocket } from "react-icons/lu";

export default function DinelToday() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="inline-block mb-4 rounded-full bg-linear-to-r from-[#0A7CD81A] to-[#FF6B351A] px-4 py-1 text-sm font-medium text-black">
          Dinel Today
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          A growing network of professionals
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Today, Dinel is a trusted partner for forward-thinking professionals
          and organizations
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative h-65 md:h-80  overflow-hidden">
          <Image
            src="/assets/aboutus/26021d97d3a610878c617e85677411525b96ec15.jpg"
            alt="Technical Professionals"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/50" /> */}

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="mb-3 flex items-center justify-center w-12 h-12  bg-[#FF6B35]">
              <LuRocket className="text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Technical Professionals
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Specialists in energy, infrastructure, industry and sustainable
              technology who want to make an impact
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-65 md:h-80  overflow-hidden">
          <Image
            src="/assets/aboutus/202474ed2d5dc72dac5fb5ab1cba9edba8442024.jpg"
            alt="Innovative Organizations"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/50" /> */}

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="mb-3 flex items-center justify-center w-12 h-12  bg-[#FF6B35]">
              <img src="/assets/professionals/Icon.png" alt="" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Innovative Organizations
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Companies facing challenges in innovation, capacity and continuity
              who need the right expertise
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-10 text-center text-gray-600 text-sm md:text-base">
        Together, we are building a network of{" "}
        <span className="text-blue-600 font-semibold">Dinelers</span>{" "}
        professionals who want to make an impact and shape the future.
      </p>
    </section>
  );
}
