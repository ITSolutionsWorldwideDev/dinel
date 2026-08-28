// import Client from '@/components/layout/client/Client'
import ClientHeader from "@/components/layout/client/ClientHeader";
import Environment from "@/components/layout/client/Environment";
import Experience from "@/components/layout/client/Experience";
import Stats from "@/components/layout/client/Stats";
import SupportYourOrginazation from "@/components/layout/client/SupportYourOrginazation";
import TechnicalProfessionals from "@/components/layout/client/TechnicalProfessionals";
import WhyDinel from "@/components/layout/client/WhyDinel";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const client = () => {
  return (
    <div>
      {/* <NavBar /> */}

      <ClientHeader />
      <WhyDinel />
      <SupportYourOrginazation/>
      <Experience/>
      <Environment/>
      <TechnicalProfessionals/>
      <DinelGroupBv/>
    </div>
  );
};

export default client;
