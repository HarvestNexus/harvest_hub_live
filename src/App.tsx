import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page index
import Home from "./pages/General-landing-page/index";
import Farmer from "./pages/Farmer-landing-page/FarmerPage"
import CartPage from "./pages/Market/CartPage";
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="Farmer" element={<Farmer/>} />
        <Route path="cart" element={<CartPage/>} />
      
      </Routes>
    </Router>
  );
};

export default App;
