// app/components/WhyDinel.tsx
import { IoBulbOutline } from "react-icons/io5";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import IconWithTextCard from "@/components/ui/IconWithTextCard";
import { features } from "process";

import { UsersRound, Rocket, Handshake, TrendingUp } from "lucide-react";
export default function WhyDinel() {
  const features = [
    {
      icon: <UsersRound className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]",
      title: "Cultural Fit",
      desc: "Professionals who align with your company values and team dynamics",
    },
    {
      icon: <Rocket className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#AD46FF] to-[#9810FA]",
      title: "Quick Delivery",
      desc: "Fast deployment without compromising on quality or compatibility",
    },
    {
      icon: <Handshake className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#FF6900] to-[#FB2C36]",
      title: "Transparency",
      desc: "Clear communication and realistic expectations at every step",
    },
    {
      icon: <TrendingUp className="text-white" />,
      iconBg: "bg-gradient-to-br from-[#00C950] to-[#00BBA7]",
      title: "Long-term Focus",
      desc: "Building sustainable partnerships, not just filling positions",
    },
  ];
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4  text-center ">
        {/* Tag */}
        <Heading
          icon={<IoBulbOutline className="text-[#FF6B35]" />}
          text="Why Choose Dinel"
        />

        {/* Title */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl md:w-3xl font-bold text-gray-900 leading-tight mb-4 ">
            A partner who understands{" "}
            <span className="text-[#0A7CD8]">technology</span> and{" "}
            <span className="text-[#FF6B35]">people</span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          At Dinel, we look beyond CVs and availability. We focus on long-term
          value for your projects and your organization.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-md group">
            <Image
              src="/assets/client/32a9eb855ff90ee2610eb62ef911c236d533e313.jpg"
              alt="Technology Experts"
              width={800}
              height={600}
              className="object-cover w-full h-80"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0A7CD8] to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 text-left">
              <div className="w-10 h-1 bg-[#FF6B35] mb-3"></div>
              <h3 className="text-white text-2xl font-semibold mb-1">
                Technology Experts
              </h3>
              <p className="text-gray-200 text-sm max-w-xs">
                We understand the technical challenges because we come from
                engineering ourselves.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-md group">
            <Image
              src="/assets/client/692c3bba8fe6079fc09c7787c7a18c8bfea4d6b7 (2).jpg"
              alt="People First"
              width={800}
              height={600}
              className="object-cover w-full h-80"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#FF6B35] to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 text-left">
              <div className="w-10 h-1 bg-[#0A7CD8] mb-3"></div>
              <h3 className="text-white text-2xl font-semibold mb-1">
                People First
              </h3>
              <p className="text-gray-200 text-sm max-w-xs">
                We match personalities and culture, not just skills on paper.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 container mx-auto mt-10">
        {features.map((item, index) => (
          <IconWithTextCard item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}
