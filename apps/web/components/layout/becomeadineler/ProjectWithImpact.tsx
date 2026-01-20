import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { Warehouse } from "lucide-react";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { Zap, Target, Lightbulb, ScrollText } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectWithImpact = () => {
  const features = [
    {
      icon: <Zap className="text-white" />,
      iconBg: "bg-[#FF6B35]",
      title: "Energy and energy transition",
    },
    {
      icon: <ScrollText className="text-white" />,
      iconBg: "bg-[#FF6B35]",
      title: "Infrastructure and mobility",
    },

    {
      icon: <Target className="text-white" />,
      iconBg: "bg-[#FF6B35]",
      title: "Industry and industrial automation",
    },

    {
      icon: <Lightbulb className="text-white" />,
      iconBg: "bg-[#FF6B35]",
      title: "Sustainable and innovative technology",
    },
  ];
  return (
    <div className="mt-20 container mx-auto p-5">
      <div className="flex item-center justify-center">
        <Heading icon={<Warehouse />} text=" Projects with Impact" />
      </div>

      <HeadingAndDesc
        heading="Work that matters"
        desc="As a Dineler, you work on projects in:"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-5 container mx-auto mt-10 p-5">
        {features.map((item, index) => (
          <IconWithTextCard item={item} index={index} key={index} />
        ))}
      </div>
      <section className="relative w-full h-65 md:h-90 lg:h-105 p-5 mt-10">
        {/* Background Image */}
        <Image
          src="/assets/becomeadineler/fd45d90ff9a0f434b9c7ce6c20153d49c158417e.jpg" // replace with your image path
          alt="Sustainable projects"
          fill
          className="object-cover"
          priority
        />

        {/* Blue Overlay */}
        <div className="absolute left-0 bottom-0 h-full w-full bg-linear-to-t from-blue-700/70 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-end justify-center p-7 ">
          <p className="text-white text-center text-lg md:text-2xl font-semibold max-w-4xl">
            These are projects that contribute to a better, more sustainable
            future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectWithImpact;
