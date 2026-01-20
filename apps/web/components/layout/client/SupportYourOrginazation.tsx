import Heading from "@/components/ui/Heading";
import React from "react";
import { Settings, Target, CircleCheckBig } from "lucide-react";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { RiFlashlightLine } from "react-icons/ri";

import Image from "next/image";

const SupportYourOrginazation = () => {
  const capacityData = [
    {
      title: "Extra Capacity",
      description:
        "For peak workloads, complex projects or specific expertise. We provide professionals who can step in quickly and add value from day one.",
      image: "3bd114e408d1b69ce4d1ddbeeb02b7cdcf344725.jpg",
      icon: <RiFlashlightLine />,
      iconBg: "bg-linear-to-r from-[#FF6900] to-[#FB2C36]",
      points: [
        "Quick deployment",
        "Immediate impact",
        "Flexible duration",
        "Specialized skills",
      ],
    },
    {
      title: "Structural Reinforcement",
      description:
        "For organizations that want to grow sustainably. We connect you with professionals who contribute to continuity, knowledge retention and long-term stability.",
      image: "7add9bee2ec8c7a8546d18e75f20199ecc3208ce.jpg",
      icon: <Target />,
      iconBg: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
      points: [
        "Long-term stability",
        "Knowledge retention",
        "Team integration",
        "Sustainable growth",
      ],
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Heading
          text="How We Support Your Organization"
          icon={<Settings className="text-[#FF6B35]" />}
        />
      </div>
      <HeadingAndDesc
        heading={"Flexible solutions for sustainable growth"}
        desc={"Dinel supports organizations in two key ways:"}
      />

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {capacityData.map((item, index) => (
            <div key={index} className=" overflow-hidden bg-white shadow-sm">
              {/* Image */}
              <div className="relative">
                <Image
                  src={`/assets/client/${item.image}`}
                  alt={item.title}
                  width={800}
                  height={450}
                  className="w-full h-65 object-cover"
                />
                <div
                  className={`absolute top-4 right-4 ${item.iconBg} text-white p-3 rounded-lg`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6">{item.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {item.points.map((point, idx) => (
                    <div
                      key={idx}
                      className=" flex flex-col sm:flex-row items-center gap-2 text-gray-700"
                    >
                      <span className="text-[#0A7CD8]">
                        <CircleCheckBig />
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupportYourOrginazation;
