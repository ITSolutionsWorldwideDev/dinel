// apps/web/components/ui/JobApplicationForm.tsx

"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import { useRouter } from "next/router";

interface Props {
  onClose: () => void;
  title: string;
  jobId: string;
}

export default async function JobApplicationForm({
  onClose,
  title,
  jobId,
}: Props) {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<string, string>>({
    firstName: "",
    surname: "",
    city: "",
    phoneNumber: "",
    email: "",
    motivation: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", { ...formData, file });

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      const value = formData[key] ?? "";
      formDataToSend.append(key, value);
    });

    if (file) {
      formDataToSend.append("cv", file, file.name);
    }

    formDataToSend.append("vacancyId", jobId);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        router.push("/thank-you"); // Redirect to a "Thank You" page
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting application");
    }

    onClose();
    // Add your submission logic here
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="  flex items-center  p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        {/* Close button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className=" md:text-4xl  font-light text-[#0A7CD8] mb-2">
            Interested? Send us
            <br />
            your application!
          </h1>
          <p className="text-gray-600">
            Applying for:{" "}
            <span className="font-semibold text-gray-800">{title}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="surname"
                placeholder="Surname *"
                value={formData.surname}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Phone number */}
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number *"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Motivation */}
          <div>
            <textarea
              name="motivation"
              placeholder="Motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              rows={4}
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
            />
          </div>

          {/* File upload */}
          <div>
            <input
              type="file"
              id="cv-upload"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <label
              htmlFor="cv-upload"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`block w-full px-4 py-12 border-2  rounded-md cursor-pointer transition-colors ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-[#FFB86A] bg-white hover:bg-orange-100"
              }`}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-[#FFEDD4] rounded-full flex items-center justify-center mb-3">
                  <Upload className="text-orange-600" size={24} />
                </div>
                {file ? (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile();
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[#FF6B35] font-medium mb-1">
                      Choose file...
                    </span>
                    <span className="text-gray-500 text-sm">
                      Drag & Drop or Select CV file
                    </span>
                  </>
                )}
              </div>
            </label>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              className="cursor-pointer bg-[#0A7CD8] hover:bg-blue-600 text-white md:font-medium md:px-8 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
