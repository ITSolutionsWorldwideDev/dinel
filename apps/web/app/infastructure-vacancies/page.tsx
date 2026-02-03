

import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import InfastructureVacancies from "@/components/ui/InfastructureVacancies";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="Infrastructure "
        heading2="Vacancies"
        image="/db9ab5042ee62e5a443b09a0ef071a0a4a7286c1.jpg"
      />
      <InfastructureVacancies/>
      
    </div>
  );
};

export default page;
