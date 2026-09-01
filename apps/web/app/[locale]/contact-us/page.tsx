import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactDetailsAndReassurance from "@/components/contact/ContactDetailsAndReassurance";
import SimpleHedingAnd2Btns from "@/components/ui/SimpleHedingAnd2Btns";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12">
      <ContactHero />
      <ContactChannels />
      <ContactFormSection />
      <ContactDetailsAndReassurance />

     

    </div>
  );
};

export default page;