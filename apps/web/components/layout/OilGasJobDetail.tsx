import React from "react";
import JobDescHeader from "../ui/JobDescHeader";
import JobDescription from "../ui/JobDescription";

const OilGasJobDetail = () => {
  const jobData = {
    category: "Energy & Industry",
    posteddate: "dsadas",
    title: "Senior Control Engineer",
    location: "Rotterdam",
    jobType: "Full-time",
    salary: "€5,000 - €7,000 per month",
    experience: "5+ years",
    education: "Bachelor in Engineering",

    about: {
      description: [
        "We are looking for an experienced Senior Control Engineer to join our dynamic team in Rotterdam. In this role, you will be responsible for designing, developing, and implementing control systems for industrial processes.",
        "You will work on challenging projects in the energy sector, collaborating with multidisciplinary teams to deliver innovative solutions. This position offers excellent opportunities for professional growth and development.",
      ],
    },

    responsibilities: [
      "Design and develop control systems for industrial processes",
      "Create technical specifications and documentation",
      "Commission and test control systems on-site",
      "Provide technical support to clients and project teams",
      "Lead technical discussions with stakeholders",
      "Perform system optimization and troubleshooting",
      "Mentor junior engineers and share knowledge",
    ],

    requirements: [
      "Bachelor's or Master's degree in Control Engineering, Electrical Engineering, or related field",
      "Minimum 5 years of experience in control systems design",
      "Strong knowledge of PLC programming (Siemens, Allen Bradley)",
      "Experience with SCADA systems and HMI design",
      "Knowledge of industry standards and safety regulations",
      "Excellent problem-solving and analytical skills",
      "Strong communication skills in English and Dutch",
      "Ability to work independently and in team environments",
    ],

    benefits: [
      "Competitive salary package (€5,000 - €7,000 per month)",
      "Attractive benefits including pension plan and health insurance",
      "Company car and laptop",
      "Opportunities for professional development",
    ],
  };
  return (
    <div>
      <JobDescHeader
        category={jobData.category}
        postedTime={jobData.posteddate}
        title={jobData.title}
        location={jobData.location}
        experience={jobData.experience}
        jobType={jobData.jobType}
      />
      <JobDescription jobData={jobData} />
    </div>
  );
};

export default OilGasJobDetail;
