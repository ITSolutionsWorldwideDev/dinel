import Image from "next/image";
import { IoBulbOutline } from "react-icons/io5";

const Story = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE SIDE */}

        {/* Background tilt */}

        <div className=" flex items-center justify-center bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] rotate-2 p-10">
          <Image
            src="/assets/aboutus/b65791ecbbe7cd3844d60a9d1bf2011b3997c670.jpg"
            alt="Dinel story"
            width={100}
            height={100}
            className="h-100 w-[80%] object-cover -rotate-3"
            priority
          />
        </div>

        {/* CONTENT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-gray-700 bg-linear-to-br from-[#0A7CD81A] to-[#FF6B351A] rounded-full">
            <IoBulbOutline className="text-[#FF6B35]" /> The Story Behind Dinel
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Built by an engineer.
            <br />
            <span className="text-[#0A7CD8]">Driven by people.</span>
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
          <div className="mt-8 flex items-center gap-4 text-sm font-bold text-[#0A7CD8]">
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
