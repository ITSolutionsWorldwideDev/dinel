import React from "react";
import { Trophy, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function WhySecondDinel() {
  const features = [
    {
      icon: "f22dd18c6123e1adae4c4c18df7293a6949bc7f9.png",
      title: "Challenging Jobs And Projects",
    },
    {
      icon: "15a1cf333283509698bfe51f633ae3e902ef3eb4.png",
      title: "Realizing Ambitions",
    },
    {
      icon: "f17f77e85323ff3dc5af484e0160d059e48c62cf.png",
      title: "Focus On Growth And Development",
    },
  ];

  return (
    <div className=" py-16 px-4">
      <div className="container mx-auto ">
        {/* bg-[url('/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png')] bg-no-repeat    bg-right bg-contain */}
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Why Second Via Dinel
        </h1>

        {/* Main Content */}
        <div className="bg-white rounded-3xl  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-75  overflow-visible">
            {/* Left Side - Image */}
            <div className=" rounded-2xl relative  ">
              <div className=" bg-[#CEE9FF] absolute inset-0 left-1/3 w-[60%]" />
              {/* <div className="  "> */}
              <img
                src="/assets/home/a8bde8006ea2da5002a7af3c2b0ee14c077f30e0.png"
                alt="Professional with laptop"
                className="absolute h-117 w-auto -top-15 -right-25"
              />
              {/* </div> */}
            </div>

            {/* Right Side - Features */}
            <div className="relative flex flex-col justify-center space-y-6 ">
              <Image
                src="/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png"
                alt="Professional with laptop"
                width={900}
                height={900}
                className="absolute w-full h-full opacity-10  -left-1/2"
              />
              {/* <div className=" absolute inset-0 opacity-10" /> */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-linear-to-r from-gray-50 to-white  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 relative"
                >
                  <div className="flex items-center justify-centertext-center gap-4">
                    <div className=" p-3 rounded-xl ">
                      <Image
                        src={`/assets/home/${feature.icon}`}
                        alt="icon"
                        width={100}
                        height={50}
                      />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 ml-10">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </div>
  );
}
