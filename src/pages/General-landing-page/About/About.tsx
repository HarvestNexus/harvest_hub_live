import React from "react";
import GoalSection from "./GoalSection";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-16 lg:px-28 bg-white">
      <div className="flex items-center justify-center md:justify-start w-full max-w-6xl mb-6">
        <span className="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full">
          <img
            src="/images/Vector.png"
            alt="Leaf icon"
            className="w-5 h-5 object-contain"
          />
          About Harvest Nexus
        </span>
      </div>
      <div className="w-full max-w-6xl text-center md:text-left mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bridging the Gap from Farm to Market
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          At Harvest Nexus, we connect farmers, buyers, logistics,
           and storage on one platform, ensuring fresh produce moves faster, safer, and smarter.
        </p>
      </div>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src="/images/About-Image.png"
            alt="Farmer with basket"
            className="object-cover w-full relative z-10"
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To empower farmers and buyers in Africa by reducing post-harvest
            losses through affordable storage, efficient logistics, and a direct
            digital marketplace that ensures fresh produce reaches the right
            buyers at the right time.
          </p>
        </div>
      </div>
        <GoalSection />
    </section>

  );
}