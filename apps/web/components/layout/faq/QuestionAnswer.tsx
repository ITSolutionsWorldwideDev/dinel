"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
interface FaqItem {
  question: string;
  answer: string;
}

interface QuestionAnswerProps {
  faqs: FaqItem[];
  whosQUestions: string;
}
export default function QuestionAnswer({
  faqs,
  whosQUestions,
}: QuestionAnswerProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8">
      <div className=" mx-auto shadow-md bg-white  p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {whosQUestions}
        </h1>

        <div className="space-y-4  ">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white   border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
