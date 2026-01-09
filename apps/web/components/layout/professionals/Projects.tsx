import React from "react";
import { Zap, Building2, Factory, Leaf } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Energy and energy transition",
    description:
      "Lead the transition to renewable energy with solar, wind, and sustainable power solutions",
    icon: "zap",
    image: "9ade3046653c3a8ad63668d5e9647af25a20ecd4.jpg",
    iconBg: "bg-orange-500",
  },
  {
    id: 2,
    title: "Infrastructure and mobility",
    description:
      "Build the infrastructure of tomorrow with bridges, roads, and smart transportation systems",
    icon: "building",
    image: "d5c637c6e02ee9e5c67d246227bcb6a689986be7.jpg",
    iconBg: "bg-cyan-500",
  },
  {
    id: 3,
    title: "Industry and industrial automation",
    description:
      "Transform manufacturing with cutting-edge automation and intelligent control systems",
    icon: "factory",
    image: "8740528e1dfc1b37695bdf9420b34c03825c16e9.jpg",
    iconBg: "bg-slate-200",
  },
  {
    id: 4,
    title: "Sustainable and innovative technology",
    description:
      "Innovate with green technologies and sustainable solutions for a better future",
    icon: "leaf",
    image: "fba342536d7cc6cb6bed38f67444fb0c273fff61.jpg",
    iconBg: "bg-emerald-500",
  },
];

const Projectss = ({ icon, className }) => {
  switch (icon) {
    case "zap":
      return <Zap className={className} />;
    case "building":
      return <Building2 className={className} />;
    case "factory":
      return <Factory className={className} />;
    case "leaf":
      return <Leaf className={className} />;
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects that make an impact
          </h1>
          <p className="text-lg text-gray-600">
            Dinel connects professionals to projects in:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{
                background: project.image
                  ? `url(/assets/professionals/${project.image}) center/cover no-repeat`
                  : "none",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

              {/* Icon Badge */}
              <div
                className={`absolute top-6 right-6 ${project.iconBg} rounded-full p-3 shadow-lg`}
              >
                {/* <IconComponent icon={project.icon} className="w-6 h-6 text-white" /> */}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-linear-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-md">
            <p className="text-gray-700 text-lg">
              These are projects where your work matters today and in the
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
