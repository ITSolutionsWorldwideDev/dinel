import Image from "next/image";
import { ReactNode } from "react";

export interface Bullet {
  icon?: ReactNode;
  heading?: string;
  title: string;
}

export interface Section {
  icon?: ReactNode;
  step?:string;
  stepclass?:string
  title: string;
  subtitle?: string;
  heading?: string;
  bullets?: Bullet[];
  description?: string;
  image: string;
  topHeading?:ReactNode
}

interface CardsProps {
  data: Section[];
}
export default function Cards({ data }: CardsProps) {
  // const sections = [
  //   {
  //     title: "The Dineler Community",
  //     subtitle: "You are not alone",
  //     bullets: [
  //       "Share knowledge and experience",
  //       "Work on future-oriented projects",
  //       "Believe in quality, trust and commitment",
  //     ],
  //     description:
  //       "Being a Dineler means belonging to a community that values people as much as technology.",
  //     image: "/assets/client/7add9bee2ec8c7a8546d18e75f20199ecc3208ce.jpg",
  //   },
  //   {
  //     title: "Guidance from people who understand your work",
  //     subtitle: "",
  //     bullets: [
  //       "The technical challenges you face",
  //       "The importance of the right working environment",
  //       "The balance between challenge, security and growth",
  //     ],
  //     description:
  //       "From the first conversation to the start of your project and beyond — we stay involved and support you every step of the way.",
  //     image: "/assets/client/7add9bee2ec8c7a8546d18e75f20199ecc3208ce.jpg",
  //   },

  //   {
  //     title: "Guidance from people who understand your work",
  //     subtitle: "",
  //     bullets: [
  //       "The technical challenges you face",
  //       "The importance of the right working environment",
  //       "The balance between challenge, security and growth",
  //     ],
  //     description:
  //       "From the first conversation to the start of your project and beyond — we stay involved and support you every step of the way.",
  //     image: "/assets/client/7add9bee2ec8c7a8546d18e75f20199ecc3208ce.jpg",
  //   },

  //   {
  //     title: "Guidance from people who understand your work",
  //     subtitle: "",
  //     bullets: [
  //       "The technical challenges you face",
  //       "The importance of the right working environment",
  //       "The balance between challenge, security and growth",
  //     ],
  //     description:
  //       "From the first conversation to the start of your project and beyond — we stay involved and support you every step of the way.",
  //     image: "/assets/client/7add9bee2ec8c7a8546d18e75f20199ecc3208ce.jpg",
  //   },
  // ];

  return (
    <div className="container mx-auto space-y-24 p-15">
      {data.map((item, index) => {
        const isImageRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center`}
          >
            {/* Text */}
            <div className={`space-y-5 ${!isImageRight ? "lg:order-2" : ""}`}>
              {item.topHeading &&(<div className="">{item.topHeading}</div>)}
              <div className="">{item.icon}</div>

              {item.step && <h2 className={`font-semibold ${item.stepclass}`}>
                {item.step}
              </h2>}
              <h2 className="text-4xl font-semibold text-gray-900">
                {item.title}
              </h2>

              {item.subtitle && (
                <p className="text-lg font-medium text-gray-600">
                  {item.subtitle}
                </p>
              )}

              {item.heading && (
                <p className="text-lg  text-gray-600">{item.heading}</p>
              )}

              <ul className="space-y-3">
                {item.bullets &&
                  item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      {b.icon && (
                        <span className="text-blue-500 font-bold text-xl">
                          {" "}
                          {b.icon}
                        </span>
                      )}

                      {b.heading && (
                        <span className="text-black font-bold ">
                          {" "}
                          {b.heading}
                        </span>
                      )}

                      {b.title && <span>{b.title}</span>}
                    </li>
                  ))}
              </ul>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <div
              className={`w-full h-[90%] flex justify-center ${
                isImageRight ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={550}
                height={350}
                className="rounded-md object-cover shadow-md"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
