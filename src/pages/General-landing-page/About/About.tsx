import React from "react";
import GoalSection from "./GoalSection";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-28 bg-white">
      <div className="flex items-center justify-center w-full max-w-6xl mb-6 sm:mb-8">
        <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
          <img
            src="/images/Vector.png"
            alt="Leaf icon"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
          About Harvest Nexus
        </span>
      </div>
      
      <div className="w-full max-w-6xl text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
          Bridging the Gap from Farm to Market
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
          At Harvest Nexus, we connect farmers, buyers, logistics,
          and storage on one platform, ensuring fresh produce moves faster, safer, and smarter.
        </p>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div className="relative order-2 md:order-1">
          <img
            src="/images/About-Image.png"
            alt="Farmer with basket"
            className="object-cover w-full h-auto relative z-10 rounded-lg"
          />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            To empower farmers and buyers in Africa by reducing post-harvest
            losses through affordable storage, efficient logistics, and a direct
            digital marketplace that ensures fresh produce reaches the right
            buyers at the right time.
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-6xl mt-12 sm:mt-16">
        <GoalSection />
      </div>
    </section>
  );
}