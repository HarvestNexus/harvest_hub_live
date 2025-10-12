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
            question: "What if the produce I ordered isn’t available anymore?",
            answer:
                "If an item becomes unavailable, you’ll be notified and can choose an alternative or request a refund.",
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
            question: "What happens if my produce doesn’t sell quickly?",
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

    return (


        <section className="bg-[#F9F9F9] py-20 px-4 md:px-20 ">

            <br />


            <div className="flex items-center justify-center mb-6">
                <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full">
                    <img src="/images/Vector.png" alt="icon" className="w-5 h-5" />
                    FAQs
                </span>
            </div>


            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Got Questions?
                    <br /> We’ve Got Answers
                </h2>
                <p className="text-gray-600 text-base max-w-xl mx-auto">
                    Clear answers to help you get started, store, sell, and buy with ease.
                </p>
            </div>


            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

                <div className="md:w-1/6">
                    <div className="border border--[#646464] rounded-lg bg-white">
                        <ul className="flex md:flex-col text-sm md:text-base">
                            {["Buyer", "Farmer", "Logistics", "Storage Facility"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="px-6 py-3 border-b md:border-b-0 md:border-b-gray-200 text-gray-700 hover:text-[#208836] cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>


                <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Buyer</h3>
                    {buyerFAQs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}

                    <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">Farmer</h3>
                    {farmerFAQs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}

                    <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                        Logistics
                    </h3>
                    {logisticsFAQs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}

                    <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                        Storage Facility
                    </h3>
                    {storageFAQs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
