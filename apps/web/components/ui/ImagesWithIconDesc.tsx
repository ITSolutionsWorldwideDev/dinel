import React from "react";
interface item {
  id: number;
  title: string;
  description?: string;
  icon: React.ReactNode;
  image: string;
  iconBg: string;
}

interface prop{
    data:item[];
    classnameforNoOfImages:string
}
const ImagesWithIconDesc = ({ data,classnameforNoOfImages }: prop) => {
  return (
    <div className={`${classnameforNoOfImages} mb-8 container mx-auto`}>
      {data.map((project) => (
        <div
          key={project.id}
          className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          style={{
            background: project.image
              ? `url(/assets/${project.image}) center/cover no-repeat`
              : "none",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

          {/* Icon Badge */}
          <div
            className={`absolute top-6 right-6 ${project.iconBg} rounded-md p-3 shadow-lg`}
          >
            {project.icon}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            {project.description && (
              <p className="text-gray-100 text-sm leading-relaxed">
                {project.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesWithIconDesc;
