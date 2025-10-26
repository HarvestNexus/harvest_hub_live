import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isOpen
          ? "bg-white border rounded-lg shadow-md my-4"
          : "bg-transparent border-b border-gray-200"
      }`}
    >

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 sm:py-5 md:py-6 px-4 sm:px-6 focus:outline-none"
      >
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
          {question}
        </span>

        <span
          className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-all duration-500 ease-in-out ${
            isOpen
              ? "bg-[#208836] text-white rotate-180"
              : "bg-gray-100 text-gray-700 rotate-0"
          }`}
        >
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      
      {isOpen && (
        <div className="px-4 sm:px-6">
          <div className="border-t border-gray-300"></div>
        </div>
      )}

      <div
        className={`px-4 sm:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-700 text-sm sm:text-base overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-[300px] opacity-100 pt-3 sm:pt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="transition-opacity duration-700 ease-in-out leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
