import React from "react";
import HeaderWithSideImage from "@/components/ui/HeaderWithSideImage";
const Header = () => {
  return (
    <div>
      <div>
        <HeaderWithSideImage
          heading="Become a Dineler. Make an impact with your expertise."
          desc="Being a Dineler means more than working on technical projects.It means choosing growth, impact and belonging to a community that values people as much as technology. At Dinel, you dont just work on projects you help build the future."
          btn1="Join Dinel"
          btn2="View Vacancies"
          image="/assets/vacancies/Group9395.png"
        />
      </div>
    </div>
  );
};

export default Header;
