import Navbar from "../Navbar";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100vh] min-h-[500px] flex flex-col"
    >
      <div className="absolute inset-0 w-full h-full">
        <Carousel />
      </div>

      <div
        className="absolute top-0 left-0 w-full z-20 bg-transparent px-4 sm:px-6 md:px-10 py-4"
      >
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-black/20 md:bg-transparent pointer-events-none" />
    </section>
  );
}
