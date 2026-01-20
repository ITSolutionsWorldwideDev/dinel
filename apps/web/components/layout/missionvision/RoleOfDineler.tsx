import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { CircleCheckBig } from "lucide-react";

import React from "react";

const RoleOfDineler = () => {
  const points = [
    "Works on projects that contribute to a sustainable and innovative future",
    "Continuously develops through challenge, guidance and experience",
    "Makes an impact by combining expertise with commitment",
  ];
  return (
    <div>
      <HeadingAndDesc
        heading="The Role of the Dineler"
        desc="The Dineler in our future  "
      />
      <p className="flex items-centerm justify-center -mt-10">
        In our vision, Dinelers play a central role.
      </p>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Title */}
          <h3 className="text-lg font-medium mb-6">A Dineler:</h3>

          {/* List */}
          <ul className="space-y-4 mb-8">
            {points.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Check Icon */}
                <span className="text-blue-500 text-xl mt-0.5">
                  <CircleCheckBig />
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr className="my-6 text-gray-200" />

          {/* Bottom Text */}
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            Together, Dinelers form a community of professionals who help shape
            the world of tomorrow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RoleOfDineler;
