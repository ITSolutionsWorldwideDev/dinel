import Contact from "@/components/layout/contactus/Contact";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import SimpleHedingAnd2Btns from "@/components/ui/SimpleHedingAnd2Btns";
import React from "react";

const page = () => {
  return (
    <div>
      
      <HeaderWithCenterTextandBgImg
        heading1="Get in touch with us"
        description="Whether you're a professional looking for your next challenge or an organization seeking the right expertise, we're here to help. Contact us today. Let's explore how we can work together."
        image="/assets/contact/490e8c4493ebeaa9194a0e0cedad85df35c73e4b.jpg"
      />
      <Contact />

      <div className="p-10">
        <SimpleHedingAnd2Btns
          heading="Ready to start?"
          des="Reach out today and become part of the Staff Outsourcing community."
          btn1="Join us"
          btn2="View Vacancies"
          btn1Classes="bg-[#FF6B35] text-white"
          btn2Classes="bg-white text-[#0A7CD8] border-2 border-[#0A7CD8]"
        />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
