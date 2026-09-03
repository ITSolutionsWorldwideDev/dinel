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
    <div className="bg-gray-50">
      <Header />
      <IndustryWeWork />
      <WhoWeHelp />
      <RolesWePlace />
      <WhyDutchCompanies />
      <HowItWorks />

      {/* Section 1: Form & Real Map with Matching Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white py-0">
        <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-[#0d2b33]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#f2c40d]/10 blur-3xl" />

        <div className="w-full px-6 md:px-12 lg:px-16 max-w-[1500px] mx-auto relative z-10">
          
          {/* Section Header matching HowItWorks styling */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Connect with our team or visit our office location to explore seamless collaboration opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            
            {/* Left: Enquiry Form */}
            <div className="flex flex-col w-full">
              <EnquiryForm categories={allCategories} defaultMode="hiring" />
            </div>

            {/* Right: Real Interactive Map */}
            <div className="flex flex-col w-full h-full min-h-[480px] lg:min-h-full overflow-hidden rounded-3xl border-2 border-[#1a4550]/15 bg-white shadow-xl shadow-[#1a4550]/5 relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.617469614488!2d4.895167876839958!3d52.37021577201977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb361665a95%3A0xb357f8674918e7e!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="absolute inset-0 h-full w-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Centered FAQ Section */}
      <section className="relative overflow-hidden bg-[#f7fafa] py-24 border-t border-b border-[#1a4550]/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <FaqSection />
        </div>
      </section>

      <Impact />
    </div>
  );
};

export default Home;