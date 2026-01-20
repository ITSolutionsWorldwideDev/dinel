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
        <FiMessageSquare className="text-white bg-[#0A7CD8] w-20 h-20 p-5 rounded-xl" />
      ),
      stepclass: "text-[#0A7CD8]",
      step: "Step1",
      title: "Understanding",
      subtitle: "We start with listening",
      heading:
        "For professionals and clients alike, everything begins with a conversation.",
      bullets: [
        {
          icon: <CircleCheckBig />,
          heading: "For professionals :",
          title: "We start with a conversation to understand your needs",
        },
        {
          icon: <CircleCheckBig />,
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
        <Users className="text-white bg-[#FF6B35] w-20 h-20 p-5 rounded-xl" />
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
      image: "/assets/ourapproach/7e9e8583e0d4a0539810ed1e4d4bd7b8dc7d62ec.jpg",
    },

    {
      icon: (
        <Headphones className="text-white bg-[#0A7CD8] w-20 h-20 p-5 rounded-xl" />
      ),
      stepclass: "text-[#0A7CD8]",
      step: "Step3",
      title: "Guiding",
      subtitle: "Support throughout the entire journey",
      heading: "Our involvement doesn't stop after the right solution is made.",
      bullets: [
        {
          icon: <CircleCheckBig />,

          title:
            "We guide professionals before and during the start of a project",
        },
        {
          icon: <CircleCheckBig />,

          title: "We stay in contact with clients to ensure continuity",
        },

        {
          icon: <CircleCheckBig />,

          title: "We act quickly if adjustments are needed",
        },
      ],
      description:
        "This ongoing guidance ensures trust, clarity and long-term success.",
      image: "/assets/ourapproach/71627d4b41bbc70c03ee38f342ccd954b4de2aca.jpg",
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
