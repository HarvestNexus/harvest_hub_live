// src/components/FAQ.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  title?: string; // optional heading (e.g. "FAQs" or "Storage FAQs")
  description?: string; // optional subtext
  items: FAQItem[]; // the questions + answers
}

const SVG = () => (
  <svg
    width="23"
    height="27"
    viewBox="0 0 23 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.15 17C19.978 18.1936 19.5603 19.3386 18.9235 20.3627C18.2867 21.3868 17.4444 22.2678 16.45 22.95C16.2 21.9125 14.6625 21.0625 12.65 20.825C12.8625 19.3375 13.3 17.95 13.6 17.15C14.075 17.45 14.625 17.625 15.25 17.625C19.6875 17.625 19 10.125 19 10.125C19 10.125 18.375 11.375 16.5 11.375H15.25C14.694 11.3748 14.148 11.523 13.6683 11.8043C13.1887 12.0856 12.7928 12.4897 12.5214 12.9751C12.2501 13.4604 12.1132 14.0094 12.1248 14.5653C12.1364 15.1212 12.2961 15.6639 12.5875 16.1375C13.4125 15.275 14.3 14.5 15.25 13.875C13.6 15.5375 12.3375 17.625 11.5 19.625C10.7125 18.0875 9.725 16.9125 9 16.375C9.5875 16.625 10.1375 17 10.6625 17.375C10.8 17.075 10.875 16.7375 10.875 16.375C10.8125 12.9625 5.25 13.25 5.25 13.25C5.6375 13.775 5.875 14.4375 5.875 15.125V16.375C5.875 17.75 7 18.875 8.375 18.875C9 18.875 9.5625 18.65 10 18.25C10.2875 19.0375 10.5 19.9375 10.6125 20.8C8.4625 20.9875 6.8125 21.8625 6.55 22.9625C4.2625 21.375 2.75 18.7375 2.75 15.75C2.75 10.925 6.675 7 11.5 7V10.75L17.75 5.75L11.5 0.75V4.5C8.51631 4.5 5.65483 5.68526 3.54505 7.79505C1.43526 9.90483 0.25 12.7663 0.25 15.75C0.25 18.7337 1.43526 21.5952 3.54505 23.705C5.65483 25.8147 8.51631 27 11.5 27C17.2875 27 22.05 22.625 22.675 17H20.15Z"
      fill="#208836"
    />
  </svg>
);

const FAQ: React.FC<FAQProps> = ({ title = "FAQs", description, items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 space-y-4 text-nunito flex flex-col">
      {/* Section Header */}
      <div className="flex flex-col gap-4 items-center mb-8">
        <div className="relative flex gap-2 items-center justify-center bg-brand-fadeGreen text-brand-dark font-semibold w-fit mx-auto px-2 py-3 rounded-3xl">
          <SVG />
          <span className="text-secondary-700 font-nunito text md:text-xl">
            {title}
          </span>
        </div>
        <h2 className="text-center text-3xl text-nunito max-w-sm">
          Got Questions? <br /> We’ve Got Answers
        </h2>
        {description && (
          <p className="md:text-xl text-[#646464] text-center max-w-xl text-nunito">
            {description}
          </p>
        )}
      </div>

      {/* Accordion */}
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-sm bg-white">
          {/* Question Header */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 text-left"
          >
            <span className="font-medium text-gray-800 text-nunito text-xl md:text-2xl">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-7 h-7 text-white-300 bg-primary text-white rounded-full" />
            </motion.div>
          </button>
          <hr className="mx-3 py-2 text-bold" />

          {/* Answer */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 text-gray-600 text-sm text-nunito md:text-lg">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
