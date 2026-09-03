import { Link } from "@/i18n/navigation";
import { MapPin } from "lucide-react";

const jobCategories = [
  {
    category: "Supply Chain",
    jobs: [
      "Warehouse planner",
      "Logistiek Administratief Medwerker",
      "Warehouse Engineer",
      "Supply Chain Starter",
      "Master Data Specialist",
      "Procurement Specialist",
    ],
  },
  {
    category: "Engineering",
    jobs: [
      "Principal structural Engineer - Subsea / pipeline",
      "Structural Engineer - Pipeline Engineering",
      "Instrumentation Engineer",
      "Project Engineer",
      "Network Engineer",
      "ML Engineer",
      "Data Engineer",
      "HVAC Service Technician (Cooling Technology)",
      "HVAC Service Technician",
      "Heat Tracing Technician",
    ],
  },
  {
    category: "IT",
    jobs: [
      "IT Support Officer (1st & 2nd line support)",
      "Power BI Developer",
      "IT Speciaist",
      "Oracle ERP Consultant/ Specialist",
      "IT Manager",
      "AI Developer",
      "Web Developer / Full Stack Developer",
    ],
  },
];

export default function JobList() {
  const totalJobs = jobCategories.reduce((acc, group) => acc + group.jobs.length, 0);

  return (
    <section className="py-16 px-6 md:px-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight">
            Find Your Next <span className="text-[#0d2b33]">Great Role</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            {totalJobs} positions found
          </p>
        </div>

        {/* Categories and List */}
        <div className="space-y-12">
          {jobCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0d2b33]" />
                <h3 className="text-xl font-black text-[#0d2b33] tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {group.jobs.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0d2b33]/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    {/* Left Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Soft light badge background */}
                        <span className="px-3 py-1 rounded-full bg-[#0d2b33]/10 text-[#0d2b33] text-[11px] font-bold tracking-wide uppercase">
                          Full-Time
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold tracking-wide uppercase">
                          Active
                        </span>
                      </div>
                      
                      <h4 className="font-extrabold text-[#0d2b33] text-lg sm:text-xl">
                        {job}
                      </h4>

                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#0d2b33]" />
                        <span>On-site</span>
                      </div>
                    </div>

                    {/* Right Button */}
                    <div className="w-full sm:w-auto flex items-center justify-end">
                      <Link
                        href="/contact-us"
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition-colors text-center shadow-sm"
                      >
                        Apply now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}