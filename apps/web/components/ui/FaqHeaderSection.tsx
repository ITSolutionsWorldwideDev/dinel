import Link from "next/link";
import React from "react";

export const FaqHeaderSection = () => {
  return (
    <div className="">
      <Link href={"/faq"}>
        <div
          className="flex flex-col 
    w-20 sm:w-24 md:w-28 lg:w-32 
    h-60 sm:h-72 md:h-80 lg:h-96 
    shadow-lg"
        >
          {/* F - Orange Section */}
          <div className="flex-1 bg-orange-500 flex items-center justify-center">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              F
            </span>
          </div>

          {/* A - Blue Section */}
          <div className="flex-1 bg-blue-600 flex items-center justify-center">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              A
            </span>
          </div>

          {/* Q - Green Section */}
          <div className="flex-1 bg-green-700 flex items-center justify-center">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Q
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
