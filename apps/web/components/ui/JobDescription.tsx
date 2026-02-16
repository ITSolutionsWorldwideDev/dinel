// apps/web/components/ui/JobDescription.tsx
import React from "react";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Euro,
  TrendingUp,
  CircleCheck,
} from "lucide-react";

interface JobData {
  category: string;
  posteddate: string;
  title: string;
  location: string;
  jobType: string;
  salary: string;
  experience: string;
  education: string;
  about: {
    description: string[];
  };
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export function formatEnum(value?: string) {
  if (!value) return "";
  return value
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}


const JobDescription = ({ jobData }: any) => {
  return (
    <div className=" bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="container mx-auto p-10">
        <div className="flex-wrap flex md:flex-nowrap  justify-center items-start  gap-6">
          {/* Main Content */}
          <div className=" space-y-6 max-w-3xl">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                About this role
              </h2>
              {/* <p className="text-slate-600 leading-relaxed">
                {jobData.description}
              </p> */}
              <div
                className="whitespace-pre-wrap text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: jobData.description || "" }}
              />
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Key responsibilities
              </h2>
              <div className="space-y-3">
                {jobData.responsibilities?.map((item: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full  flex items-center justify-center">
                        <CircleCheck className="text-[#0A7CD8]" />
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                What we're looking for
              </h2>
              <div className="space-y-3">
                {jobData.requirements?.map((item: any, index: any) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full  flex items-center justify-center">
                        <CircleCheck className="text-[#0A7CD8]" />
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className=" bg-linear-to-r from-[#FFF7ED] to-[#FFEDD480] rounded-2xl shadow-sm border border-[#FFD6A7] p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-b-[#FFD6A7] p-5">
                What we offer
              </h2>
              <div className="space-y-3">
                {jobData.benefits?.map((item: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full  flex items-center justify-center">
                        <CircleCheck className="text-[#FF6B35]" />
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Job Details */}
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6  ">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">
                Job details
              </h3>

              <div className="space-y-5">
                {/* Salary */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center ">
                    <Euro className="w-5 h-5 text-[#0A7CD8]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Salary</p>
                    <p className="font-semibold text-slate-800">
                      {jobData.salary}
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF5FF] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#9810FA]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Experience</p>
                    <p className="font-semibold text-slate-800">
                      {jobData.experience}
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#00A63E]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Education</p>
                    <p className="font-semibold text-slate-800">
                      {jobData.education}
                    </p>
                  </div>
                </div>

                {/* Job Type */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Job type</p>
                    <p className="font-semibold text-slate-800">
                      {formatEnum(jobData.employment_type)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FEF2F2] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FB2C36]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="font-semibold text-slate-800">
                      {jobData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

{
  /* <div className="space-y-4 text-slate-600 leading-relaxed">
                {jobData.about.description.map((paragraph: any, index: any) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div> */
}
// const jobData = {
//   title: "Senior Control Engineer",
//   location: "Rotterdam",
//   jobType: "Full-time",
//   salary: "€5,000 - €7,000 per month",
//   experience: "5+ years",
//   education: "Bachelor in Engineering",

//   about: {
//     description: [
//       "We are looking for an experienced Senior Control Engineer to join our dynamic team in Rotterdam. In this role, you will be responsible for designing, developing, and implementing control systems for industrial processes.",
//       "You will work on challenging projects in the energy sector, collaborating with multidisciplinary teams to deliver innovative solutions. This position offers excellent opportunities for professional growth and development.",
//     ],
//   },

//   responsibilities: [
//     "Design and develop control systems for industrial processes",
//     "Create technical specifications and documentation",
//     "Commission and test control systems on-site",
//     "Provide technical support to clients and project teams",
//     "Lead technical discussions with stakeholders",
//     "Perform system optimization and troubleshooting",
//     "Mentor junior engineers and share knowledge",
//   ],

//   requirements: [
//     "Bachelor's or Master's degree in Control Engineering, Electrical Engineering, or related field",
//     "Minimum 5 years of experience in control systems design",
//     "Strong knowledge of PLC programming (Siemens, Allen Bradley)",
//     "Experience with SCADA systems and HMI design",
//     "Knowledge of industry standards and safety regulations",
//     "Excellent problem-solving and analytical skills",
//     "Strong communication skills in English and Dutch",
//     "Ability to work independently and in team environments",
//   ],

//   benefits: [
//     "Competitive salary package (€5,000 - €7,000 per month)",
//     "Attractive benefits including pension plan and health insurance",
//     "Company car and laptop",
//     "Opportunities for professional development",
//   ],
// };
