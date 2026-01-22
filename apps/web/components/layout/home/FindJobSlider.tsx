import { ArrowUpRight } from "lucide-react";

const JobVacanciesSlider = () => {
  const jobs = [
    {
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      title: "Installatieverantwoordelijke Hoog- en Laagspanning",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
      featured: true,
    },
    {
      title: "Supervisor E/I - Zeeland",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      title: "Supervisor E/I - Zeeland",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      title: "Supervisor E/I - Zeeland",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      title: "Supervisor E/I - Zeeland",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
  ];

  // Auto slide

  return (
    <div className="bg-gray-50 py-16 px-4 mt-30">
      <div className="container mx-auto overflow-hidden">
        {/* Header */}

        <div>
          <p className="text-[#FF8026] font-semibold text-sm mb-2">VACANCIES</p>
        </div>
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Find Your Job</h1>
          <button className="text-[#FF8026] font-semibold underline decoration-black ">
            VIEW ALL VACANCIES
          </button>
        </div>

        {/* Slider */}
        <div className="grid grid-cols-1 md:flex  gap-6 overflow-hidden">
          {jobs.map((job: any, index) => (
            <div
              key={index}
              className={`${
                job.featured
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-900"
              } rounded-lg p-8 shadow-md   animate-slide  shrink-0 w-1/4 overflow-hidden`}
            >
              <h3 className="text-2xl font-bold mb-8 min-height: [80px] wrap-break-word">
                {job.title}
              </h3>

              <div className="space-y-4 mb-8">
                {["discipline", "sector", "location"].map((key) => (
                  <div key={key}>
                    <p
                      className={`text-xs font-semibold mb-1 ${
                        job.featured ? "text-orange-100" : "text-orange-500"
                      }`}
                    >
                      {key.toUpperCase()}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        job.featured ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {(job as any)[key]}
                    </p>
                  </div>
                ))}
              </div>

              {job.featured ? (
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded flex justify-center gap-2">
                  Upload Your CV
                  <ArrowUpRight />
                </button>
              ) : (
                <button className="ml-auto flex w-12 h-12 items-center justify-center border-2 rounded-full hover:bg-gray-900 hover:text-white transition">
                  <ArrowUpRight />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobVacanciesSlider;
