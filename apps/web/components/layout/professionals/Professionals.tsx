import React from "react";
import ProfessinalsHeader from "./ProfessinalsHeader";
import NavBar from "@/components/ui/NavBar";
import WhyDineler from "./WhyDineler";
import Projects from "./Projects";
import DinelCommunity from "./DinelCommunity";
import Guidance from "./Guidance";
import NextStep from "./NextStep";
import DinelGroupBv from "@/components/ui/DinelGroupBv";

const Professionals = () => {
  return (
    <div>
      <NavBar />
      <ProfessinalsHeader />
      <WhyDineler />
      <Projects />
      <DinelCommunity />
      <Guidance />
      <NextStep />
      <DinelGroupBv />
    </div>
  );
};

export default Professionals;
