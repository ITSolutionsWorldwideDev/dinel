"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { Tag, Mail, X } from "lucide-react";

export default function JobAlert({ open, setOPen }: any) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const [disciplineData, setDiscipline] = useState<any[]>([]);
  const [industryData, setIndustry] = useState<any[]>([]);

  const [selectedDisciplines, setSelectedDisciplines] = useState<number[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<number>();

  const [frequency, setFrequency] = useState("");
  const [email, setEmail] = useState("");

  // ✅ Fetch Data From Backend
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/job-alert");
      const data = await res.json();

      setDiscipline(data.disciplines || []);
      setIndustry(data.sectors || []);
    };

    fetchData();
  }, []);

  // ✅ Handle Tags
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }

      setInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      disciplines: selectedDisciplines,
      industries: selectedIndustries,
      frequency,
      keywords: tags,
      email,
    });
    const payload = {
      disciplines: selectedDisciplines,
      industries: selectedIndustries,
      frequency,
      keywords: tags,
      email,
    };
    try {
      const res = await fetch("/api/job-alert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Job alert created successfully ✅");
    } catch (error: any) {
      console.error(error);
      alert("Failed to create job alert ❌");
    }
  };
  // };

  return (
    <div className="w-fit bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 p-4 border-b-2 border-b-dotted">
          <h1 className="md:text-3xl text-[#0A7CD8]">Create Job Alert</h1>
          <button
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
            onClick={() => setOPen(!open)}
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Discipline */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Discipline</h2>
              <div className="space-y-3">
                {disciplineData.map((item) => (
                  <label
                    key={item.discipline_id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDisciplines.includes(item.discipline_id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedDisciplines([
                            ...selectedDisciplines,
                            item.discipline_id,
                          ]);
                        } else {
                          setSelectedDisciplines(
                            selectedDisciplines.filter(
                              (id) => id !== item.discipline_id,
                            ),
                          );
                        }
                      }}
                      className="w-5 h-5 accent-amber-400"
                    />
                    <span className="text-gray-700">{item.discipline}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Industry</h2>
              <div className="space-y-3">
                {industryData.map((item) => (
                  <label
                    key={item.sector_id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="industry" // important: same name for grouping
                      checked={selectedIndustries === item.sector_id}
                      onChange={() => setSelectedIndustries(item.sector_id)}
                      className="w-5 h-5 accent-amber-400"
                    />
                    <span className="text-gray-700">{item.sector}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Frequency */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">
                How often do you want to receive vacancies?
              </span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Keyword Tags */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">Keyword</span>
            </label>

            <div className="p-2 flex flex-wrap items-center gap-2 border border-gray-300 rounded-md">
              <Tag size={18} className="text-gray-400" />

              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                  <X
                    size={14}
                    className="ml-1 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                </span>
              ))}

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search vacancies by keyword"
                className="flex-1 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700">Email address</span>
              <span className="text-red-500 ml-1">*</span>
            </label>

            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <Mail className="text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#0A7CD8] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md"
          >
            Create Job Alert
          </button>
        </form>
      </div>
    </div>
  );
}
