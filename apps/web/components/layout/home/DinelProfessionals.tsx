import React from "react";
import { ArrowRight } from "lucide-react";

export default function DinelProfessionals() {
  const sectors = [
    {
      title: "Infrastructure",
      image: "3e0196d5cc66b0216796fe8296ddb9072986d21a.jpg",
      description:
        "Without infrastructure, there's no connection. Literally. Without professionals, there's no infrastructure. To create the right connections, you need professionals you can rely on.",
    },
    {
      title: "Oil, Gas and Industry",
      image: "0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
      description:
        "Oil and gas companies that actively embrace (digital) innovation are taking a significant step toward the future. Besides innovation, finding the right permanent and temporary talent is essential.",
    },
    {
      title: "Energy",
      image: "2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
      description:
        "If you want to remain relevant as a company in the energy sector, you must continually improve. And for that, you need people. The right professionals who ensure you stay ahead of the competition.",
    },
  ];

  return (
    <div className=" bg-linear-to-br from-gray-50 to-blue-50  ">
      {/* Hero Section */}
      <div className="contianer mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24  relative ">
        <div className="absolute inset-0 top-1/8 opacity-10  bg-[url('/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png')] bg-no-repeat bg-top-right z-0 " />
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase">
            DINEL PROFESSIONALS:
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Wherever Technology Is Needed.{" "}
            <span className="block mt-2">For Over 25 Years.</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            At Dinel, we build lasting relationships with clients and
            professionals. Committed, energetic, and knowledgeable, we connect
            passionate tech talent to permanent and temporary roles by combining
            personal experience with market expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`/assets/home/${sector.image}`}
                  alt={sector.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-3 grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 grow">
                  {sector.description}
                </p>

                {/* Read More Button */}
              </div>
              <div className="flex items-end justify-end -mt-10 p-6 z-10">
                <button className="inline-flex items-center justify-center gap-2 bg-[#FF8026] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 group cursor-pointer">
                  Read more
                  <ArrowRight  />
                  {/* className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
