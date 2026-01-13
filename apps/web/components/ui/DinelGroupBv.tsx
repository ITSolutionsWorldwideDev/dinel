import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function DinelGroupBv() {
  return (
    <div className="container mx-auto bg-gray-100 flex items-center justify-center mt-10  relative ">
      <img
        src="/assets/home/04efc82d8827f0ec956cfdaf4e3d1099e9c31ad9.jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        alt=""
      />

      <div className="bg-[#FF8026] absolute inset-0 opacity-90" />
      <div className="w-full  bg-linear-to-br rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden ">
        <div className="relative z-10 grid md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Dinel Group BV
            </h1>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Address</h3>
                  <p className="text-gray-800">
                    daltonstraat 11 3335 Jr zwijndrecht
                    <br />
                    the netherlands
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Phone Number
                  </h3>
                  <p className="text-gray-800">010 234 35 73</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3 shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-800">info@dinel.nl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Logos and Social */}
          <div className="flex flex-col justify-between">
            {/* Certification Logos */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg  flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className=" mx-auto mb-2  flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-2xl">
                      <img
                        src="/assets/dinelgroupbv/0166f4a4ee9b1f3dbe4964cab594052e4f1818ea.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg  flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className=" mx-auto mb-2  flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-2xl">
                      <img
                        src="/assets/dinelgroupbv/adc952413b1c5d11cbe02ff6645587a593a6bf2f.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg  flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className=" mx-auto mb-2  flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-2xl">
                      <img
                        src="/assets/dinelgroupbv/8fe1360ae39564e1e88e56da8643cc73f30ba948.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg  flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="mx-auto mb-2  flex items-center justify-center shrink">
                    <img
                      src="/assets/dinelgroupbv/fdb1e4775500652024b848a4a043c8bef17cdeda.png"
                      alt="Nc"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-end">
              <div className="bg-white rounded-full flex  w-8 h-8 ">
                <FaFacebookF className="text-[#FF8026] w-full h-6 mt-2" />
              </div>

              <div className="bg-white rounded-full flex items-center w-8 h-8 ">
                <FaInstagram className="text-[#FF8026] w-full h-6  font-bold" />
              </div>

              <div className="bg-white rounded-full flex items-center w-8 h-8 ">
                <FaXTwitter className="text-[#FF8026] w-full h-6 " />
              </div>

              <div className="bg-white rounded-full flex items-center w-8 h-8 ">
                <FaLinkedinIn className="text-[#FF8026] w-full h-6 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
