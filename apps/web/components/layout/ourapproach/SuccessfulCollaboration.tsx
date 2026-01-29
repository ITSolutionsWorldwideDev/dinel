import Cards from "@/components/ui/Cards";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { CircleCheckBig } from "lucide-react";
import { FiMessageSquare } from "react-icons/fi";
import { Headphones } from "lucide-react";

import { Users } from "lucide-react";

import React from "react";

const SuccessfulCollaboration = () => {
  const sections = [
    {
      icon: (
        <FiMessageSquare className="text-white bg-[#FF6B35] w-20 h-20 p-5 " />
      ),
      stepclass: "text-[#FF6B35]",
      step: "Step1",
      title: "Understanding",
      subtitle: "We start with listening",
      heading:
        "For professionals and clients alike, everything begins with a conversation.",
      bullets: [
        {
          icon: <CircleCheckBig className="text-[#FF6B35]"/>,
          heading: "For professionals :",
          title: "We start with a conversation to understand your needs",
        },
        {
          icon: <CircleCheckBig className="text-[#FF6B35]"/>,
          heading: "For clients :",
          title: "We search specifically for the right professional or team",
        },
      ],
      description:
        "We take the time to truly understand because a good match starts with insight.",
      image: "/assets/ourapproach/fac73dc7d52070c303f7127e125eb05ff757b455.jpg",
    },
    {
      icon: (
        <Users className="text-white bg-[#FF6B35] w-20 h-20 p-5 " />
      ),
      stepclass: "text-[#FF6B35]",
      step: "Step2",
      title: "Connecting",
      subtitle: "Arriving at the right solution",
      heading:
        "Based on our insight and experience, we work towards the right solution.",
      bullets: [
        {
          icon: <CircleCheckBig className="text-[#FF6B35]" />,

          title: "No mass proposals",
        },
        {
          icon: <CircleCheckBig className="text-[#FF6B35]" />,

          title: "No unnecessary introductions",
        },

        {
          icon: <CircleCheckBig className="text-[#FF6B35]" />,

          title:
            "Only carefully considered opportunities or professionals aligned with the solution",
        },
      ],
      description: "Quality always comes before speed.",
      image: "/assets/ourapproach/ad71dc1e721aeb240a2439242a679baf0042246c.jpg",
    },

    {
      icon: (
        <Headphones className="text-white bg-[#FF6B35] w-20 h-20 p-5 " />
      ),
      stepclass: "text-[#FF6B35]",
      step: "Step3",
      title: "Guiding",
      subtitle: "Support throughout the entire journey",
      heading: "Our involvement doesn't stop after the right solution is made.",
      bullets: [
        {
          icon: <CircleCheckBig className="text-[#FF6B35]" />,

          title:
            "We guide professionals before and during the start of a project",
        },
        {
          icon: <CircleCheckBig className="text-[#FF6B35]"/>,

          title: "We stay in contact with clients to ensure continuity",
        },

        {
          icon: <CircleCheckBig className="text-[#FF6B35]"/>,

          title: "We act quickly if adjustments are needed",
        },
      ],
      description:
        "This ongoing guidance ensures trust, clarity and long-term success.",
      image: "/assets/ourapproach/5e37ed03a76627540c51df349ee4b7e7fc7bbc0f.jpg",
    },
  ];
  return (
    <div>
      <div className="mt-15">
        <HeadingAndDesc
          heading="From first conversation to successful collaboration"
          desc="Our three-step process ensures the perfect match every time"
        />
      </div>
      <Cards data={sections} />
    </div>
  );
};

export default SuccessfulCollaboration;
