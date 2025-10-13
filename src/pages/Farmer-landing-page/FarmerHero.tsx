

const FarmerHero = () => {
  const slide = {
    tag: "Reducing postharvest waste",
    title: "Grow And Sell Directly to Buyers",
    subtitle:
      "Turn your harvest into income faster by selling directly to buyers — no middlemen, no waste.",
    buttonText: "Sell Now",
    image: "/images/herof.png", // Update this path to match your image
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-600 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left space-y-5">
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm inline-block">
            🌱 {slide.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-100">{slide.subtitle}</p>
          <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
            {slide.buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="max-w-lg mt-8 md:mt-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="  w-full h-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FarmerHero;