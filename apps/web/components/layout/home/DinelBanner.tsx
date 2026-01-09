import Image from "next/image";

export default function DinelBanner() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center">
      <div className="container w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="bg-linear-to-br from-orange-500 to-orange-600 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
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
            <blockquote className="mb-8 text-base md:text-lg leading-relaxed">
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

          {/* Right Image Section */}
          <div className="relative min-h-100 md:min-h-full bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="space-y-4">
                    <Image
                      src={`/assets/home/6028079d32ff364b1ee8c7814d4265486be8f7d0.png`}
                      alt="dinel"
                      fill
                      className="object-cover"
                    />
                    <p className="text-sm">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color accent strip */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b from-orange-500 via-green-500 to-green-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
