import IconCardCenterAlign from "@/components/ui/IconCardCenterAlign";
import { Users, Target, MessageCircle, TrendingUp } from "lucide-react";

import React from "react";

const ApplyWithDinel = () => {
  const values = [
    {
      letter: <Users />,

      desc: "Personal guidance from technical experts",
      bg: "bg-[#FF6B35]",
    },
    {
      letter: <Target />,

      desc: "Projects with impact and growth potential",
      bg: "bg-[#FF6B35]",
    },
    {
      letter: <MessageCircle />,

      desc: "Transparent communication throughout the process",
      bg: "bg-[#FF6B35]",
    },
    {
      letter: <TrendingUp />,

      desc: "Support from application to project completion",
      bg: "bg-[#FF6B35]",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      {/* <div className="flex items-start "> */}
      <h2 className="text-3xl font-bold p-5  mb-4">Why apply with Dinel?</h2>

      {/* </div> */}
      <IconCardCenterAlign values={values} />
    </div>
  );
};

export default ApplyWithDinel;
