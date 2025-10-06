import React from "react";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import AboutSection from "./About/About";
import BenefitsSection from "./Benefits/BenefitsSection";
import FAQSection from "./Faq/FAQSection"; 


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
