import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page index
import Home from "./pages/General-landing-page/index";
import FAQ from "./pages/Faq/index";
// import LandingA from "./pages/LandingA";
// import LandingB from "./pages/LandingB";
// import LandingC from "./pages/LandingC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/faq" element={<FAQ />} />
      
      </Routes>
    </Router>
  );
};

export default App;
