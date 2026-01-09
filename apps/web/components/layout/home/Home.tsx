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
import StatusBanner from "./StatsSection";
import DinelBanner from "./DinelBanner";
import WhySecondDinel from "./WhySecondDinel";
import Impact from "./Impact";
import DinelGroupBv from "../../ui/DinelGroupBv";

const Homei = () => {
  return (
    <div className="">
      <NavBar />
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
      <StatusBanner />
      <DinelBanner />
      <WhySecondDinel />
      <Impact />
      <DinelGroupBv />
    </div>
  );
};

export default Homei;
