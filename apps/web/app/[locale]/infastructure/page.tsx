import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import IndustryDesc from "@/components/ui/IndustryDesc";
import React from "react";

const page = () => {
  const data = {
    desc1:
      "In the context of efficiency and circularity, the challenges surrounding infrastructure demand fast, smart, and innovative solutions. The sector is becoming increasingly diverse, surprising, and complex. Traditional skilled workers will, of course, remain needed on construction sites, but they—and especially their colleagues in the backfield—are increasingly leveraging digitalization.",

    desc2:
      "Our dedicated professionals are active across the full spectrum of infrastructure, from design and engineering to project management and implementation. They offer both project-based and permanent work. These team players are attentive to sustainability, material use, and the needs of the end user.",
    experties: [
      "Road construction (installation of tunnels, traffic lights and public lighting VRI/OVL/DVM)",

      "Wet infrastructure (bridges, locks and pumping stations)",

      "Building-related installations (safety technology, climate control systems, service, management and maintenance)",

      "Underground infrastructure (cables and pipes, gas pipelines, CAI, etc.)",

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
        image="/0872843119bbf439e01473f7f88baf78d28f7411.jpg"
      />
      <div className="mt-20">
        <IndustryDesc data={data} />
      </div>
    </div>
  );
};

export default page;
