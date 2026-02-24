import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LandingPage from './pages/LandingPage';
import HomePage from './pages/Home';
import Navbar from './Navbar/Navbar';
import GetStart from '../src/pages/GetStart/index'
import FooterSection from './pages/LandingPage/FooterSection';
import Service from './pages/Service';

import TaxiPage from '../src/pages/Features/Taxi'
import Delivery from '../src/pages/Features/Delivery'

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/getstart" element={<GetStart />} />
          <Route path="/restaurant" element={<HomePage />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/taxi" element={<TaxiPage />} />
          <Route path="/delivery" element={<Delivery />} />

        </Routes>
      </Router>
      <FooterSection />
    </>

  );
};

export default AppRoutes;
