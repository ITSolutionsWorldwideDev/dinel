import React from "react";
import { Check } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import InLoop from "./InLoop";
import DinelGroupBv from "./DinelGroupBv";

interface IndustryDescProps {
  data: {
    desc1: string;
    desc2: string;
    experties: string[];
  };
}

const IndustryDesc = ({ data }: IndustryDescProps) => {
  // data.ts
 

  return (
    <>
      <section className="container mx-auto py-10 px-4 max-w-4xl">
        <p className="text-gray-700 leading-relaxed">{data.desc1}</p>

        <p className="text-gray-700 leading-relaxed mt-4">{data.desc2}</p>

        <h2 className="text-2xl font-semibold mt-10 mb-5">Expertises:</h2>

        <div className="flex flex-col gap-4 mt-10">
          {data.experties &&
            data.experties.map((item, indx) => (
              <div key={indx} className="flex gap-2 items-start">
                <div className="bg-[#FF6B35] rounded-full shrink-0 w-6 h-6  flex justify-center items-center ">
                  <CircleCheckBig className="text-white  " size={20} />
                </div>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center p-10">
            <h2 className="text-3xl font-semibold">Personal advice?</h2>
          </div>

          <div className="flex items-center justify-center ">
            <button className="ml-4 bg-[#FF6B35] hover:bg-orange-600 text-white px-8 py-3  font-medium transition-colors duration-200 cursor-pointer">
              <Link href={"/contact-us"}>Contact us</Link>
            </button>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <InLoop />
      </div>

      <DinelGroupBv />
    </>
  );
};

export default IndustryDesc;
