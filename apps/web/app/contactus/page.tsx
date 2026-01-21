import Contact from "@/components/layout/contactus/Contact";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import SimpleHedingAnd2Btns from "@/components/ui/SimpleHedingAnd2Btns";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <HeaderWithCenterTextandBgImg
        heading1="Get in touch with Dinel"
        description="Whether you're a professional looking for your next challenge or an organization seeking the right expertise, we're here to help. Contact us today. Let's explore how we can work together."
        image="/assets/contact/979194d0a724928fcf4293d251f622f12ca61d92 (2).jpg"
      />
      <Contact />

      <div className="p-10">
        <SimpleHedingAnd2Btns
          heading="Ready to start?"
          des="Reach out today and become part of the Dineler community."
          btn1="Join Dinel"
          btn2="View Vacancies"
        />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
