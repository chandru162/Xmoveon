import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LandingPage from './pages/LandingPage';
import HomePage from './pages/Home';
import Navbar from './Navbar/Navbar';
import GetStart from '../src/pages/GetStart/index'

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />    
          <Route path="/getstart" element={<GetStart />} />    
          {/* <Route path="/" element={<HomePage />} />    */}


         
      </Routes>
    </Router>
    
    </>

  );
};

export default AppRoutes;
