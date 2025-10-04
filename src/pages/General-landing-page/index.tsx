import React from "react";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import AboutSection from "./About/About";


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
