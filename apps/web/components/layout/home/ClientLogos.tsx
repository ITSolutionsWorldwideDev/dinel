// components/home/ClientLogos.tsx
import Image from "next/image";

const logos = [
  { src: "/assets/logo/albelli.webp", alt: "Albelli" },
  { src: "/assets/logo/allseas-lg.webp", alt: "Allseas" },
  { src: "/assets/logo/ddgroup.webp", alt: "DD Group" },
  { src: "/assets/logo/hassaan-travel.webp", alt: "Hassaan Travel" },
  { src: "/assets/logo/hi-tech.webp", alt: "Hi-Tech" },
  { src: "/assets/logo/newways-logo.webp", alt: "New Ways" },
  { src: "/assets/logo/portugees_to_go.svg", alt: "Portugees To Go" },
  { src: "/assets/logo/SSL-Electrotechneik_temp.webp", alt: "SSL Electrotechniek" },
];

export default function ClientLogos() {
  const track = [...logos, ...logos];

  return (
    <section className="w-full bg-white pb-20 pt-0 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
              Trusted By
            </span>
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0d2b33] tracking-tight">
            Companies We Work With
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-client-marquee">
          {track.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center shrink-0 px-6 sm:px-10"
              style={{ width: "clamp(220px, 25vw, 320px)" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={90}
                className="h-16 sm:h-20 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes client-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-client-marquee {
          animation: client-marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        .animate-client-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}