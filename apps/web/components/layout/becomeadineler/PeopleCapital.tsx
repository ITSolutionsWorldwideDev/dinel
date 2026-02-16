import React from "react";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import Heading from "@/components/ui/Heading";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import Link from "next/link";

const PeopleCapital = () => {
  return (
    <div className="bg-gray-100 p-10">
      <section className="bg-[#FF8026] py-20 px-4 container mx-auto mt-20 relative">
        <img
          src="/assets/becomeadineler/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58 (2).jpg"
          alt=""
          className="opacity-20 object-cover absolute inset-0 w-full h-full"
        />
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
        <Link href={"/sign-up"}>
          <button className=" flex items-center justify-center text-white cursor-pointer bg-[#FF6B35] hover:bg-blue-700 shadow-xl  px-6 py-3 font-medium transition">
            Join Dinel Now{" "}
            <span>
              <ArrowRight className="ml-2 text-white" />
            </span>
          </button>
        </Link>
        <Link href={'/vacancies'}>
        <button className="  hover:bg-blue-700 text-[#0A7CD8] border-2 cursor-pointer border-[#0A7CD8] px-6 py-3  font-medium transition">
          View Open Positions
        </button>
        </Link>
      </div>
    </div>
  );
};

export default PeopleCapital;
