import React from "react";
import { CheckCircle } from "lucide-react";

export default function Guidance() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
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
                <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  The technical challenges you face
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  The importance of the right working environment
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
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
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
