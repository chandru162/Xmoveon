import React, { useState } from 'react';
import Button from '../components/ui/Button';
import DemoPopup from "../pages/LandingPage/DemoPopup";

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setfeaturesOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1470px] mx-auto px-4 sm:px-6 lg:px-20  xl:px-24">

        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-center py-7 xl:flex-row">
          <div className="flex items-center ">
            <img
              src="/images/img_xmoveon.svg"
              alt="Xmoveon"
              className="w-[120px] sm:w-[140px] lg:w-[162px] h-5 lg:ps-[10] md:w-[150px] xl:w-[180px] xl:ps-[14]"
            />
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* NAV */}
          <nav
            className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-16 xl:gap-20 mt-4 lg:mt-0 ms-4 lg:ms-16 xl:ms-20`}
          >
            <a className="text-base font-medium text-text-secondary" href="/">Home</a>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setfeaturesOpen(true)}
              onMouseLeave={() => setfeaturesOpen(false)}
            >
              <button className="text-base font-medium text-text-secondary flex items-center gap-1">
                features
                <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-0 mt-3 w-[240px] bg-white shadow-lg rounded-md py-3 z-50">
                  <a className="block px-5 py-2 text-sm text-text-secondary hover:bg-gray-100">
                   Restaurant
                  </a>
                  <a className="block px-5 py-2 text-sm text-text-secondary hover:bg-gray-100">
                    Service
                  </a>
                  <a className="block px-5 py-2 text-sm text-text-secondary hover:bg-gray-100">
                     Taxi
                  </a>
                  <a className="block px-5 py-2 text-sm text-text-secondary hover:bg-gray-100">
                    Delivery 
                  </a>
                </div>
              )}
            </div>
        
            <a className="text-base font-medium text-text-secondary">Blog</a>
            <a className="text-base font-medium text-text-secondary" >Contact Us</a>
          </nav>

          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex mt-4 md:mt-8 mx-2 md:mx-4 lg:mt-0`}>
           <a href="/getstart">
            <Button
              text="Get Started"
              text_font_size="16px"
              text_font_weight="600"
              text_color="#0f0f0f"
              fill_background_color="#9cee69"
              border_border_radius="32px"
              padding="12px 24px"
              text_align="center"
            />
           </a>
          </div>
        </header>
        

     </div>
     </section>
  )}
export default Navbar;
