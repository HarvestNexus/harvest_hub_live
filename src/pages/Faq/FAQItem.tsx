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
            className={`transition-all duration-500 ease-in-out ${isOpen
                    ? "bg-white border rounded-md shadow-sm my-4"
                    : "bg-transparent border-b border-gray-200"
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6 px-6 focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>

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
                <p className="transition-opacity duration-700 ease-in-out">{answer}</p>
            </div>
        </div>
    );
}
