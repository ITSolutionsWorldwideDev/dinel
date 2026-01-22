import HeroSection from "@/components/layout/missionvision/HeroSection";
import LookingAhead from "@/components/layout/missionvision/LookingAhead";
import OurValues from "@/components/layout/missionvision/OurValues";
import OurVision from "@/components/layout/missionvision/OurVision";
import RoleOfDineler from "@/components/layout/missionvision/RoleOfDineler";
import ShappingFuture from "@/components/layout/missionvision/ShappingFuture";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderWithCenterTextandBgImg
        heading1="Driven by people."
        heading2="Powered by technology."
        description="At Dinel, our mission and vision guide everything we do. They define how we connect professionals and organizations, how we build relationships, and how we contribute to a sustainable future."
        image="/assets/missionvision/eed143fd1a59573e41f4bc49954fcc676362f236.jpg"
      />
      <HeroSection />
      <OurVision />

      <div className="mt-20">
        <RoleOfDineler />
      </div>
      <OurValues />

      <div className="mt-20">
        <LookingAhead />
      </div>

      <div className="mt-15">
        <ShappingFuture />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
