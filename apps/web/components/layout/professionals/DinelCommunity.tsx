import React from "react";
import { CheckCircle } from "lucide-react";

export default function DinelCommunity() {
  return (
    <div className=" bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          {/* Image Section */}
          <div className="relative flex items-center justify-end">
            <img
              src="/assets/professionals/f3cb5f09732e11c1b1a756b3c30c794845839fd1.jpg"
              alt="Team collaboration"
              className="w-[70%]  "
            />
          </div>

          {/* Content Section */}
          <div className="  p-8 ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Dineler Community
            </h1>

            <p className="text-xl text-gray-600 mb-8">You are not alone</p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              As a Dineler, you become part of a growing network of
              professionals who:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8  rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0A7CD8]" />
                </div>
                <p className="text-gray-700 pt-1">
                  Share knowledge and experience
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8  rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0A7CD8]" />
                </div>
                <p className="text-gray-700 pt-1">
                  Work on future-oriented projects
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8  rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0A7CD8]" />
                </div>
                <p className="text-gray-700 pt-1">
                  Believe in quality, trust and commitment
                </p>
              </div>
            </div>

            <div className=" pt-8  ">
              <p className="text-gray-700 ">
                Being a Dineler means belonging to a community that values
                people as much as technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
