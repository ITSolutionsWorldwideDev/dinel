import Heading from "@/components/ui/Heading";
import React from "react";
import { Lightbulb } from "lucide-react";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { Zap, Building2, Factory, Leaf } from "lucide-react";
import ImagesWithIconDesc from "@/components/ui/ImagesWithIconDesc";
import TextWithBorderAndBg from "@/components/ui/TextWithBorderAndBg";
import Cards from "@/components/ui/Cards";

const Experience = () => {
  const projectsData = [
    {
      id: 1,
      title: "Energy and energy transition",
      icon: <Zap className="w-6 h-6 text-white" />,
      image: "client/43e0391a2438655203ee058c7a427f2f86234395.jpg",
      iconBg: "bg-linear-to-r from-[#F0B100] to-[#FF6900]",
    },
    {
      id: 2,
      title: "Infrastructure and mobility",
      icon: <Building2 className="w-6 h-6 text-white" />,
      image: "client/e2ccddbe046bf71b43ad2be7832ac133f3e6ec47.jpg",
      iconBg: "bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]",
    },
    {
      id: 3,
      title: "Industry and industrial automation",
      icon: <Factory className="w-6 h-6 text-white" />,
      image: "client/68aca5cf526a5529540c7b89d9b48654e4ef1bef.jpg",
      iconBg: "bg-linear-to-r from-[#4A5565] to-[#1E2939]",
    },
    {
      id: 4,
      title: "Sustainable and innovative technology",
      icon: <Leaf className="w-6 h-6 text-white" />,
      image: "client/970ef23aae953e071a6f02873e28320db60751db.jpg",
      iconBg: "bg-linear-to-r from-[#00C950] to-[#009966]",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Heading
          text="Industries We Serve"
          icon={<Lightbulb className="text-[#FF6B35]" />}
        />
      </div>
      <HeadingAndDesc
        heading="Experience across multiple sectors"
        desc="Dinel works with organizations active in:"
      />

      <ImagesWithIconDesc
        data={projectsData}
        classnameforNoOfImages="grid grid-cols-1 md:grid-cols-4 gap-6"
      />

      
    </div>
  );
};

export default Experience;
