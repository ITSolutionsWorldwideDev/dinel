import { FiTarget } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

export default function PartofStory() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Become part of the story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Being a Dineler means:
          </p>
        </div>

        {/* Features Box */}
        <div className=" rounded-lg p-8 md:p-12 mb-12 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left shadow-md bg-white p-5">
              <div className="mb-4 ">
                <FiTarget className="text-[#FF6B35] w-8 h-8" />
              </div>
              <p className="text-lg text-gray-900">
                Choosing meaningful projects
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left shadow-md bg-white p-5">
              <div className="mb-4">
                <FaArrowTrendUp className="text-[#FF6B35] w-8 h-8" />
              </div>
              <p className="text-lg text-gray-900">
                Growing through challenge and guidance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left shadow-md bg-white p-5">
              <div className="mb-4">
                <FiUsers className="text-[#FF6B35] w-8 h-8" />
              </div>
              <p className="text-lg text-gray-900">
                Belonging to a community that values expertise and people
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-blue-500 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 w-full sm:w-auto">
            Become a Dineler
          </button>
          <button className="px-8 py-4 bg-white text-orange-500 rounded-lg font-semibold text-lg border-2 border-orange-500 hover:bg-orange-50 transition-all duration-200 w-full sm:w-auto">
            Contact Dinel
          </button>
        </div>
      </div>
    </div>
  );
}
