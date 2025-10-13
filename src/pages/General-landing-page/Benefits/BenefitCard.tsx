import React from "react";

type BenefitCardProps = {
    image: string;
    title: string;
    description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ image, title, description }) => {
    return (
        <div
            className="
        bg-[#F5F5F5]
        rounded-2xl
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-500
        p-5
        flex
        flex-col
        items-center
        text-center
        border
        border-gray-100
        h-[420px]               
        hover:bg-green-700    
        hover:text-white          
      "
        >
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl mb-5 transition-all duration-500"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-white">
                {title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed hover:text-white/90">
                {description}
            </p>
        </div>
    );
};

export default BenefitCard;
