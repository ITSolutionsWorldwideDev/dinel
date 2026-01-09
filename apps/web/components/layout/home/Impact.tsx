export default function Impact() {
  return (
    <section className="bg-linear-to-r from-orange-500 to-orange-400 px-6 py-20 md:py-24 container mx-auto">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to make an impact?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10">
          Become a Dineler and work on projects that shape the future. With your
          expertise and our guidance, you can grow, contribute and make a real
          difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
            Become a Dineler
          </button>

          <button className="bg-transparent text-white font-semibold px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-orange-500 transition-colors duration-200 w-full sm:w-auto">
            View Vacancies
          </button>
        </div>
      </div>
    </section>
  );
}
