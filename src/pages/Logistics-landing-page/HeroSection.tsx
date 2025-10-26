
import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
}) => (
  <div className="relative md:h-screen flex items-center justify-center text-center rounded">
    <div
      className="absolute inset-0 bg-cover bg-center z-1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative text-white px-4 gap-4 py-3">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">{title}</h1>
      <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto text-gray-300">
        {subtitle}
      </p>
      <button className="mt-8 px-8 py-3 text-lg font-semibold bg-nexus-green-700 text-white rounded-lg shadow-2xl hover:scale-105 transition">
        {ctaText}
      </button>
    </div>
  </div>
);
