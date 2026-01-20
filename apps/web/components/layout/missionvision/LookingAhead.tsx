import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import React from "react";

const LookingAhead = () => {
  return (
    <div>
      <HeadingAndDesc
        heading="Looking Ahead"
        desc="Building the future together"
      />

      <div className="flex items-center justify-center text-center max-w-2xl mx-auto">
        <p>
          The challenges in technology, sustainability and innovation are
          growing. Dinel wants to be part of the solution by connecting the
          right people to the right projects and supporting growth on both
          sides.
        </p>
      </div>
    </div>
  );
};

export default LookingAhead;
