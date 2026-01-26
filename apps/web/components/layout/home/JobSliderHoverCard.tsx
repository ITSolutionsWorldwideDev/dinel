import React from "react";
import { ArrowUpRight, Upload } from "lucide-react";
const JobSliderHoverCard = ({job}:any) => {
  const handleUploadCV = (jobTitle: any) => {
    alert(`Uploading CV for: ${jobTitle}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 ">
      <div>
        <p className="text-2xl font-bold text-white  ">{job.title}</p>
      </div>
      <div className="w-full border-2 border-white rounded-lg p-8 flex items-center justify-center">
        <Upload className="w-12 h-12 text-white" />
      </div>

      <button
        onClick={() => handleUploadCV(job.title)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
      >
        Upload Your CV
        <ArrowUpRight className="w-5 h-5" />
      </button>

      <div className="w-full border-2 border-white rounded-lg p-4">
        {/* Empty box for design symmetry */}
      </div>
    </div>
  );
};

export default JobSliderHoverCard;
