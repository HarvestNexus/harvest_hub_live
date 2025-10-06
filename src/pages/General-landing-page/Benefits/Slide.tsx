import { useState, useEffect } from "react";
import { ArrowRightCircle } from "lucide-react";

const slides = [
    { image: "/images/benefit1.png" },
    { image: "/images/slide4.png" },
];

export default function TwoSlideSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(current === 0 ? "right" : "left");
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div
            className="relative mx-auto overflow-hidden rounded-2xl mt-16"
            style={{
                width: "1280px",
                height: "584px",
                opacity: 1,
            }}
        >
            {slides.map((slide, index) => {
                const isActive = index === current;
                const isPrev =
                    index === (current === 0 ? slides.length - 1 : current - 1);

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${isActive
                                ? "translate-x-0 z-20"
                                : direction === "right"
                                    ? "-translate-x-full"
                                    : "translate-x-full"
                            } ${isPrev ? "z-10" : "z-0"}`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover brightness-50 rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                    </div>
                );
            })}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 space-y-10">
                <h2
                    className="font-bold text-white text-center"
                    style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "54px",
                        lineHeight: "160%",
                        letterSpacing: "0%",
                    }}
                >
                    Ready To Sell Directly Or Get Fresh <br />Produce
                </h2>

                <button
                    className="
            flex items-center justify-center gap-4 bg-green-700
            text-white font-medium rounded-xl px-10 py-4
            transition-all duration-300 hover:bg-[#AD895F]
          "
                    style={{ width: "271px", height: "67px" }}
                >
                    <span className="text-base">Get Started Now</span>
                    <ArrowRightCircle size={22} />
                </button>
            </div>
        </div>
    );
}
