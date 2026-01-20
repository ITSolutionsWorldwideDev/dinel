import React from "react";
import { Award, Target, Rocket, Handshake } from "lucide-react";

export default function Stats() {
  const features = [
    {
      icon: Award,
      iconBg: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36]",
      value: "25+",
      label: "Years Experience",
    },
    {
      icon: Target,
      iconBg: "bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB]",
      value: "100%",
      label: "Quality Match",
    },
    {
      icon: Rocket,
      iconBg: "bg-gradient-to-br from-[#AD46FF] to-[#F6339A]",
      value: "Fast",
      label: "Delivery Time",
    },
    {
      icon: Handshake,
      iconBg: "bg-gradient-to-br from-[#00C950] to-[#00BBA7]",
      value: "Long-term",
      label: "Partnerships",
    },
  ];

  return (
    <div className=" p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-500/20 to-gray-600/20 backdrop-blur-lg border border-white/10 p-8 group hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Value */}
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {feature.value}
                </h3>

                {/* Label */}
                <p className="text-xl text-white/80 font-light">
                  {feature.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
