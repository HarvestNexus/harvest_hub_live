import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page index
import Home from "./pages/General-landing-page/index";

import Logistics from "./pages/Logistics-landing-page/Logistics"
import StorageFacilities from "./pages/Logistics-landing-page/StorageFacilities"

import Farmer from "./pages/Farmer-landing-page/FarmerPage"


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  

        <Route path="/service1" element={<Logistics />} />  
        <Route path="/service2" element={<StorageFacilities />} />  

        <Route path="Farmer" element={<Farmer/>} />

      
      </Routes>
    </Router>
  );
};

export default App;
