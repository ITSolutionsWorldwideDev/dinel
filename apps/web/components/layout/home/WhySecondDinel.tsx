import React from "react";
import { Trophy, Target, TrendingUp } from "lucide-react";

export default function WhySecondDinel() {
  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-blue-500" />,
      title: "Challenging Jobs And Projects",
      description: "Take on exciting opportunities that push your boundaries",
    },
    {
      icon: <Target className="w-12 h-12 text-pink-500" />,
      title: "Realizing Ambitions",
      description: "Turn your career goals into achievable milestones",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Focus On Growth And Development",
      description: "Continuous learning and professional advancement",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Why Second Via Dinel
        </h1>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden ">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl p-8">
              <div className="relative">
                <div className="w-64 h-64 bg-blue-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Professional with laptop"
                  className="relative z-10 w-full max-w-sm rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="flex flex-col justify-center space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-linear-to-r from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 bg-white p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </div>
  );
}
