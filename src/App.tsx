import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page entry components
import Home from "./pages/General-landing-page/index";
import Signup from "./pages/General-onbording/Signup";
import Login from "./pages/General-onbording/Login";
// import Farmer from "./pages/Farmer-landing-page/Navbar"
import FarmerPage from "./pages/Farmer-landing-page/FarmerPage";
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/farmer" element={<FarmerPage/>} />
      
      </Routes>
    </Router>
  );
};

export default App;
