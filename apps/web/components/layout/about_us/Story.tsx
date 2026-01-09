import Image from "next/image";

const Story = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE SIDE */}
        <div className="relative">
          {/* Background tilt */}
          <div className="absolute -inset-4 bg-linear-to-br from-blue-50 to-orange-50 -rotate-2 rounded-2xl" />

          <div className="relative rounded-2xl overflow-hidden ">
            <Image
              src="/assets/aboutus/b65791ecbbe7cd3844d60a9d1bf2011b3997c670.jpg"
              alt="Dinel story"
              width={300}
              height={100}
              className="h-100 w-500 object-contain"
              priority
            />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
            💡 The Story Behind Dinel
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Built by an engineer.
            <br />
            <span className="text-blue-600">Driven by people.</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            Dinel was founded in 2000 by Paul Mathey, after having worked as an
            electrical engineer for more than ten years.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            During his career, he experienced first-hand how many agencies
            treated professionals as numbers, while the real value lies in
            people, knowledge and commitment. From that conviction, Dinel was
            created: an organization that puts professionals first and builds
            long-term relationships based on trust, respect and transparency.
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-blue-600">
            <span>Since 2000</span>
            <span className="w-10 h-px bg-blue-600" />
            <span>25+ Years</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
