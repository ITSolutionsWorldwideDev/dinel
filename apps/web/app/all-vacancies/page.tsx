import AllVacancies from "@/components/layout/allvacancies/AllVacancies";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="All "
        heading2="Vacancies"
        image="/db9ab5042ee62e5a443b09a0ef071a0a4a7286c1.jpg"
      />
      <AllVacancies/>
    </div>
  );
};

export default page;
