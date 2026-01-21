import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const ContactDetails = () => {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-md w-full max-w-3xl p-8">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-slate-900 mb-8">
          Our contact details
        </h2>

        {/* Contact Items */}
        <div className="flex flex-col gap-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FF6A00] text-white text-xl">
              <FiPhone />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Phone</h4>
              <p className="text-slate-600 text-sm">+31 123 456 7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FF6A00] text-white text-xl">
              <FiMail />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Email</h4>
              <p className="text-slate-600 text-sm">info@dinel.nl</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FF6A00] text-white text-xl">
              <FiMapPin />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Address</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dinel <br />
                Headquarters <br />
                Example Street 12 <br />
                1234 AB City <br />
                The Netherlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
