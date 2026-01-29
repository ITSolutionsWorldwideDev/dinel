import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import IndustryDesc from "@/components/ui/IndustryDesc";
import React from "react";

const page = () => {
  const data = {
   desc1:"In the transition to sustainable energy sources, fossil fuels will never completely disappear. They remain indispensable in the industry. Oil and gas companies that actively embrace (digital) innovation are taking a significant step towards the future. Besides innovation, finding the right permanent and temporary talent is essential.",

   desc2:"Our dedicated professionals are available for short-term and long-term projects, both nationally and internationally. These include projects in the distribution and storage industry, the chemical and petrochemical industry, mechanical engineering, manufacturing, installation and energy, and the food and pharmaceutical industry.",
   experties: [
    "Engineering, design and construction",
    "Work preparation, implementation and commissioning",
    "Expediting and procurement",
    "Project support, document control, project control and planning",
    "Electrical engineering / instrumentation",
    "Industrial automation",
    "Process / process control",
    "Mechanical engineering / equipment construction",
    "Mechanical engineering",
    "Steel & construction",
    "Construction & civil engineering",
   ]
  };

 
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="Oil, Gas and Energy"
        image="/abe6d6765e342c3bf17482a40caa2ac0f798d0b0.jpg"
      />
      <IndustryDesc
        data={data}
      />
    </div>
  );
};

export default page;
