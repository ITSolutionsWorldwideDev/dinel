import React from "react";
import { CheckCircle } from "lucide-react";

export default function Guidance() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="container  mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Guidance from people who understand your work
            </h1>

            <p className="text-gray-600 text-lg">
              We come from engineering ourselves. That means we understand:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0A7CD8] shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  The technical challenges you face
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0A7CD8] shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  The importance of the right working environment
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0A7CD8] shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  The balance between challenge, security and growth
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-base pt-4">
              From the first conversation to the start of your project and
              beyond—we stay involved and support you every step of the way.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/assets/professionals/a3b84db29c8880eb74a256cfd5f38cd0085e7904.jpg"
              alt="Team collaboration"
              className="w-[70%] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
