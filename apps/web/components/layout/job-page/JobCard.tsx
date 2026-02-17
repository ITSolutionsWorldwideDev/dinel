// "use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import UploadResumaCard from "./UploadResumaCard";
import Link from "next/link";

export default function JobCard({ jobData }: any) {
  const midPoint = Math.ceil(jobData.length / 2);
  const firstHalf = jobData.slice(0, midPoint);
  const secondHalf = jobData.slice(midPoint);
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="flex flex-col  gap-5 ">
      {firstHalf.map((job: any, ind: number) => (
        <div className=" w-full  shadow-sm overflow-hidden" key={ind}>
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
                <Link href={`${pathname}/${job.id}`}>
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
      ))}

      <UploadResumaCard />
      {secondHalf.map((job: any, ind: number) => (
        <div className=" w-full shadow-sm overflow-hidden" key={ind}>
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
                <Link href={`${pathname}/${job.id}`}>
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
      ))}
    </div>
  );
}
