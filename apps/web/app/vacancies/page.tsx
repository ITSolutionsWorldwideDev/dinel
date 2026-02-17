import Header from "@/components/layout/vacancies/VaccinciesHeader";
import HeaderWithSideImage from "@/components/ui/HeaderWithSideImage";
import NavBar from "@/components/ui/NavBar";
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

      <div>
        <FindJobSlider />
      </div>

      <ApplyWithDinel />
      <HowToApply />
      
      <div className="relative">
        <HeadingDescAnd2BtnsWithBg
          heading="Ready to find your next challenge?"
          description="Start exploring vacancies and become a part of the Dineler community today."
          btn1Text="View Vacancies"
          btn2Text="Contact Us"
          btn1Href="vacancies"
          btn2Href="contact-us"
        />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
