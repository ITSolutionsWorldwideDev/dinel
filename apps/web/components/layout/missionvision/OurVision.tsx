import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { Eye, Heart, Star } from "lucide-react";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { LiaArrowUpSolid } from "react-icons/lia";

import React from "react";

const OurVision = () => {
  const features = [
    {
      icon: <Heart className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]",
      title: "Respect",
      desc: "For people, expertise and ambitions",
    },
    {
      icon: <LiaArrowUpSolid className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36",
      title: "Trust",
      desc: "Built through transparency and reliability",
    },

    {
      icon: <Star className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#09B54E] to-[#008001]",
      title: "Integrity",
      desc: "Doing what we promise and standing by our word",
    },
  ];
  return (
    <div className="container mx-auto p-20">
      <div className="flex items-center justify-center">
        <Heading text="Our Vision" icon={<Eye className="text-[#FF6B35]" />} />
      </div>

      <HeadingAndDesc
        heading="Our vision"
        desc="We strive to be the partner of choice in the technology sector for professionals who want to make an impact and for organizations that want to move forward with confidence."
      />

      <div className="flex items-center justify-center">
        <p>We envision a future in which:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 container mx-auto mt-10">
        {features.map((item, index) => (
          <IconWithTextCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurVision;
