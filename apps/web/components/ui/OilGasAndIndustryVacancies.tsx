import React from "react";
import JobSideBar from "../layout/job-page/JobSideBar";
import Paginations from "../layout/job-page/Paginations";
import DinelGroupBv from "./DinelGroupBv";

const OilGasAndIndustryVacancies = () => {
     const jobData = [
    {
      id: 1,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 2,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 3,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 4,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 5,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 6,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 7,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
  ];
  return (
    <>
      <div className="container mx-auto flex items-start justify-center p-20">
        <div>
          <JobSideBar />
        </div>

        <div>
          <Paginations jobData={jobData}/>
        </div>
      </div>
      <DinelGroupBv />
    </>
  );
};

export default OilGasAndIndustryVacancies;
