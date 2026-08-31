import React from "react";

export default function CategoryModel({ title, body }: { title: string; body: string }) {
  return (
    <section className="w-full bg-white pt-16 pb-0 mb-0">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="relative bg-gradient-to-br from-[#0d2b33] to-[#153f4a] text-white p-8 md:p-14 rounded-3xl shadow-xl overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f2c40d] bg-white/10 px-3.5 py-1.5 rounded-full mb-6">
              Engagement Model
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">
              {title}
            </h2>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg whitespace-pre-line font-normal">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}