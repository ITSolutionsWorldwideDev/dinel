import React from "react";
import HeaderWithSideImage from "@/components/ui/HeaderWithSideImage";
const Header = () => {
  return (
    <div>
      <div>
        <HeaderWithSideImage
          heading="Find your next challenge as a Dineler"
          desc="Explore a wide range of exciting technical vacancies in energy, infrastructure, industry, and sustainable technology. Your next project awaits."
          btn1="View All Vacancies"
          btn2="Become a Dineler"
          image="/assets/vacancies/Group9395.png"
        />
      </div>
    </div>
  );
};

export default Header;
