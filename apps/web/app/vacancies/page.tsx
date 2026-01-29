import Header from "@/components/layout/vacancies/VaccinciesHeader";
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
        <div className="lg:absolute z-30">
          <VacanciesSearchBar />
        </div>
      </div>

      <div className="mt-20">
        <FindJobSlider />
      </div>

      <ApplyWithDinel />
      <HowToApply />
      <div className="relative">
        <img
          src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          alt=""
        />

        <HeadingDescAnd2BtnsWithBg
          heading="Ready to find your next challenge?"
          description="Start exploring vacancies and become a part of the Dineler community today."
          btn1Text="View Vacancies"
          btn2Text="Contact Us"
        />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
