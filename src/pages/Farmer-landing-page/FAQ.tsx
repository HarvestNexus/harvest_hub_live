import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I list my produce for sale?",
    answer:
      "Go to your dashboard and click 'List Produce'. Enter details like crop type, quantity, price, and location, then publish to the marketplace.",
  },
  {
    id: 2,
    question: "How can I find storage for my harvest?",
    answer:
      "Use the 'Find Storage' feature to browse nearby cold rooms, warehouses, or silos. You can filter by capacity, price, and availability.",
  },
  {
    id: 3,
    question: "How do I transport my crops?",
    answer:
      "Harvest Nexus partners with logistics companies. When you receive an order or want to move crops, click 'Book Transport' on your dashboard. You’ll get truck options, including refrigerated ones.",
  },
  {
    id: 4,
    question: "What happens if my produce doesn’t sell quickly?",
    answer:
      "Unsold produce can be discounted or listed for wholesale buyers. You can also use our cold storage options to extend shelf life while waiting for buyers.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(3);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <HelpCircle className="w-4 h-4" />
          FAQs
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Got Questions? <br /> We’ve Got Answers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Clear answers to help you get started, store, and sell with ease.
        </p>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
              >
                <span className="text-gray-900 font-medium">
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
