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
    <div className="container mx-auto mb-10 relative p-40 overflow-hidden">
      <h1 className=" text-5xl font-bold text-center text-gray-900 mb-16 ">
        Why Second Via Dinel
      </h1>

      <div className="flex justify-between">
        <img
          src="/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png"
          className="absolute opacity-20 -right-10 top-20 "
        />

        {/* <div className=""> */}
        <div className=" relative  w-auto ">
          <div className="w-80 h-90  absolute left-45 bottom-0 bg-[#CEE9FF]" />
          <img
            src="/assets/home/a8bde8006ea2da5002a7af3c2b0ee14c077f30e0.png"
            alt="loading"
            className="h-120  object-cover relative "
          />
        </div>
        {/* </div> */}

        <div className="flex flex-col justify-center  space-y-6 relative">
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
  );
}
