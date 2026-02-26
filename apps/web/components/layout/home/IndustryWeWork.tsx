import { ArrowRight } from "lucide-react";
import Link from "next/link";
const industries = [
  {
    id: 1,
    name: "Infrastructure",
    icon: "/assets/home/Group (5).png",
    href: "vacancies/infastructure",
    // href: "infastructure-vacancies",
  },
  {
    id: 2,
    name: "Energy",
    icon: "/assets/home/Group (6).png",
    href: "vacancies/energy",
  },
  {
    id: 3,
    name: "Oil & Gas",
    icon: "/assets/home/Group (7).png",
    href: "vacancies/oil-gas",
    // href: "vacancies/oil-gasandindustry-vacancies",
  },
];

export default function IndustryWeWork() {
  return (
    <section className=" bg-gray-50 ">
      <div className="container mx-auto py-20 px-10">
        <h2 className="text-center text-3xl md:text-4xl lg:text-8xl font-semibold text-gray-600 mb-10 p-10">
          The Industries we work in
        </h2>

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((item) => (
            <div
              key={item.id}
              className="bg-[#FF8026]  flex flex-col items-center justify-between p-6 h-56"
            >
              {/* icon */}
              <img src={item.icon} alt={item.name} className="w-25 h-25 " />

              {/* button style */}

              <Link href={`/${item.href}`} className="w-full pointer">
                <div className="w-full bg-white  mt-6 py-3 text-gray-700 flex items-center justify-between px-3 text-sm">
                  <span>{item.name}</span>
                  <span>
                    <ArrowRight className="text-gray-500" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
