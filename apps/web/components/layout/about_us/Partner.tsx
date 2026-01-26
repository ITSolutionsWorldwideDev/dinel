import Image from "next/image";
import { TbHeartHandshake } from "react-icons/tb";
import { IoEarOutline } from "react-icons/io5";

import { CircleCheckBig } from "lucide-react";

const features = [
  {
    title: "We listen before we connect",
    desc: "Understanding your goals and ambitions comes first",
    bg: "bg-[#FF6B35]",
    icon: <IoEarOutline className="white" />,
  },
  {
    title: "We only propose matches that truly fit",
    desc: "Quality over quantity in every connection we make",
    bg: "bg-[#FF6B35]",
    icon: <CircleCheckBig className="white" />,
  },
  {
    title: "We stay involved throughout the entire journey",
    desc: "From first conversation to project success and beyond",
    bg: "bg-[#FF6B35]",
    icon: <TbHeartHandshake className="white" />,
  },
];

export default function Partner() {
  return (
    <section className="container mx-auto relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="px-6 lg:px-16">
        <span className="inline-flex items-center gap-2 l  bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] px-4 py-1 text-sm font-medium rounded-full mb-6">
          <TbHeartHandshake className="text-[#FF6B35]" /> Our Approach
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          More than recruitment, <br />
          <span className="text-[#0A7CD8]">
            a strategic, people-driven partnership
          </span>
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-600 max-w-lg mb-10">
            What sets Dinel apart is our personal and transparent approach.
          </p>

          <div className="space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white  p-5 shadow-md hover:shadow-lg transition"
              >
                <div
                  className={`flex items-center justify-center h-12 w-12  text-white text-xl ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative  shadow-xl items-center ">
            <Image
              src="/assets/aboutus/bb777c27ba8abaa669767a1ee412e129d63387f5.jpg"
              alt="Handshake"
              width={700}
              height={500}
              className="object-cover  h-64 md:h-80 lg:h-96"
            />

            {/* 100% Badge */}
            <div className="absolute -top-10 -right-5 bg-linear-to-r from-[#FF6B35] to-[#E55A2B] text-white  px-6 py-4 text-center shadow-lg">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Personal Approach</p>
            </div>
          </div>

          {/* Years Badge */}
          <div className="absolute -bottom-8 -left-6 bg-white  shadow-lg px-6 py-4">
            <p className="text-3xl font-bold text-blue-600">25+</p>
            <p className="text-sm text-gray-500">Years of Partnership</p>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-16 mt-15 2xl:mt-0">
        <div className="  border border-blue-200 bg-blue-50 p-5 max-w-2xl bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] ">
          <p className="text-gray-700">
            <span className="font-semibold text-[#0A7CD8]">
              For us, success means:
            </span>{" "}
            professionals who enjoy their work and organizations that move
            forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
