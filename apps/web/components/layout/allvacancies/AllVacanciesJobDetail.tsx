// apps/web/components/layout/allvacancies/AllVacanciesJobDetail.tsx
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import JobDescHeader from "@/components/ui/JobDescHeader";
import JobDescription from "@/components/ui/JobDescription";
import React from "react";

interface Props {
  params: { sectorSlug: string; jobId: string };
}

async function fetchJob(jobId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/public/jobs/${jobId}`,
    { cache: "no-store" },
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function AllVacanciesJobDetail({ params }: Props) {
  const jobData = await fetchJob(params.jobId);

  if (!jobData) return <p>Job not found</p>;

  return (
    <>
      <JobDescHeader
        category={jobData.category}
        postedTime={Math.floor(
          (Date.now() - new Date(jobData.posteddate).getTime()) /
            (1000 * 60 * 60 * 24),
        )}
        // postedTime={jobData.posteddate}
        title={jobData.title}
        location={jobData.location}
        experience={jobData.experience}
        jobType={jobData.jobType}
        jobId={jobData.jobId}
      />
      <JobDescription jobData={jobData} />
      <DinelGroupBv />
    </>
  );
}

/* 
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
  }; */
