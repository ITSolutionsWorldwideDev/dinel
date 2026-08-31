export default function CategoryCoverage({ title, body }: { title: string; body: string }) {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-[#0d2b33] tracking-tight">
            {title}
          </h2>
          <div className="text-gray-600 whitespace-pre-line leading-relaxed text-base md:text-lg">
            {body}
          </div>
        </div>

        {/* Right Side: Professional Corporate Image using standard <img> tag */}
        <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Corporate Team Collaboration"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}