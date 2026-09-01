import React from "react";
import Header from "./Header";
import FindJobSlider from "./FindJobSlider";
import IndustryWeWork from "./IndustryWeWork";
import WhoWeHelp from "./WhoWeHelp";
import RolesWePlace from "./RolesWePlace";
import WhyDutchCompanies from "./WhyDutchCompanies";
import HowItWorks from "./HowItWorks";
import FaqSection from "./FaqSection";
import Impact from "./Impact";
import { getTranslations, getLocale } from "next-intl/server";
const Homei = () => {
  return (
    <div className="bg-gray-50">
      <Header />


      <IndustryWeWork />

      <WhoWeHelp />

      <RolesWePlace />

      <WhyDutchCompanies />

      <HowItWorks />

      <FaqSection />

      <Impact />
    </div>
  );
};

export default Homei;