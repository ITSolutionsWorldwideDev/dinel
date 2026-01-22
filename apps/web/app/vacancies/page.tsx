import Header from "@/components/layout/vacancies/Header";
import HeaderWithSideImage from "@/components/ui/HeaderWithSideImage";
import NavBar from "@/components/ui/NavBar";
import VacanciesSearchBar from "@/components/layout/home/VacanciesSearchBar";
import FindJobSlider from "@/components/layout/home/FindJobSlider";
import React from "react";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import ApplyWithDinel from "@/components/layout/vacancies/ApplyWithDinel";
import HowToApply from "@/components/layout/vacancies/HowToApply";
import HeadingDescAnd2BtnsWithBg from "@/components/ui/HeadingDescAnd2BtnsWithBg";

const page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <div className="relative flex justify-center items-center ">
        <div className="lg:absolute ">
          <VacanciesSearchBar />
        </div>
      </div>
      <FindJobSlider />

      {/* <div>
        <HeaderWithSideImage
          heading="Find your next challenge as a Dineler"
          desc="Explore a wide range of exciting technical vacancies in energy, infrastructure, industry, and sustainable technology. Your next project awaits."
          image="/assets/vacancies/Group 9395.png"
          btn1="View All Vacancies"
          btn2="Become a Dineler"
        />
      </div> */}

      <ApplyWithDinel />
      <HowToApply />
      <HeadingDescAnd2BtnsWithBg
        heading="Ready to find your next challenge?"
        description="Start exploring vacancies and become a part of the Dineler community today."
        btn1Text="View Vacancies"
        btn2Text="Contact Us"
      />
      <DinelGroupBv />
    </div>
  );
};

export default page;
