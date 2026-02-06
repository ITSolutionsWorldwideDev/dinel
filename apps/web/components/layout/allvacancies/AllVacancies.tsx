import React from "react";
import JobSideBar from "../job-page/JobSideBar";
import Paginations from "../job-page/Paginations";
import DinelGroupBv from "../../ui/DinelGroupBv";

const AllVacancies = () => {
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
      id: 9,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 10,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 11,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 12,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 13,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 14,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 15,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 16,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 17,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 18,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 19,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 20,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 21,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 22,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 23,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 24,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 25,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 26,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 27,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 28,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 29,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 30,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 31,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 32,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 33,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 34,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 35,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 36,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 37,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
  ]; // Replace with actual job data or fetch it from props/context
  return (
    <>
      <div className="container mx-auto flex items-start justify-center p-20">
        <div>
          <JobSideBar />
        </div>

        <div>
          <Paginations jobData={jobData} />
        </div>
      </div>
      <DinelGroupBv />
    </>
  );
};

export default AllVacancies;
