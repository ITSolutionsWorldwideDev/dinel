import Image from "next/image";
import { Target } from "lucide-react";
export default function CareerSection() {
  const features = [
    {
      icon: "/assets/home/Vector (1).png",
      text: "Challenging Jobs And Projects",
    },
    {
      icon: "/assets/home/Vector (2).png",
      text: "Realizing Ambitions",
    },
    {
      icon: "/assets/home/streamline-flex_decent-work-and-economic-growth.png",
      text: "Focus On Growth And Development",
    },
  ];

  return (
    <section className="container mx-auto  py-22  ">
      {/* <div className="absolute inset-0">
        <img
          src="/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png"
          alt=""
          className="w-full h-full object-contain opacity-10 "
        />
      </div> */}
      <div className="flex items-center p-10 lg:p-20 mb-10 justify-center">
        <h1 className="font-bold xl:text-7xl lg:text-5xl md:text-4xl sm:text-2xl">
          Empowering Careers Through Dinel
        </h1>
      </div>

      <div className="py-20 relative ">
        <div className="absolute right-0 w-auto h-full -z-1 ">
          <img
            src="/assets/home/b5119110651a2589afaa1a533594d432fdac1f03.png"
            alt=""
            className="w-full h-full object-cover opacity-10 "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-visible">
          {/* LEFT IMAGE */}

          <div className="">
            <Image
              src="/assets/home/6040b4edeacfbde72a6d1c2b653d02d63ed00b49 (1).jpg"
              width={800}
              height={500}
              alt="Person"
              className="
            object-cover w-full"
            />
          </div>

          {/* RIGHT GRID CONTENT */}
          <div className="grid gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[64px_1fr] gap-4 items-center bg-white shadow-md  p-5"
              >
                <div className="w-16 h-16 bg-orange-500 flex items-center justify-center ">
                  <Image src={item.icon} width={30} height={30} alt="icon" />
                </div>
                <p className="ml-5 font-bold text-lg text-gray-900">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
