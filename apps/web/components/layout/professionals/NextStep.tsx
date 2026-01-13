export default function NextStep() {
  return (
    <>
      <div className="bg-[#FF8026] flex items-center justify-center p-4 container mx-auto relative">
       <img
        src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        alt=""
      />

      <div className="bg-[#FF8026] absolute inset-0 opacity-30"/>

        <div className="relative z-1 w-full lg:w-[70%]">
          <div className="  p-8 md:p-16">
            <blockquote className="text-center">
              <p className="text-white text-xl md:text-3xl font-medium leading-relaxed">
                "We understand what drives technicians and what they are looking
                for in their next step. That's why our team can match the right
                people to the right projects. Our goal is your next challenge."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready for your next step?
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Become a Dineler and work on projects that challenge you, inspire
            you and help you grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              View Vacancies
            </button>

            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              Become a Dineler
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
