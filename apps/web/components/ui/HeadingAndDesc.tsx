import React from 'react'
interface Props{
    heading:string;
    desc:string
}

const HeadingAndDesc = ({heading,desc}:Props) => {
  return (
    <div className="text-center mb-12 max-w-3xl items-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h1>
          <p className="text-lg text-gray-600">
            {desc}
          </p>
        </div>
  )
}

export default HeadingAndDesc