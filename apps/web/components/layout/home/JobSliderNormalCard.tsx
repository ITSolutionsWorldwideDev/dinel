import React from "react";
import { ArrowUpRight } from "lucide-react";
const JobSliderNormalCard = ({ job }: any) => {
  // console.log(job);
  return (
    <>
      <div className="relative h-full flex flex-col">
        <div className="min-h-20">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2">
            {job.title}
          </h3>
        </div>

        {/* INFO SECTION */}
        <div className="space-y-4 mt-6 flex-1">
          <div className="min-h-12">
            <p className="text-orange-500 font-semibold text-sm mb-1">
              DISCIPLINE
            </p>
            <p className="text-gray-900 font-medium line-clamp-1">
              {job.discipline_name || job.discipline}
            </p>
          </div>

          <div className="mmin-h-12">
            <p className="text-orange-500 font-semibold text-sm mb-1">SECTOR</p>
            <p className="text-gray-900 font-medium line-clamp-1">
              {job.sector_name || job.sector}
            </p>
          </div>

          <div className="min-h-12">
            <p className="text-orange-500 font-semibold text-sm mb-1">
              LOCATION
            </p>
            <p className="text-gray-900 font-medium line-clamp-1">
              {job.location}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 group">
          <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </>
  );
};

export default JobSliderNormalCard;
