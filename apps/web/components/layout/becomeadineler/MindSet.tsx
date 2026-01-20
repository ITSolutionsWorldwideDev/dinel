import Heading from "@/components/ui/Heading";
import { Heart } from 'lucide-react';

import Image from "next/image";

const mindsetPoints = [
  "Chooses meaningful and future-oriented projects",
  "Takes responsibility for quality and impact",
  "Continuously develops skills and expertise",
  "Belongs to a trusted network of professionals",
];

const MindSet = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="w-full h-[70%] mx-auto">
          <Image
            src="/assets/becomeadineler/f328597d52c1b20828004fa699a6d2ff050bc375.jpg" // replace with your image path
            alt="Team meeting"
            width={600}
            height={450}    
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Badge */}
          <Heading icon={<Heart className="text-[#d34a03]"/>} text="The Dineler Mindset"/>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More than a role. A <br />  mindset.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8">
            A Dineler is a professional who:
          </p>

          {/* Points */}
          <div className="space-y-4 mb-10">
            {mindsetPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-500 text-blue-500 text-sm">
                  ✓
                </span>
                <p className="text-gray-700 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-blue-600 to-orange-400 text-white px-6 py-4 rounded-lg font-medium">
            Being a Dineler means working with purpose and pride.
          </div>
        </div>

      </div>
    </section>
  );
};

export default MindSet;
