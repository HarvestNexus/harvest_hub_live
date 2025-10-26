import { useState, useEffect } from "react";
import { ArrowRightCircle } from "lucide-react";

const slides = [
  { image: "/images/benefit1.png" },
  { image: "/images/slide4.png" },
];

export default function TwoSlideSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl mt-8 sm:mt-16 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 translate-x-0 z-20"
                : "opacity-0 translate-x-full z-10"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl brightness-50"
              />
              <div className="absolute inset-0 bg-black/60 rounded-xl sm:rounded-2xl" />
            </div>
          </div>
        ))}

        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-relaxed drop-shadow-lg max-w-5xl mx-auto"
            style={{
              fontFamily: "Nunito Sans",
              fontWeight: 700,
            }}
          >
            Ready To Sell Directly Or Get Fresh Produce
          </h2>

          <button
            className="flex items-center justify-center gap-3 bg-green-700 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300 hover:bg-[#AD895F] shadow-lg w-full max-w-xs sm:max-w-none sm:w-auto text-base sm:text-lg"
            style={{ minHeight: "55px", maxWidth: "280px" }}
          >
            <span>Get Started Now</span>
            <ArrowRightCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}