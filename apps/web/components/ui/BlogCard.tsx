import Image from "next/image";

interface ContentData {
  title: {
    normal: string;
    highlight: string;
  };
  description: string[];
}

const contentData: ContentData = {
  title: {
    normal: "People make",
    highlight: "technology work",
  },
  description: [
    "Technology only creates impact when driven by the right people. That's why Dinel focuses on long-term matches, between professionals who want to grow and organizations that want to move forward sustainably.",
    "As a Dineler, you work on projects that matter, supported by personal guidance and a network that understands your ambitions.",
  ],
};

export default function PeopleMakeTechnologyWork() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-65 sm:h-80 md:h-105 rounded-xl overflow-hidden">
          <Image
            src="/assets/home/fe885545f225e9a9249ac87cf1593d9db57ad143.jpg"
            alt="team working"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 leading-tight">
            {contentData.title.normal}{" "}
            <span className="text-orange-500">
              {contentData.title.highlight}
            </span>
          </h2>

          {contentData.description.map((text, index) => (
            <p
              key={index}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
