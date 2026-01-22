import WhySecondDinel from "@/components/layout/home/WhySecondDinel";
import Approach from "@/components/layout/ourapproach/Approach";
import SuccessfulCollaboration from "@/components/layout/ourapproach/SuccessfulCollaboration";
import WhyThisWork from "@/components/layout/ourapproach/WhyThisWork";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import TextWithTwoBtns from "@/components/ui/TextWithTwoBtns";
import React from "react";

const OurApproach = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderWithCenterTextandBgImg
        heading1="A clear approach."
        heading2="Built on trust and experience."
        description="At Dinel, everything starts with understanding. Understanding professionals, organizations, and the specific needs behind every engagement."
        image="/assets/ourapproach/979194d0a724928fcf4293d251f622f12ca61d92 (1).jpg"
      />

      <SuccessfulCollaboration />

      <Approach />
      <WhyThisWork />

      <TextWithTwoBtns
        heading="Let's take the next step together"
        desc="Whether you are a professional looking for your next challenge or an organization looking for the right expertise Dinel is ready to support you."
        btn1txt="Become a Dineler"
        btn2txt="Contact Dinel"
      />
      <DinelGroupBv />
    </div>
  );
};

export default OurApproach;
