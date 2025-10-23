import React from "react";
import BenefitCard from "./BenefitCard";
import Slide from "./Slide"

const benefits = [
    {
        image: "/images/benefit1.png",
        title: "Farm-Fresh for Buyers",
        description:
            "Enjoy fresh, high-quality produce sourced directly from farmers, and delivered to your doorstep.",
    },
    {
        image: "/images/benefit2.png",
        title: "Waste Less, Earn More",
        description:
            "Keep your harvest fresh and reduce spoilage by booking storage facilities near you.",
    },
    {
        image: "/images/benefit3.png",
        title: "Direct to Market",
        description:
            "Sell straight to buyers, cut out middlemen and secure faster payments.",
    },
    {
        image: "/images/benefit4.png",
        title: "Transport Made Easy",
        description:
            "Book trusted logistics in one click and track your order or produce until it is delivered.",
    },
    {
        image: "/images/benefit5.png",
        title: "Fair. Profitable. Secure.",
        description:
            "Get real value for your hard work with transparent pricing and reliable payments.",
    },
    {
        image: "/images/benefit6.png",
        title: "All in One Platform",
        description:
            "Get fresh produce, manage orders, book transport, storage and payments all in one website.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-16 lg:px-28 bg-white">
            <div className="flex items-center justify-center mb-6">
                <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full">
                    <img src="/images/Vector.png" alt="icon" className="w-5 h-5" />
                    Key Benefits
                </span>
            </div>
            <div className="text-center max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Why Harvest Nexus Works for You
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Whether you’re harvesting or buying, we make storage, sales, and
                    delivery simpler and smarter.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {benefits.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        image={benefit.image}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </div>
            <Slide />
        </section>
    );
}
