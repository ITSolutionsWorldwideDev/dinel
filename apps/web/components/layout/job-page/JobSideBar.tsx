// apps/web/components/layout/job-page/JobSideBar.tsx

import { Search, ChevronDown } from "lucide-react";
import Discipline from "./Discipline";
import Location from "./Location";

export default function JobSideBar() {
  return (
    <main className=" bg-gray-50 flex p-4">
      <div className=" space-y-4">
        {/* Search */}
        <div className="flex items-center border border-gray-300 bg-white px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1  text-sm outline-none focus:outline-none focus:ring-0"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* Disciplines */}
       <Discipline/>

        {/* Locations */}
        <Location/>

        {/* Job Alert Card */}
        <div className="bg-white p-5 space-y-4 shadow-sm">
          <h3 className="font-semibold text-lg">Job alert</h3>

          <p className="text-sm text-gray-600">
            Stay up to date on the jobs you're interested in.
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="E-MAIL ADDRESS"
            className="w-full border border-gray-800 px-4 py-3 text-sm outline-none"
          />

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs text-gray-700">
            <input type="checkbox" className="mt-1" />
            <span>I AGREE TO THE TERMS AND CONDITIONS</span>
          </label>

          {/* Button */}
          <button className="w-full bg-[#FF6B35] text-white py-4 font-medium hover:bg-orange-600 transition cursor-pointer">
            SET UP ALERT
          </button>
        </div>
      </div>
    </main>
  );
}
