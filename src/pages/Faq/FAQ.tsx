import FAQItem from "./FAQItem";

export default function FAQ() {
    const buyerFAQs = [
        {
            question: "How do I buy farm produce?",
            answer:
                "Go to the Marketplace tab on your buyer dashboard. Browse available products, add items to your cart, or proceed to checkout.",
        },
        {
            question: "How do I pay for my orders?",
            answer:
                "You can pay directly on the platform using secure payment methods provided at checkout.",
        },
        {
            question: "Can I save my favorite suppliers?",
            answer:
                "Yes, you can add suppliers to your favorites list for easy access to their produce.",
        },
        {
            question: "What if the produce I ordered isn't available anymore?",
            answer:
                "If an item becomes unavailable, you'll be notified and can choose an alternative or request a refund.",
        },
    ];

    const farmerFAQs = [
        {
            question: "How do I list my produce for sale?",
            answer:
                "Log in as a farmer, navigate to your dashboard, and select 'Add Produce'. Fill in details and submit.",
        },
        {
            question: "How can I find storage for my harvest?",
            answer:
                "Go to the Storage tab and browse available facilities near you. You can rent storage directly from the app.",
        },
        {
            question: "How do I transport my crops?",
            answer:
                "Use the Logistics tab to connect with trusted transporters available in your area.",
        },
        {
            question: "What happens if my produce doesn't sell quickly?",
            answer:
                "You can adjust your prices, promote listings, or move items into storage for extended preservation.",
        },
    ];

    const logisticsFAQs = [
        {
            question: "How do I sign up as a logistics partner?",
            answer:
                "Create a logistics account and complete the verification form to start accepting delivery requests.",
        },
        {
            question: "What types of vehicles can I register?",
            answer:
                "Logistics partners can register various vehicle types, including trucks, vans, and motorcycles, depending on their delivery needs.",
        },
        {
            question: "How do I get delivery jobs?",
            answer:
                "Logistics partners can browse available delivery requests in their dashboard and accept jobs that match their vehicle capacity and location.",
        },
        {
            question: "Is there a cost to join?",
            answer:
                "Yes, logistics partners can register and manage multiple vehicles under one account.",
        },
    ];

    const storageFAQs = [
        {
            question: "What kind of storage facilities can register?",
            answer:
                "Register as a storage owner, provide your facility details, and set your rental rates.",
        },
        {
            question: "How do I list my facility?",
            answer:
                "Log in as a storage owner, navigate to your dashboard, and select 'Add Facility'. Fill in details and submit.",
        },
        {
            question: "How are payments handled?",
            answer:
                "Yes, the dashboard lets you monitor tenants, storage duration, and payments in real time.",
        },
        {
            question: "Can I list multiple facilities?",
            answer:
                "Yes, the dashboard lets you monitor tenants, storage duration, and payments in real time.",
        },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="bg-[#F9F9F9] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
                <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
                    <img src="/images/Vector.png" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                    FAQs
                </span>
            </div>

            <div className="text-center mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Got Questions?
                    <br /> We've Got Answers
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto px-4">
                    Clear answers to help you get started, store, sell, and buy with ease.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
                <div className="lg:w-1/4">
                    <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <ul className="flex lg:flex-col overflow-x-auto">
                            {["Buyer", "Farmer", "Logistics", "Storage Facility"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                        className="flex-shrink-0 px-4 sm:px-6 py-3 border-b lg:border-b-0 border-gray-200 cursor-pointer text-sm sm:text-base whitespace-nowrap transition-colors text-gray-700 hover:text-[#208836]"
                                    >
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="lg:w-3/4">
                    <div id="buyer" className="scroll-mt-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Buyer</h3>
                        {buyerFAQs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div id="farmer" className="scroll-mt-20 mt-12 sm:mt-16">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Farmer</h3>
                        {farmerFAQs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div id="logistics" className="scroll-mt-20 mt-12 sm:mt-16">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Logistics
                        </h3>
                        {logisticsFAQs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div id="storage-facility" className="scroll-mt-20 mt-12 sm:mt-16">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Storage Facility
                        </h3>
                        {storageFAQs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}