import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LandingPage from './pages/LandingPage';
import HomePage from './pages/Home';
import FooterSection from './pages/LandingPage/FooterSection';
import GetStart from '../src/pages/GetStart/index'

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/rgb" element={<HomePage />} />
          <Route path="/features" element={<LandingPage />} />
          <Route path="/" element={<GetStart />} />
        </Routes>
      </Router>
      <FooterSection />
    </>
  );
};

export default AppRoutes;
