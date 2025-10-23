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
    <div
      className="relative mx-auto overflow-hidden rounded-2xl mt-16"
      style={{
        width: "1280px",
        height: "584px",
      }}
    >

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 translate-x-full z-10"
            }`}
        >

          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl brightness-50"
            />

            <div className="absolute inset-0 bg-black/60 rounded-2xl" />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white space-y-10 px-6">
        <h2
          className="text-4xl font-bold text-white leading-relaxed drop-shadow-lg"
          style={{
            fontFamily: "Nunito Sans",
            fontWeight: 700,
          }}
        >
          Ready To Sell Directly Or Get Fresh <br /> Produce
        </h2>

        <button
          className="flex items-center justify-center gap-4 bg-green-700 text-white font-medium rounded-xl px-10 py-4 transition-all duration-300 hover:bg-[#AD895F] shadow-lg"
          style={{ width: "271px", height: "67px" }}
        >
          <span className="text-base">Get Started Now</span>
          <ArrowRightCircle size={22} />
        </button>
      </div>
    </div>
  );
}
