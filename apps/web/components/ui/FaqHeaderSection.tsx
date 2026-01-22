import Link from "next/link";
import React from "react";

export const FaqHeaderSection = () => {
  return (
    <div className="">
      <Link href={"/faq"}>
        <div className="flex flex-col  w-10 sm:w-20 md:w-20 lg:w-20  h-25 sm:h-32 md:h-40 lg:h-46 shadow-lg">
          {/* F - Orange Section */}
          <div className="flex-1 bg-orange-500 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              F
            </span>
          </div>

          {/* A - Blue Section */}
          <div className="flex-1 bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              A
            </span>
          </div>

          {/* Q - Green Section */}
          <div className="flex-1 bg-green-700 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Q
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
