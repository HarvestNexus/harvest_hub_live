import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page index
import Home from "./pages/General-landing-page/index";
import Farmer from "./pages/Farmer-landing-page/FarmerPage"
// import FAQ from "./pages/Faq/index";
import StorageFacilities from "./pages/Logistics-landing-page/StorageFacilities";
import Logistics from "./pages/Logistics-landing-page/Logistics";
import PaymentFailed from "./pages/Extra-Pages/Payment-Failed";
import PaymentProcessing from "./pages/Extra-Pages/Payment-Processing";
import PaymentSucessful from "./pages/Extra-Pages/Payment-Sucessful";
// import AboutUs from "./pages/About-Us/index";
// import ContactUs from "./pages/Contact-Us/index";
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="Farmer" element={<Farmer/>} />
        <Route path="faq" element={<PaymentSucessful />} />
        <Route path="StorageFacilities" element={<StorageFacilities />} />
        <Route path="Logistics" element={<Logistics />} />
      
      </Routes>
    </Router>
  );
};

export default App;
