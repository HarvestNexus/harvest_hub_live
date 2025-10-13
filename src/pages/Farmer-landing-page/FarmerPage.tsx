import React from "react";
import Navbar from "./Navbar"; // adjust path as needed
import FarmerHero from "./FarmerHero";
import AboutUs from "./Aboutus";
import Services from "./Services";
import HowItWorks from "./Howitworks";
import StorageFacility from "./Storagefacility";
import FAQ from "./FAQ";
import FarmerCTA from "./FarmerCTA";

const FarmerPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FarmerHero />
      <AboutUs />
      <Services />
      <HowItWorks />
      <StorageFacility/>
      <FarmerCTA/>
      <FAQ />
      
    </div>
  );
};

export default FarmerPage;
