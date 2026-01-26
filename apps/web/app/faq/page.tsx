import GeneralQuestions from "@/components/layout/faq/GeneralQuestions";
import QuestionAnswer from "@/components/layout/faq/QuestionAnswer";
import QuestionsFromClients from "@/components/layout/faq/QuestionsFromClients";
import QuestionsFromProfessinals from "@/components/layout/faq/QuestionsFromProfessinals";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import SimpleHedingAnd2Btns from "@/components/ui/SimpleHedingAnd2Btns";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderWithCenterTextandBgImg
        heading1="Frequently Asked Questions"
        description="Got questions? We've gathered the most common questions from professionals and clients to help you quickly find the answers you need. If you don't see your question here, feel free to contact us directly."
        image="/assets/faq/979194d0a724928fcf4293d251f622f12ca61d92 (3).jpg"
      />

      <div className="bg-gray-100 p-20">
        <QuestionsFromProfessinals />
        <div className="mt-10">
          <QuestionsFromClients />
        </div>

        <div className="mt-10">
          <GeneralQuestions />
        </div>

        <SimpleHedingAnd2Btns
          heading="Still have questions?"
          des="We're here to help! Contact us anytime we'll be happy to assist."
          btn1="Contact Dinel"
          btn2="Become a Dineler"
          btn1Classes="bg-[#FF6B35] text-white"
          btn2Classes="text-[#0A7CD8] border border-[#0A7CD8]"
        />
      </div>

      <DinelGroupBv />
    </div>
  );
};

export default page;
