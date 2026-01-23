import Header from "@/components/layout/becomeadineler/Header";
import MindSet from "@/components/layout/becomeadineler/MindSet";
import PeopleCapital from "@/components/layout/becomeadineler/PeopleCapital";
import ProjectWithImpact from "@/components/layout/becomeadineler/ProjectWithImpact";
import WhyDinel from "@/components/layout/becomeadineler/WhyDinel";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <MindSet />
      <WhyDinel />
      <ProjectWithImpact />
      <PeopleCapital />
      <DinelGroupBv />
    </div>
  );
};

export default page;
