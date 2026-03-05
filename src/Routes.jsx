import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import GetStart from "./pages/GetStart";
import FooterSection from "./pages/LandingPage/FooterSection";
import Service from "./pages/Service";
import TaxiPage from "./pages/Features/Taxi";
import Delivery from "./pages/Features/Delivery";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstart" element={<GetStart />} />
        <Route path="/food-delivery-app" element={<HomePage />} />
        <Route path="/service-marketplace" element={<Service />} />
        <Route path="/ondemand-taxi-app" element={<TaxiPage />} />
        <Route path="/ondemand-delivery-app" element={<Delivery />} />
      </Routes>

      <FooterSection />
    </Router>
  );
};

export default AppRoutes;