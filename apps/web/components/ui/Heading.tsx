import React from "react";
// import { IoBulbOutline } from "react-icons/io5";
interface Feature{
    icon:React.ReactNode;
    text:string
}
const Heading = ({icon,text}:Feature) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-gray-700 bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] rounded-full">
      {icon} {text}
    </div>
  );
};

export default Heading;
