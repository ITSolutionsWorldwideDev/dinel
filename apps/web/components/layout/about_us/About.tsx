import React from "react";
import AboutHeader from "./AboutHeader";
import NavBar from "@/components/ui/NavBar";
import Story from "./Story";
import Believe from "./Believe";
import OurApproach from "@/components/ui/OurApproach";
import Partner from "./Partner";
import DinelToday from "./DinelToday";
import PartofStory from "./PartofStory";
import DinelGroupBv from "@/components/ui/DinelGroupBv";

const About = () => {
  const items = [
    {
      letter: "T",
      title: "Technology",
      description: "Modern technologies and innovative projects",
    },
    {
      letter: "I",
      title: "Insight",
      description: "Understanding ambitions and motivations",
    },
    {
      letter: "E",
      title: "Experience",
      description: "25+ years in technology and secondment",
    },
    {
      letter: "R",
      title: "Result",
      description: "Sustainable impact for all",
    },
  ];
  return (
    <div>
      {/* <NavBar /> */}
      <AboutHeader />
      <Story />
      <Believe />
      <OurApproach
        heading="How we work"
        subtitle="Everything we do is guided by one clear philosophy:"
        data={items}
      />
      <Partner />
      <DinelToday />
      <PartofStory />
      <DinelGroupBv />
    </div>
  );
};

export default About;
