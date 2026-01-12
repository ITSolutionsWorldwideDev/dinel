import { Rocket, TrendingUp, Award, Users } from "lucide-react";

export default function ProfessionalsSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl  rounded-xl p-6 md:p-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            For professionals <br className="hidden md:block" />
            who want more than just a job
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Whether you are at the start of your career or an experienced
            specialist, Dinel helps you take the next step.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-white">
                <Rocket />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Challenging projects
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Work in energy, infrastructure, industry and sustainable
                  technology
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-linear-to-r from-[#FF6900] to-[#FB2C36] text-white">
                <TrendingUp />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Long-term development
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Focus on sustainable growth, not short-term placements
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-linear-to-r from-[#AD46FF] to-[#F6339A] text-white">
                <Users />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Personal guidance
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  From people with an engineering background
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-linear-to-r from-[#00C950] to-[#00BBA7] text-white">
                <Award />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Recognition</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Be valued for your contribution and commitment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-[#FF6B35] text-white font-medium hover:bg-orange-600 transition">
            Discover Opportunities
          </button>
          <button className="px-6 py-3 rounded-lg border-2 border-[#0A7CD8] text-[#0A7CD8] font-medium hover:bg-blue-50 transition">
            Become a Dineler
          </button>
        </div>
      </div>
    </section>
  );
}
