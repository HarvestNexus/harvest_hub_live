import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What is Harvest Nexus?",
        answer:
            "Harvest Nexus connects farmers, buyers, logistics, and storage facilities on one platform to make storing, selling, and transporting produce simpler and smarter.",
    },
    {
        question: "Is Harvest Nexus free to use?",
        answer:
            "Yes, it's completely free to get started. You can create an account, explore the platform, and access core services without any cost.",
    },
    {
        question: "How secure is the platform?",
        answer:
            "We use trusted payment gateways and secure data encryption. Payments are processed safely, and personal information is protected.",
    },
    {
        question: "How do I create an account?",
        answer:
            "Click on 'Sign Up,' provide your details, and verify your email to start managing your farm or marketplace directly.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F9F9F9] py-20 px-4 md:px-20 mt-24">
            <div className="flex items-center justify-center mb-6">
                <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full">
                    <img src="/images/Vector.png" alt="icon" className="w-5 h-5" />
                    FAQs
                </span>
            </div>

            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Got Questions?
                    <br />
                    We've Got Answers
                </h2>
                <p className="text-gray-600 text-base max-w-xl mx-auto">
                    Clear answers to help you get started, store, sell, and buy with ease.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out ${isOpen
                                    ? "bg-white border rounded-md shadow-sm my-4"
                                    : "bg-transparent border-b border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left py-6 px-6 focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>

                                <span
                                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out ${isOpen
                                            ? "bg-[#208836] text-white rotate-180"
                                            : "bg-gray-100 text-gray-700 rotate-0"
                                        }`}
                                >
                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="px-6">
                                    <div className="border-t border-gray-400"></div>
                                </div>
                            )}

                            <div
                                className={`px-6 pb-6 text-gray-700 text-base overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[240px] opacity-100 pt-4" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="transition-opacity duration-700 ease-in-out">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}