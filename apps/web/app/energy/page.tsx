import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import IndustryDesc from "@/components/ui/IndustryDesc";
import React from "react";

const page = () => {
  const data = {
    desc1:
      "In the energy world, developments are happening at breakneck speed. Globalization, innovation, and technology are constantly evolving. If you want to stay relevant as a company, you have to keep improving. And for that, you need people. The right professionals who ensure you stay ahead of the competition.",

    desc2:
      "Our dedicated professionals are available for short and long-term projects, both nationally and internationally. These professionals are eager to take on complex challenges and contribute to a successful energy transition, on the road to a sustainable world.",
    experties: [
      "Generation and transport of energy",

      "Development of new energy sources: wind, sun, water and bio power plants",

      "Energy distribution, such as electricity distribution HV/LV, gas distribution",

      "In the context of the energy transition",

      "Work preparation",

      "Project management",

      "Engineering",

      "Execution",

      "Design",

      "Project management",
    ],
  };
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="Infrastructure"
        image="/09eeec94c2c10d796e92a879026d55b32601212b.jpg"
      />
      <div className="mt-20">
        <IndustryDesc data={data} />
      </div>
    </div>
  );
};

export default page;
