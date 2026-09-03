import EnquiryForm from "@/components/forms/EnquiryForm";
import { Category } from "@/components/forms/types";

interface ContactFormMapSectionProps {
  categories: Category[];
  defaultCategory?: string;
  lockCategory?: boolean;
  badge?: string;
  title?: string;
  description?: string;
  mapSrc?: string;
}

const DEFAULT_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.767512961803!2d4.341407!3d51.874138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433c048b61e2f%3A0x6b772422736b04e6!2sMandenmakerstraat%20100C%2C%203194%20DG%20Hoogvliet%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

export default function ContactFormMapSection({
  categories,
  defaultCategory = "",
  lockCategory = false,
  badge = "Get In Touch",
  title = "Start Your Journey With Us",
  description = "Connect with our team or visit our office location to explore seamless collaboration opportunities.",
  mapSrc = DEFAULT_MAP_SRC,
}: ContactFormMapSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fafa] to-white py-16 md:py-24">
      <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-[#0d2b33]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#f2c40d]/10 blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-16 max-w-[1500px] mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Left: Enquiry Form — hiring only, toggle hidden */}
          <div className="flex flex-col w-full">
            <EnquiryForm
              categories={categories}
              defaultMode="hiring"
              lockMode={true}
              defaultCategory={defaultCategory}
              lockCategory={lockCategory}
            />
          </div>

          {/* Right: Map */}
          <div className="flex flex-col w-full h-full min-h-[480px] lg:min-h-full overflow-hidden rounded-3xl border-2 border-[#1a4550]/15 bg-white shadow-xl shadow-[#1a4550]/5 relative">
            <iframe
              title="Office Location Map"
              src={mapSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}