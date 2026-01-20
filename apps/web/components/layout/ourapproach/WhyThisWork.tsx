import Cards from "@/components/ui/Cards";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const WhyThisWork = () => {
  const sections = [
    {
      title: "Why This Works",
      subtitle: "Simple, but effective",
      heading: "Our approach works because it is:",
      bullets: [
        {
          icon: <CircleCheckBig />,
          title: "Personal instead of transactional",
        },
        {
          icon: <CircleCheckBig />,

          title: "Transparent instead of complex",
        },

        {
          icon: <CircleCheckBig />,

          title: "Focused on long-term value",
        },
      ],
      description: "This is how we build trust and lasting partnerships.",
      image: "/assets/ourapproach/d3fc6d2749cd153c5686cbfab30ef68f24ac8798.jpg",
    },
  ];
  return (
    <div>
      <Cards data={sections} />
    </div>
  );
};

export default WhyThisWork;
