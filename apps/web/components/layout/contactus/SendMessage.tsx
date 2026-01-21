import React from 'react'
import { LuSend } from "react-icons/lu";
const SendMessage = () => {
  return (
      <section className="w-full flex justify-center py-10">
      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-md w-full max-w-lg p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FF6A00] text-white text-lg">
            <LuSend />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Send us a message
          </h2>
        </div>

        <p className="text-slate-600 text-sm mb-6 max-w-md">
          Please fill in the form below and we will get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Name */}
          <div>
            <label className="font-semibold text-sm text-slate-900">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-sm text-slate-900">Email address</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="font-semibold text-sm text-slate-900">Subject</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-sm text-slate-900">Message</label>
            <textarea
              rows={6}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 w-fit px-5 py-2 bg-[#FF6A00] text-white text-sm font-medium rounded-md hover:bg-[#ff5400] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default SendMessage