import OilGasJobDetail from "@/components/layout/OilGasJobDetail";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import JobApplicationForm from "@/components/ui/JobApplicationForm";
import JobDescHeader from "@/components/ui/JobDescHeader";
import JobDescription from "@/components/ui/JobDescription";
import React from "react";

const page = () => {
  return (
    <>
     <OilGasJobDetail/>
     <JobApplicationForm/>
     <DinelGroupBv/>
    </>
  );
};

export default page;
