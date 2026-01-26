import NavBar from "@/components/ui/NavBar";
import React from "react";
import Header from "./Header";
import VacanciesSearchBar from "./VacanciesSearchBar";
import JobVacanciesSlider from "./FindJobSlider";
import BlogCard from "@/components/layout/home/BlogCard";
import DinelerSection from "./DinelerSection";
import OurApproach from "../../ui/OurApproach";
import ProfessionalsSection from "./ProfessionalsSection";
import DinelProfessionals from "./DinelProfessionals";
import DinelBanner from "./DinelBanner";
import WhySecondDinel from "./WhySecondDinel";
import Impact from "./Impact";
import DinelGroupBv from "../../ui/DinelGroupBv";
import StatsSection from "./StatsSection";
import IndustryWeWork from "./IndustryWeWork";

const Homei = () => {
  const items = [
    {
      letter: "T",
      title: "Technology",
      description:
        "You work with the latest technologies and innovations within your field.",
    },
    {
      letter: "I",
      title: "Insight",
      description:
        "We understand your ambitions, your experience and what you are really looking for.",
    },
    {
      letter: "E",
      title: "Experience",
      description:
        "With more than 25 years of experience in technology and secondment.",
    },
    {
      letter: "R",
      title: "Result",
      description: "You make an impact on projects and grow in your career.",
    },
  ];

  return (
    <div className="">
      {/* <NavBar /> */}
      <Header />
      <div className="relative flex justify-center items-center ">
        <div className="lg:absolute ">
          <VacanciesSearchBar />
        </div>
      </div>

      <div className=" mt-20">
        <JobVacanciesSlider />
      </div>
      <IndustryWeWork />
      <BlogCard />
      <DinelerSection />
      <OurApproach
        uppertetxt="Our Philosophy"
        heading="Our Approach"
        subtitle="Everything we do is guided by one clear philosophy:"
        data={items}
      />
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
