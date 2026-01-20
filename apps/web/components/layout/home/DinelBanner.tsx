import Image from "next/image";

export default function DinelBanner() {
  return (
    <div className="w-full  bg-gray-50   flex items-center justify-center">
      <div className=" container bg-white rounded-lg shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="bg-[#FF8936] p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">
                Dinel Professionals, Wherever Technology
              </h2>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                Is Needed, For Over 25 Years!
              </h2>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              I believe that flex workers go the extra mile
            </h1>

            {/* Quote */}

            <div className="bg-[url('/assets/home/cfa9b749caf2627f15eefaec291171ff7129df0c.png')] bg-no-repeat  bg-contain">
              <blockquote className="mb-8 text-base md:text-lg leading-relaxed max-w-lg">
                "We understand what drives technicians and what they are looking
                for in their next step. That's why our team can match the right
                people to the right projects. "Or goal is your next challenge."
              </blockquote>

              {/* Signature */}
              <div className="mt-auto">
                <p className="text-xl md:text-2xl font-semibold">Paul Mathey</p>
                <p className="text-lg md:text-xl">CEO</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-64 md:h-96 w-full lg:h-full bg-gray-900">
            <Image
              src={`/assets/home/6028079d32ff364b1ee8c7814d4265486be8f7d0.png`}
              alt="dinel"
              fill
              className="object-cover"
            />

            {/* Color accent strip */}
            <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col">
              <div className="flex-1 bg-[#F87417]"></div>
              <div className="flex-1 bg-[#0A7CD8]"></div>
              <div className="flex-1 bg-[#008001]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
