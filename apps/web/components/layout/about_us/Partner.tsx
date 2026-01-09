import Image from "next/image";

const features = [
  {
    title: "We listen before we connect",
    desc: "Understanding your goals and ambitions comes first",
    bg: "bg-blue-600",
    icon: "👂",
  },
  {
    title: "We only propose matches that truly fit",
    desc: "Quality over quantity in every connection we make",
    bg: "bg-purple-600",
    icon: "✔️",
  },
  {
    title: "We stay involved throughout the entire journey",
    desc: "From first conversation to project success and beyond",
    bg: "bg-orange-600",
    icon: "❤️",
  },
];

export default function Partner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 mb-6">
            ❤️ Our Approach
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            A partner, <br />
            <span className="text-blue-600">not just an agency</span>
          </h2>

          <p className="text-gray-600 max-w-lg mb-10">
            What sets Dinel apart is our personal and transparent approach.
          </p>

          <div className="space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-lg text-white text-xl ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-5 max-w-xl">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">
                For us, success means:
              </span>{" "}
              professionals who enjoy their work and organizations that move
              forward with confidence.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/aboutus/80100ee2f306d4fc41c6eceb13582f76ab7b1ad8.jpg"
              alt="Handshake"
              width={700}
              height={500}
              className="object-cover"
            />

            {/* 100% Badge */}
            <div className="absolute top-6 right-6 bg-orange-500 text-white rounded-xl px-6 py-4 text-center shadow-lg">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Personal Approach</p>
            </div>
          </div>

          {/* Years Badge */}
          <div className="absolute -bottom-8 left-6 bg-white rounded-xl shadow-lg px-6 py-4">
            <p className="text-3xl font-bold text-blue-600">25+</p>
            <p className="text-sm text-gray-500">Years of Partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
