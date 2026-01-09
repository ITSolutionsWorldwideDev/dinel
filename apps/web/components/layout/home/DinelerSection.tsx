import React from "react";
import { Target, TrendingUp, Award, Users } from "lucide-react";

const features = [
  {
    title: "Impactful Projects",
    description:
      "You work on challenging projects that contribute to the future",
    icon: Target,
    bg: "bg-blue-500",
  },
  {
    title: "Continuous Growth",
    description: "You grow professionally and personally",
    icon: TrendingUp,
    bg: "bg-purple-500",
  },
  {
    title: "Recognition",
    description: "You are recognized for your expertise and commitment",
    icon: Award,
    bg: "bg-orange-500",
  },
  {
    title: "Strong Network",
    description: "You belong to a network of professionals who make an impact",
    icon: Users,
    bg: "bg-green-500",
  },
];

const DinelerSection = () => {
  return (
    <section className="relative bg-linear-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What does it mean to be a Dineler?
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            A Dineler is more than a technical specialist.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.bg}`}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p>
          Being a Dineler means: building the future with knowledge, courage and
          commitment.
        </p>
      </div>

      <div>
        <button className="mt-8 mx-auto block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition">
          Join the Dineler Network
        </button>
      </div>
    </section>
  );
};

export default DinelerSection;
