import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page index
import Home from "./pages/General-landing-page/index";
import Farmer from "./pages/Farmer-landing-page/FarmerPage"
import FAQ from "./pages/Faq/index";
import StorageFacilities from "./pages/Logistics-landing-page/StorageFacilities";
import Logistics from "./pages/Logistics-landing-page/Logistics";
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="Farmer" element={<Farmer/>} />
        <Route path="faq" element={<FAQ />} />
        <Route path="StorageFacilities" element={<StorageFacilities />} />
        <Route path="Logistics" element={<Logistics />} />
      
      </Routes>
    </Router>
  );
};

export default App;
