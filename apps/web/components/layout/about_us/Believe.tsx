import { Heart, Handshake, TrendingUp } from "lucide-react";

const beliefs = [
  {
    title: "Right People",
    desc: "Technology only works when the right people are behind it",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    bg: "bg-pink-100",
  },
  {
    title: "Long-term Relationships",
    desc: "Sustainable results come from long-term relationships",
    icon: <Handshake className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-100",
  },
  {
    title: "Recognized Growth",
    desc: "Sustainable results come from long-term relationships",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    bg: "bg-green-100",
  },
];

export default function Believe() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-gray-100 text-gray-600">
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
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
