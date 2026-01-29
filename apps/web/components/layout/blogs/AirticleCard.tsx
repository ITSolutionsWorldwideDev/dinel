import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { CiUser } from "react-icons/ci";

export default function AirticleCard() {
  return (
    <div className=" bg-gray-50 p-10">
      <div className=" container mx-auto">
        <div className="inline-flex items-center gap-2 p-2 mb-6 container ">
          <div className="h-1 w-8 bg-[#FF6B35]"></div>
          <span className="text-[#FF6B35] text-lg font-semibold tracking-wide uppercase">
            Featured Article
          </span>
        </div>
        <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-5">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Industry Insights
                </span>
              </div>
              <img
                src="/assets/blogs/e25af5a83fcf1b326da04afab2b980b5b567ecf7.jpg"
                alt="Solar panels aerial view"
                className="w-full h-full object-cover min-h-100"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Future of Technical Recruitment in the Energy Sector
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Exploring how the energy transition is reshaping recruitment
                strategies and creating new opportunities for technical
                professionals.
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <CiUser className="size-[20]" />
                  <span>Sarah van Berg</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="size-[20]" />
                  <span>January 15, 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="size-[20]" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
                  Read Full Article
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
