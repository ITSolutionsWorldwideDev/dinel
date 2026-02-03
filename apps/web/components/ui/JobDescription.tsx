import React from 'react';
import { Briefcase, MapPin, GraduationCap, Clock, Euro } from 'lucide-react';

const JobDescription = () => {
  const jobData = {
    title: "Senior Control Engineer",
    location: "Rotterdam",
    jobType: "Full-time",
    salary: "€5,000 - €7,000 per month",
    experience: "5+ years",
    education: "Bachelor in Engineering",
    
    about: {
      description: [
        "We are looking for an experienced Senior Control Engineer to join our dynamic team in Rotterdam. In this role, you will be responsible for designing, developing, and implementing control systems for industrial processes.",
        "You will work on challenging projects in the energy sector, collaborating with multidisciplinary teams to deliver innovative solutions. This position offers excellent opportunities for professional growth and development."
      ]
    },
    
    responsibilities: [
      "Design and develop control systems for industrial processes",
      "Create technical specifications and documentation",
      "Commission and test control systems on-site",
      "Provide technical support to clients and project teams",
      "Lead technical discussions with stakeholders",
      "Perform system optimization and troubleshooting",
      "Mentor junior engineers and share knowledge"
    ],
    
    requirements: [
      "Bachelor's or Master's degree in Control Engineering, Electrical Engineering, or related field",
      "Minimum 5 years of experience in control systems design",
      "Strong knowledge of PLC programming (Siemens, Allen Bradley)",
      "Experience with SCADA systems and HMI design",
      "Knowledge of industry standards and safety regulations",
      "Excellent problem-solving and analytical skills",
      "Strong communication skills in English and Dutch",
      "Ability to work independently and in team environments"
    ],
    
    benefits: [
      "Competitive salary package (€5,000 - €7,000 per month)",
      "Attractive benefits including pension plan and health insurance",
      "Company car and laptop",
      "Opportunities for professional development"
    ]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About this role</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {jobData.about.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Key responsibilities</h2>
              <div className="space-y-3">
                {jobData.responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">What we're looking for</h2>
              <div className="space-y-3">
                {jobData.requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">What we offer</h2>
              <div className="space-y-3">
                {jobData.benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-amber-600 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                      </div>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Job Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Job details</h3>
              
              <div className="space-y-5">
                {/* Salary */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Euro className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Salary</p>
                    <p className="font-semibold text-slate-800">{jobData.salary}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Experience</p>
                    <p className="font-semibold text-slate-800">{jobData.experience}</p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Education</p>
                    <p className="font-semibold text-slate-800">{jobData.education}</p>
                  </div>
                </div>

                {/* Job Type */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Job type</p>
                    <p className="font-semibold text-slate-800">{jobData.jobType}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="font-semibold text-slate-800">{jobData.location}</p>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/30">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;