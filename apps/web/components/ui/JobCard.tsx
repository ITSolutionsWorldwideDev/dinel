// apps/web/components/ui/JobCard.tsx

import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

interface Props {
  job: any;
  sectors: any;
}

const sectorImageMap: Record<string, string> = {
  "fc88ef2f-be0f-41f8-b436-1ef731e2b545":
    "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
  "235ceead-5726-40b4-b867-38f56b6956b9":
    "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
  "9f065f97-413e-4a4f-b6bc-79e2370fcac7":
    "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
};

export default function JobCard({ job, sectors }: Props) {
  const imageSrc = sectorImageMap[job.sector_id] || "/images/default.jpg";

  return (
    <>
      <div className=" w-full shadow-sm overflow-hidden">
        {/*  key={ind} */}
        <div className="flex  gap-6">
          {/* Left Image */}
          <div className="relative w-40 h-auto shrink-0">
            <Image
              src={imageSrc}
              alt={job.title}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 p-6 flex flex-col justify-center w-full">
            {/* Title */}
            <div className="flex items-start justify-between">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {job.title}
              </h1>
              <Link
                href={`/vacancies/all/${job.job_id}`}
                className="flex items-end justify-end"
              >
                <button className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                  <MoveUpRight className="text-black" />
                </button>
              </Link>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Info Grid */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="w-1/5 min-w-30">
                <p className="text-[#FF6B35] uppercase">Discipline</p>
                <p className="mt-1 text-gray-800">{job.discipline_name}</p>
              </div>

              <div className="w-1/5 min-w-3">
                <p className="text-[#FF6B35] uppercase tracking-wide">Sector</p>
                <p className="mt-1 text-gray-800">{job.sector_name}</p>
              </div>

              <div className="w-1/5 min-w-3">
                <p className="text-[#FF6B35] uppercase tracking-wide">
                  Post Code
                </p>
                <p className="mt-1 text-gray-800">{job.work_postal_code}</p>
              </div>

              <div className="w-1/5 min-w-3">
                <p className="text-[#FF6B35] uppercase tracking-wide">
                  Location
                </p>
                <p className="mt-1 text-gray-800">{job.location}</p>
              </div>

              <div className="w-1/5 min-w-3">
                <p className="text-[#FF6B35] uppercase tracking-wide">
                  Vacancy ID
                </p>
                <p className="mt-1 text-gray-800">{job.vacancy_no}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* const sectorImageMap: Record<string, string> = {
  "fc88ef2f-be0f-41f8-b436-1ef731e2b545": "/images/infrastructure.jpg",
  "235ceead-5726-40b4-b867-38f56b6956b9": "/images/energy.jpg",
  "9f065f97-413e-4a4f-b6bc-79e2370fcac7": "/images/oil-gas.jpg",
}; 

  // const pathname = usePathname();
  // console.log("job === ", job);
  // console.log("sectors === ", sectors);
  

<Image
                src={job.image}
                alt="Job Image"
                fill
                className="object-cover"
              /> 
*/
{
  /* 
      
      
// import { usePathname } from "next/navigation";
import { MapPin, Briefcase, Clock } from "lucide-react";
import UploadResumeCard from "../layout/job-page/UploadResumeCard";
      
      <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={14} />
          {job.employment_type}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {job.experience_level}
        </span>
      </div>
      <Link
        href={`/vacancies/${job.sector_slug}/${job.job_id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div> */
}
