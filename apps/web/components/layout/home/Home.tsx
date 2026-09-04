import React from "react";
import Header from "./Header";
import IndustryWeWork from "./IndustryWeWork";
import WhoWeHelp from "./WhoWeHelp";
import RolesWePlace from "./RolesWePlace";
import WhyDutchCompanies from "./WhyDutchCompanies";
import HowItWorks from "./HowItWorks";
import FaqSection from "./FaqSection";
import Impact from "./Impact";
import EnquiryForm from "@/components/forms/EnquiryForm";

const allCategories = [
  { value: "it-development", label: "IT & Development" },
  { value: "design-services", label: "Design Services" },
  { value: "marketing-analytics", label: "Marketing & Analytics" },
  { value: "admin-business-support", label: "Admin & Business Support" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "travel-reservations", label: "Travel & Reservations" },
];

const Home = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Header />
      <WhoWeHelp />
      <RolesWePlace />
      <IndustryWeWork />

      <WhyDutchCompanies />
      <HowItWorks />

      {/* Section 1: Form Section stretched to full width */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white pb-16 pt-0">
        <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-[#0d2b33]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#f2c40d]/10 blur-3xl" />

<div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto relative z-10">          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 pt-8">
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Connect with our team or visit our office location to explore seamless collaboration opportunities.
            </p>
          </div>

          {/* Fully stretched single column for the form */}
          <div className="w-full">
            <EnquiryForm categories={allCategories} defaultMode="hiring" />
          </div>
        </div>
      </section>

      {/* Section 2: Centered FAQ Section */}
    {/* Section 2: FAQ Section */}
<section className="relative overflow-hidden bg-[#f7fafa] py-24 border-t border-b border-[#1a4550]/10">
  <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto">
    <FaqSection />
  </div>
</section>

      <Impact />
    </div>
  );
};

export default Home;