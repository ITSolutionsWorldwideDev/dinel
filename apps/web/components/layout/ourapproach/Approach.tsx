import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import IconCardCenterAlign from "@/components/ui/IconCardCenterAlign";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { Award } from "lucide-react";

import React from "react";

const Approach = () => {
  const values = [
    {
      letter: "T",
      title: "Technology",
      desc: "Working with up-to-date expertise and innovation",
      bg: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
    },
    {
      letter: "I",
      title: "Insight",
      desc: "Understanding people, ambitions and organizations",
      bg: "bg-linear-to-r from-[##AD46FF] to-[#9810FA]",
    },
    {
      letter: "E",
      title: "Experience",
      desc: "Over 25 years of knowledge in technology and secondment",
      bg: "bg-linear-to-r from-[#FF6900] to-[#FB2C36]",
    },
    {
      letter: "R",
      title: "Result",
      desc: "Sustainable impact for professionals and organizations",
      bg: "bg-linear-to-r from-[#00C950] to-[#009966]",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex item-center justify-center">
        <Heading
          text="The T-I-E-R Foundation"
          icon={<Award className="text-[#0A7CD8]" />}
        />
      </div>

      <HeadingAndDesc
        heading="Our approach is built on T-I-E-R"
        desc="Everything we do is guided by one clear philosophy:"
      />
      <IconCardCenterAlign values={values} />
    </div>
  );
};

export default Approach;
