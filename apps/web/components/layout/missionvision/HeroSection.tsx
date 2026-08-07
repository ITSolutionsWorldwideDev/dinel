import Cards from "@/components/ui/Cards";
import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Target } from "lucide-react";

import Heading from "@/components/ui/Heading";

const HeroSection = () => {
  const sections = [
    {
      topHeading: (
        <Heading
          text="Our Mission"
          icon={<Target className="text-[#0A7CD8]" />}
        />
      ),
      // title: "Our Mission",

      description:
        "Staff Outsourcing connects technical professionals with the right opportunities and organizations with the right expertise. Through our T-I-E-R philosophy, we help professionals accelerate their careers and support organizations in achieving sustainable and innovative growth. We believe that when people are supported and challenged, technology creates real impact.",
      image:
        "/assets/missionvision/5ca1a8c9b4e0a4ba56945ffdb5465c9941c24c3b.jpg",
    },
  ];
  return (
    <div className="container mx-auto">
      <Cards data={sections} />
    </div>
  );
};

export default HeroSection;
