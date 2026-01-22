import NavBar from "@/components/ui/NavBar";
import React from "react";
import Header from "./Header";
import VacanciesSearchBar from "./VacanciesSearchBar";
import JobVacanciesSlider from "./FindJobSlider";
import BlogCard from "@/components/ui/BlogCard";
import DinelerSection from "./DinelerSection";
import OurApproach from "../../ui/OurApproach";
import ProfessionalsSection from "./ProfessionalsSection";
import DinelProfessionals from "./DinelProfessionals";
import DinelBanner from "./DinelBanner";
import WhySecondDinel from "./WhySecondDinel";
import Impact from "./Impact";
import DinelGroupBv from "../../ui/DinelGroupBv";
import StatsSection from "./StatsSection";

const Homei = () => {
  return (
    <div className="">
      {/* <NavBar /> */}
      <Header />
      <div className="relative flex justify-center items-center ">
        <div className="lg:absolute ">
          <VacanciesSearchBar />
        </div>
      </div>
      <JobVacanciesSlider />
      <BlogCard />
      <DinelerSection />
      <OurApproach />
      <ProfessionalsSection />
      <DinelProfessionals />
      <div className="relative">
        <div className="absolute inset-0 top-10 z-0 opacity-10 bg-[url('/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png')] bg-no-repeat"></div>
        <StatsSection />
        <DinelBanner />
      </div>

      <WhySecondDinel />
      <Impact />
      <DinelGroupBv />
    </div>
  );
};

export default Homei;
