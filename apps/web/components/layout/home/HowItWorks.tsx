import React from "react";
import { ArrowRight, MessageSquare, Users, Calendar, Briefcase } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Tell us the role",
    desc: "Book a call or send a WhatsApp message with what you need — role, seniority, timeline.",
    icon: <MessageSquare className="w-6 h-6 text-[#f2c40d]" />,
  },
  {
    num: "02",
    title: "We shortlist candidates",
    desc: "Typically within 5 business days, we handpick top-tier matching profiles for your review.",
    icon: <Users className="w-6 h-6 text-[#f2c40d]" />,
  },
  {
    num: "03",
    title: "You interview",
    desc: "As many rounds as you need. We coordinate all the scheduling seamlessly.",
    icon: <Calendar className="w-6 h-6 text-[#f2c40d]" />,
  },
  {
    num: "04",
    title: "Choose your model",
    desc: "Select between Payrolling (starts on our payroll) or RPO (straight onto yours).",
    icon: <Briefcase className="w-6 h-6 text-[#f2c40d]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white relative overflow-hidden py-20 md:py-28">
      {/* Container matching the exact site-wide responsive side padding (px-6 md:px-12 lg:px-16) */}
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Same process whether you pick Payrolling or RPO — the difference
            is what happens after step 3.
          </p>
        </div>

        {/* 4-Column Modern Card Grid with Connected Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0d2b33]/30 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Top bar with icon and step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d2b33] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-gray-200 group-hover:text-[#0d2b33]/20 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom indicator line */}
              <div className="w-full h-1 bg-gray-100 rounded-full mt-8 overflow-hidden">
                <div className="w-0 h-full bg-[#f2c40d] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#0d2b33] hover:bg-[#153f4a] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-sm"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 text-[#f2c40d]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;