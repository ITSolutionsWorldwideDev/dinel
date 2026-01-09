import React from "react";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

export default function WhyDineler() {
  const features = [
    {
      icon: Briefcase,
      title: "Challenging projects",
      description: "Projects that match your expertise",
    },
    {
      icon: Users,
      title: "Personal guidance",
      description: "From people with an engineering background",
    },
    {
      icon: TrendingUp,
      title: "Long-term development",
      description: "Not short-term thinking",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "For your contribution and commitment",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why become a Dineler?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Because your career is more than a list of projects. At Dinel, you
            are not placed—you are guided.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
