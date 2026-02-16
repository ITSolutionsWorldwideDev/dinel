// apps/web/components/ui/JobCard.tsx

import Link from "next/link";
import Image from "next/image";
import { MapPin, Briefcase, Clock } from "lucide-react";
import UploadResumaCard from "../layout/job-page/UploadResumaCard";
import { MoveUpRight } from "lucide-react";
// import { usePathname } from "next/navigation";

interface Props {
  job: any;
}

export default function JobCard({ job }: Props) {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <>

      <div className=" w-full shadow-sm overflow-hidden">{/*  key={ind} */}
          <div className="flex  gap-6">
            {/* Left Image */}
            <div className="relative w-40 h-auto">
              <Image
                src={job.image}
                alt="Job Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="md:col-span-2 p-6 flex flex-col justify-center">
              {/* Title */}
              <div className="flex items-start justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {job.title}
                </h1>
                <Link href={`/${job.id}`}>
                  <button className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                    <MoveUpRight className="text-black" />
                  </button>
                </Link>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* Info Grid */}
              <div className="flex  gap-6 text-sm">
                <div>
                  <p className="text-[#FF6B35] uppercase ">Discipline</p>
                  <p className="mt-1 text-gray-800">{job.discipline}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Sector
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Location
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Vacancy ID
                  </p>
                  <p className="mt-1 text-gray-800">{job.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
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
    </div> */}
    
    </>
  );
}
/* 

        
      {firstHalf.map((job: any, ind: number) => (
        <div className=" w-full  shadow-sm overflow-hidden" key={ind}>
          <div className="flex  gap-6">
  
            <div className="relative w-40 h-auto">
              <Image
                src={job.image}
                alt="Job Image"
                fill
                className="object-cover"
              />
            </div>


            <div className="md:col-span-2 p-6 flex flex-col justify-center">

              <div className="flex items-start justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {job.title}
                </h1>
                <Link href={`${pathname}/${job.id}`}>
                  <button className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                    <MoveUpRight className="text-black" />
                  </button>
                </Link>
              </div>

              <hr className="my-6 border-gray-200" />


              <div className="flex  gap-6 text-sm">
                <div>
                  <p className="text-[#FF6B35] uppercase ">Discipline</p>
                  <p className="mt-1 text-gray-800">{job.discipline}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Sector
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Location
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Vacancy ID
                  </p>
                  <p className="mt-1 text-gray-800">{job.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <UploadResumaCard />
      {secondHalf.map((job: any, ind: number) => (
        <div className=" w-full shadow-sm overflow-hidden" key={ind}>
          <div className="flex  gap-6">

            <div className="relative w-40 h-auto">
              <Image
                src={job.image}
                alt="Job Image"
                fill
                className="object-cover"
              />
            </div>

 
            <div className="md:col-span-2 p-6 flex flex-col justify-center">
    
              <div className="flex items-start justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {job.title}
                </h1>
                <Link href={`${pathname}/${job.id}`}>
                  <button className="cursor-pointer w-10 h-10 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                    <MoveUpRight className="text-black" />
                  </button>
                </Link>
              </div>

              <hr className="my-6 border-gray-200" />

    
              <div className="flex  gap-6 text-sm">
                <div>
                  <p className="text-[#FF6B35] uppercase ">Discipline</p>
                  <p className="mt-1 text-gray-800">{job.discipline}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Sector
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Location
                  </p>
                  <p className="mt-1 text-gray-800">{job.sector}</p>
                </div>

                <div>
                  <p className="text-[#FF6B35] uppercase tracking-wide">
                    Vacancy ID
                  </p>
                  <p className="mt-1 text-gray-800">{job.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
*/