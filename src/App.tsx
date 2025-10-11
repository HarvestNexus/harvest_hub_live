import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page entry components
import Home from "./pages/General-landing-page/index";
import Logistics from "./pages/Logistics-landing-page/Logistics"
import StorageFacilities from "./pages/Logistics-landing-page/StorageFacilities"
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/services" element={<Logistics />} />  
        <Route path="/service2" element={<StorageFacilities />} />  
      
      </Routes>
    </Router>
  );
};

export default App;
