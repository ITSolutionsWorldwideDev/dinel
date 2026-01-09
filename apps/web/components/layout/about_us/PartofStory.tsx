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
        <div className=" rounded-lg p-8 md:p-12 mb-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" strokeWidth="2" fill="currentColor" />
                </svg>
              </div>
              <p className="text-lg text-gray-900">
                Choosing meaningful projects
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <p className="text-lg text-gray-900">
                Growing through challenge and guidance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
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