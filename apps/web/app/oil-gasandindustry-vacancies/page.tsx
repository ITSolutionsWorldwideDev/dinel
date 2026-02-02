import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import OilGasAndIndustryVacancies from "@/components/ui/OilGasAndIndustryVacancies";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="Oil, Gas and Industry"
        heading2=" Vacancies"
        image="/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg"
      />
      <OilGasAndIndustryVacancies />
    </div>
  );
};

export default page;
