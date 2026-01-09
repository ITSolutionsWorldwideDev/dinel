import React from "react";
import { Check } from "lucide-react";

export default function DinelCommunity() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 border-4 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              590 × 393.53
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
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
                <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 pt-1">
                  Share knowledge and experience
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 pt-1">
                  Work on future-oriented projects
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 pt-1">
                  Believe in quality, trust and commitment
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed italic">
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
