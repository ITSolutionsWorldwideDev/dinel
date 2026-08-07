import React from "react";
import TextWithBorderAndBg from "@/components/ui/TextWithBorderAndBg";
import Cards from "@/components/ui/Cards";
import { FiMessageSquare } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineRequestPage } from "react-icons/md";

const Environment = () => {
  const sections = [
    {
      title: "Our Way of Working",
      subtitle: "Careful, transparent and effective",
      heading: "Our process is simple and clear:",
      bullets: [
        {
          icon: <FiMessageSquare />,
          title: "We start with a conversation to understand your needs",
        },
        {
          icon: <CiSearch />,
          title: "We search specifically for the right professional or team",
        },
        {
          icon: <MdOutlineRequestPage />,
          title: "We remain involved throughout the assignment",
        },
      ],
      description: "This ensures continuity, quality and trust.",
      image: "/assets/client/07f49e93c26a58394c7f7d6c77415ee3f6a9b9cb.jpg",
    },
    {
      title: "Partnership Mindset",
      subtitle: "Building long-term relationships",
      bullets: [
        {
          //   icon: <FiMessageSquare />,
          title:
            "For us, success is not just filling a role; it's contributing to the success of your organization.",
        },
        {
          //   icon: <CiSearch />,
          title:
            "That's why many clients choose us as a long-term partner for their technical challenges.",
        },
      ],
      description:
        "From the first conversation to the start of your project and beyond — we stay involved and support you every step of the way.",
      image: "/assets/client/d14607b526b23f855e2aaf22afc5b34e267f761b.jpg",
    },
  ];
  return (
    <div>
      <TextWithBorderAndBg text="Our professionals are used to working in complex, high-impact environments." />
      <div>
        <Cards data={sections} />
      </div>
    </div>
  );
};

export default Environment;
