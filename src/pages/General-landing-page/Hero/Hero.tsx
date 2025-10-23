import Navbar from "../Navbar";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen">
      <Carousel />
      <div className="absolute top-5 left-0 w-full z-20 bg-transparent">
        <Navbar />
      </div>
    </section>
  );
}
