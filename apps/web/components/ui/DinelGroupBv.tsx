import React from "react";
import { Mail, Phone } from "lucide-react";

export default function DinelGroupBv() {
  return (
    <div className="container mx-auto bg-gray-100 flex items-center justify-center mt-10 mb-10">
      <div className="w-full  bg-linear-to-br from-orange-400 to-orange-500 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
          <div className="grid grid-cols-8 gap-2 rotate-12">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

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
              <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 border-4 border-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-2xl">
                      CJ
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Certification</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-lg">
                <span className="text-blue-900 font-bold text-3xl">NBBU</span>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-blue-900 font-bold text-3xl mb-1">
                    NEN
                  </div>
                  <div className="text-blue-900 text-xs">👑</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-center justify-center shadow-lg">
                <div className="relative">
                  <div className="w-16 h-16 bg-green-600 transform rotate-45"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold transform -rotate-45">
                    VCA
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-end">
              <a
                href="#"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
