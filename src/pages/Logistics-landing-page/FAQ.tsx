// src/components/FAQ.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How do I register as a logistics partner?",
    answer:
      "Click the “Partner with Us” button, fill in your details, and upload the required documents.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are processed securely through our platform and sent directly to your account after each delivery.",
  },
  {
    question: "Can I join as an individual with a small vehicle?",
    answer:
      "Yes, both individuals and companies can register and start earning.",
  },
  {
    question: "Is there a commission fee?",
    answer:
      "Yes, a small commission is deducted per completed delivery to maintain the platform.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 space-y-4 text-nunito">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-sm bg-white"
        >

          {/* Question Header */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 text-left"
          >
            <span className="font-medium text-gray-800 text-nunito ">{item.question}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-7 h-7 text-white-300 bg-primary text-white rounded-full" />
            </motion.div>
          </button>


          {/* Animated Answer */}
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
                <div className="p-4 pt-0 text-gray-600 text-sm text-nunito">
                  {item.answer}
                </div>
                <br />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
