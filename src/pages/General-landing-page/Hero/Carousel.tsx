import { useState, useEffect } from "react";

type Slide = {
  image: string;
  heading: string;
  subtext: string;
};

const slides: Slide[] = [
  {
    image: "/images/slide1.png",
    heading: "Connects Farmers and Buyers Directly",
    subtext:
      "Store your harvest securely, sell directly to buyers, and access fresh farm produce with ease, all powered by smart storage and a seamless direct sales system.",
  },
  {
    image: "/images/slide2.png",
    heading: "Empowering Farmers, Connecting Communities",
    subtext:
      "We bring buyers and farmers together to create a sustainable marketplace built on trust and transparency.",
  },
  {
    image: "/images/slide3.png",
    heading: "Harvest Quality. Support Local.",
    subtext:
      "Every purchase helps local farmers grow their businesses while ensuring you get the freshest produce available.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mb-4 leading-tight">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-6">{slide.subtext}</p>
            <button className="relative bg-green-600 text-white font-semibold py-3 px-8 rounded-lg overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 bg-[#AD895F] rounded-full group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></div>
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="4"
            viewBox="0 0 30 4"
            className={`transition-all duration-500 ${
              index === current ? "fill-[#AD895F]" : "fill-gray-400"
            }`}
          >
            <rect width="30" height="4" rx="2" />
          </svg>
        ))}
      </div>
    </div>
  );
}
