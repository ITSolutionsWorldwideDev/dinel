import React from "react";
import Link from "next/link";
const FollowUs = () => {
  return (
    <div
      className="shadow-[0_4px_20px_rgba(0,0,0,0.08)]
 flex items-center justify-center"
    >
      <div className="bg-white   p-5 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow us</h2>

        <p className="text-gray-600 text-lg mb-8">
          Stay connected through our social channels for news, updates and
          opportunities:
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A7CD8] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            LinkedIn
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A7CD8] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Instagram
          </Link>

          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A7CD8] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
