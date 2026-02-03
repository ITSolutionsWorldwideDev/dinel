"use client";

import { useState } from "react";
import { Tag, Mail, X } from "lucide-react";

export default function JobAlert({ open, setOPen }: any) {
  const fields = [
    { key: "infrastructure", label: "Infrastructure" },
    { key: "oilGasIndustry", label: "Oil, Gas & Industry" },
    { key: "energy", label: "Energy" },
  ];

  const educationOptions = [
    { key: "elementary", label: "Elementary" },
    { key: "mbo", label: "MBO" },
    { key: "hbo", label: "HBO" },
    { key: "wo", label: "WO" },
  ];
  const [education, setEducation] = useState<Record<string, boolean>>({
    elementary: true,
    mbo: false,
    hbo: false,
    wo: false,
  });

  const [field, setField] = useState<Record<string, boolean>>({
    infrastructure: true,
    oilGasIndustry: false,
    energy: false,
  });

  const [frequency, setFrequency] = useState("");
  const [keyword, setKeyword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      education,
      field,
      frequency,
      keyword,
      email,
    });
    alert("Job alert created successfully!");
  };

  return (
    <div className="w-fit bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 p-4 border-b-2 border-b-dotted  ">
          <h1 className=" md:text-3xl font- text-[#0A7CD8]">
            Create Job Alert
          </h1>
          <button
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer "
            onClick={() => setOPen(!open)}
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Education Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Education</h2>
              <div className="space-y-3">
                {educationOptions.map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={education[item.key]}
                      onChange={(e) =>
                        setEducation({
                          ...education,
                          [item.key]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 accent-amber-200"
                    />
                    <span className="text-gray-700">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Field Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Field</h2>
              <div className="space-y-3">
                {fields.map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={field[item.key]}
                      onChange={(e) =>
                        setField({ ...field, [item.key]: e.target.checked })
                      }
                      className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Frequency Dropdown */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">
                How often do you want to receive vacancies in your mailbox?
              </span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full  px-4 py-2 border border-gray-300 rounded-md  "
              required
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Keyword Input */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">Keyword</span>
            </label>
            <div className="p-2 relative flex items-center space-x-3 border border-gray-300 rounded-md ">
              <span className=" text-gray-400 ">
                <Tag />
              </span>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search vacancies by keyword"
                className="w-full pl-10 pr-4 py-2 border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">What is your email address?</span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="p-2 relative flex items-center space-x-3 border border-gray-300 rounded-md">
              <span className=" text-gray-400">
                <Mail />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-2   rounded-md border-none focus:outline-none focus:ring-0"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#0A7CD8] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
          >
            Create Job Alert
          </button>
        </form>
      </div>
    </div>
  );
}
