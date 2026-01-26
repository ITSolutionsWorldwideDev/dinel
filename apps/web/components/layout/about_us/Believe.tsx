import { Heart, Handshake, TrendingUp } from "lucide-react";

const beliefs = [
  {
    title: "Right People",
    desc: "Technology only works when the right people are behind it",
    icon: <Heart className="w-6 h-6 text-white " />,
    bg: "bg-[#FF6B35]",
  },
  {
    title: "Long-term Relationships",
    desc: "Sustainable results come from long-term relationships",
    icon: <Handshake className="w-6 h-6 text-white" />,
    bg: "bg-[#FF6B35]",
  },
  {
    title: "Recognized Growth",
    desc: "Sustainable results come from long-term relationships",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    bg: "bg-[#FF6B35]",
  },
];

export default function Believe() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="container mx-auto  text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full  bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] text-gray-600">
          What We Believe In
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          People are the real capital
        </h2>

        <p className="mt-2 text-gray-500">At DineI, we believe:</p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((item, index) => (
            <div
              key={index}
              className="bg-white  p-6 shadow-sm hover:shadow-md transition text-start"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center  ${item.bg}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
