import React from 'react'

interface CoreValue {
  letter: string;
  title: string;
  desc: string;
  bg: string;
}

interface CoreValuesProps {
  values: CoreValue[];
}
const IconCardCenterAlign : React.FC<CoreValuesProps>= ({values}) => {
  return (
    <section className="py-20 bg-white container mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 text-center rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center text-white text-2xl font-bold ${item.bg}`}
              >
                {item.letter}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IconCardCenterAlign