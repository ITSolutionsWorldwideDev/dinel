import { ArrowRight } from "lucide-react";

const industries = [
  { id: 1, name: "Infrastructure", icon: "/assets/home/Group (5).png" },
  { id: 2, name: "Energy", icon: "/assets/home/Group (6).png" },
  { id: 3, name: "Oil & Gas", icon: "/assets/home/Group (7).png" },
  {
    id: 4,
    name: "Water Industry",
    icon: "/assets/home/material-symbols-light_water-pump-outline.png",
  },
];

export default function IndustryWeWork() {
  return (
    <section className=" bg-gray-50 ">
      <div className="container mx-auto py-20 px-10">
        <h2 className="text-center text-3xl md:text-4xl lg:text-8xl font-semibold text-gray-600 mb-10 p-10">
          The Industries we work in
        </h2>

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {industries.map((item) => (
            <div
              key={item.id}
              className="bg-[#FF8026]  flex flex-col items-center justify-between p-6 h-56"
            >
              {/* icon */}
              <img src={item.icon} alt={item.name} className="w-25 h-25 " />

              {/* button style */}
              <button className="w-full bg-white  mt-6 py-3 text-gray-700 flex items-center justify-between px-3 text-sm">
                {item.name}
                <span>
                  <ArrowRight className="text-gray-500" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
