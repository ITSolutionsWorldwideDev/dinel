import React from "react";
import { ArrowUpRight } from "lucide-react";
const JobSliderNormalCard = ({ job }: any) => {
  console.log(job);
  return (
    <div>
      {" "}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
          {job.title}
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-orange-500 font-semibold text-sm mb-1">
              DISCIPLINE
            </p>
            <p className="text-gray-900 font-medium">{job.discipline}</p>
          </div>

          <div>
            <p className="text-orange-500 font-semibold text-sm mb-1">SECTOR</p>
            <p className="text-gray-900 font-medium">{job.sector}</p>
          </div>

          <div>
            <p className="text-orange-500 font-semibold text-sm mb-1">
              LOCATIE
            </p>
            <p className="text-gray-900 font-medium">{job.location}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
          <ArrowUpRight className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};

export default JobSliderNormalCard;
