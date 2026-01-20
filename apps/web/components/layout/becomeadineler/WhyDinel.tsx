import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { Rocket } from "lucide-react";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { Star, Target, Users, TrendingUp, Award } from "lucide-react";
// import { LiaArrowUpSolid } from "react-icons/lia";
import React from "react";

const WhyDinel = () => {
  const features = [
    {
      icon: <Target className="text-white" />,
      iconBg: "bg-[#d34a03]",
      title: "Projects that match",
      desc: "Your experience and ambitions",
    },
    {
      icon: <Users className="text-white" />,
      iconBg: "bg-[#d34a03]",
      title: "Personal guidance",
      desc: "Throughout your journey",
    },

    {
      icon: <TrendingUp className="text-white" />,
      iconBg: "bg-[#d34a03]",
      title: "Long-term development",
      desc: "Career growth focus",
    },

    {
      icon: <Award className="text-white" />,
      iconBg: "bg-[#d34a03]",
      title: "Honest communication",
      desc: "Clear expectations",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Heading icon={<Rocket />} text=" Why Choose Dinel" />
      </div>

      <HeadingAndDesc
        heading="Why professionals choose Dinel"
        desc="Join a community that invests in your growth and values your expertise"
      />
      <div className="grid sm:grid-cols-2  gap-5 container mx-auto mt-10 p-5">
        {features.map((item, index) => (
          <IconWithTextCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyDinel;
