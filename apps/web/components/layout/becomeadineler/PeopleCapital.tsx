import React from "react";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";

const PeopleCapital = () => {
  return (
    <div className="bg-gray-100 p-10">
      <section className="bg-[#FF8026] py-20 px-4 container mx-auto mt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
              <span className="text-2xl">
                <Heart />
              </span>
            </div>
          </div>

          {/* Quote */}
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            “People are the real capital. When professionals feel supported and
            valued, they create the greatest impact.”
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center mt-20">
        <Heading
          text="Take The Next Step"
          icon={<Sparkles className="text-[#FFDF20]" />}
        />
      </div>
      <div className="mt-10">
        <HeadingAndDesc
          heading="Ready to become a Dineler?"
          desc="Take the next step in your career and work on projects that challenge you, inspire you and allow you to grow."
        />
      </div>
      .
      <div className="flex items-center justify-center space-x-3">
        <button className=" flex items-center justify-center text-[#0A7CD8] hover:bg-blue-700 shadow-xl bg-white px-6 py-3 rounded-md font-medium transition">
          Join Dinel Now{" "}
          <span>
            <ArrowRight className="ml-2 text-[#0A7CD8]" />
          </span>
        </button>

        <button className="  hover:bg-blue-700 text-black border-2 border-black px-6 py-3 rounded-md font-medium transition">
          View Open Positions
        </button>
      </div>
    </div>
  );
};

export default PeopleCapital;
