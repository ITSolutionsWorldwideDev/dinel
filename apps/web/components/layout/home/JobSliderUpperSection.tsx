import React from "react";
import Link from "next/link";
const JobSliderUpperSection = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div>
          <p className="text-[#FF8026] font-semibold text-sm tracking-wider uppercase mb-3">
            VACANCIES
          </p>
        </div>
        <div className="flex items-center justify-between">
          {/* Left side - Title */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black ">
              Find Your Job
            </h1>
          </div>

          {/* Right side - View All Link */}
          <Link
            href="/vacancies"
            className="text-[#FF8026] font-semibold text-sm sm:text-base hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide border-b-2 border-black hover:border-orange-600  "
          >
            VIEW ALL VACANCIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobSliderUpperSection;
