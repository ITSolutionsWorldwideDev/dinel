import React from "react";

const UploadResumaCard = () => {
  return (
    <div
      className="w-full  p-10 flex items-center justify-between bg-orange-500"
      style={{
        backgroundImage:
          "url('/ac558c59fa76f4ddec80658fcef8766dc73597c2 (1).jpg')", // your lining image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left text */}
      <h2 className="text-white text-3xl font-semibold leading-snug max-w-md">
        Drop your resume in two
        <br />
        clicks
      </h2>

      {/* Button */}
      <button className="cursor-pointer bg-[#0A7CD8] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-blue-700 transition">
        UPLOAD YOUR RESUME
      </button>
    </div>
  );
};

export default UploadResumaCard;
