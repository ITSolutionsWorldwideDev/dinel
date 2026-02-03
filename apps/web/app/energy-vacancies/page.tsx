
import EnergyVacincies from "@/components/ui/EnergyVacincies";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderWithCenterTextandBgImg
        heading1="Energy"
        heading2="Vacancies"
        image="/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg"
      />
      <EnergyVacincies/>
    </div>
  );
};

export default page;
