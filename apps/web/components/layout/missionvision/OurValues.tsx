import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { Shield } from "lucide-react";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { Handshake, Heart, HeartHandshake, Star } from "lucide-react";
import React from "react";

const OurValues = () => {
  const features = [
    {
      icon: <Heart className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]",
      title: "Respect",
      desc: "For people, expertise and ambitions",
    },
    {
      icon: <Shield className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#AD46FF] to-[#9810FA]",
      title: "Trust",
      desc: "Built through transparency and reliability",
    },
    {
      icon: <Handshake className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36]",
      title: "Commitment",
      desc: "To long-term relationships and quality",
    },
    {
      icon: <Star className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#00C950] to-[#009966]",
      title: "Integrity",
      desc: "Doing what we promise and standing by our word",
    },
  ];
  return (
    <div className="container mx-auto p-20">
      <div className="flex items-center justify-center">
        <Heading
          text="What We Stand For"
          icon={<Shield className="text-[#0A7CD8]" />}
        />
      </div>

      <HeadingAndDesc
        heading="Our values"
        desc="These core values guide every decision we make and every relationship we build"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 container mx-auto mt-10">
        {features.map((item, index) => (
          <IconWithTextCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
