import React from "react";

interface item {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc?: string;
}

interface IconWithTextCardProps {
  item: item;
  index: number
}

const IconWithTextCard = ({ item,index }: IconWithTextCardProps ) => {
  return (
    <div
      key={index}
      className="bg-white rounded-xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.25)] hover:shadow-md transition text-start"
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.iconBg}`}
      >
        {item.icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>

     {item.desc && (<p className="mt-2 text-sm text-gray-500">{item.desc}</p>)} 
    </div>
  );
};

export default IconWithTextCard;
