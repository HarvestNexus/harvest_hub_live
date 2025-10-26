import React from "react";
import Footer from "../../components/Footer";
import FAQPage from "./FAQ";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="px-4 sm:px-6 md:px-10">
          <Navbar />
        </div>
      </div>
      <main className="pt-20 sm:pt-24 md:pt-28">
        <div className="px-4 sm:px-6 md:px-10">
          <FAQPage />
        </div>
      </main>
      <footer className="mt-10 sm:mt-16 md:mt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
