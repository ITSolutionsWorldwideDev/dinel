import Header from "@/components/layout/vacancies/Header";
import HeaderWithSideImage from "@/components/ui/HeaderWithSideImage";
import NavBar from "@/components/ui/NavBar";
import VacanciesSearchBar from "@/components/layout/home/VacanciesSearchBar";
import FindJobSlider from "@/components/layout/home/FindJobSlider"
import React from "react";
import DinelGroupBv from "@/components/ui/DinelGroupBv";

const page = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="relative flex justify-center items-center ">
        <div className="lg:absolute ">
          <VacanciesSearchBar />
        </div>
      </div>
      <FindJobSlider />

      {/* <div>
        <HeaderWithSideImage
          heading="Find your next challenge as a Dineler"
          desc="Explore a wide range of exciting technical vacancies in energy, infrastructure, industry, and sustainable technology. Your next project awaits."
          image="/assets/vacancies/Group 9395.png"
          btn1="View All Vacancies"
          btn2="Become a Dineler"
        />
      </div> */}
      <DinelGroupBv/>
    </div>
  );
};

export default page;
