import React from "react";
import Footer from "../../components/Footer";
import FAQPage from "./FAQ";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
     <div className="absolute top-2 left-0 w-full z-20 bg-transparent">
        <Navbar />
      </div>
      <FAQPage />
      <Footer />
    </>
  );
};

export default Home;
