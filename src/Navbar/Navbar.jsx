import React, { useState, useRef, useEffect } from "react";
import Button from "../components/ui/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const featuresRef = useRef(null);

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b z-[100]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-[80px]">
          
          {/* LOGO */}
          <div className="flex items-center ">
            <a href="/">
              <img src="/images/img_xmoveon.svg" alt="Xmoveon" className="w-[130px] sm:w-[150px] lg:w-[170px]" />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center  gap-12 text-[16px] font-semibold text-[#4B5563] ">
            <a href="/" className="hover:text-[#58bd19] transition-colors ">Home</a>

            {/* FEATURES DROPDOWN */}
            <div ref={featuresRef} className="relative group ">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className={`flex items-center gap-1 hover:text-[#58bd19] transition-colors ${featuresOpen ? 'text-black' : ''}`}
              >
                Features
                <svg className={`w-4 h-4 transition-transform duration-300 ${featuresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop Dropdown Smooth Animation */}
              <div className={`absolute top-full left-0 mt-2 w-[220px] bg-white shadow-xl rounded-md py-2 border border-gray-100 transition-all duration-300 ease-out 
                ${featuresOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
                {['Restaurant', 'Service', 'Taxi', 'Delivery'].map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} className="block px-6 py-2.5 text-sm hover:bg-[#D4FFB2] hover:rounded-sm transition-all font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="/blog" className="hover:text-[#58bd19] transition-colors ">Blog</a>
            <a href="/contact" className="hover:text-[#58bd19] transition-colors ">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/getstart">
              <Button text="Get Started" text_font_size="15px" text_font_weight="700" text_color="#000000" fill_background_color="#9CEE69" border_border_radius="50px" padding="12px 28px" text_align="center" />
            </a>
          </div>

          {/* HAMBURGER */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-black transition-transform active:scale-90">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className={`transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              {mobileMenuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU - Smooth Height Animation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden grid ${mobileMenuOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="min-h-0 space-y-5 text-[16px] font-bold text-gray-800 pt-4">
            <a href="/" className="block border-b border-gray-100 pb-2">Home</a>

            {/* MOBILE FEATURES */}
            <div className="space-y-2">
              <button onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)} className="flex items-center justify-between w-full border-b  border-gray-100 pb-2">
                Features
                <svg className={`w-5 h-5 transition-transform duration-300 ${mobileFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`ml-4 space-y-4 border-l-2 border-[#9cee69] pl-4 overflow-hidden  transition-all duration-500 ease-in-out grid ${mobileFeaturesOpen ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'}`}>
                <div className="min-h-0 space-y-4">
                  <a href="/restaurant" className="block text-gray-600">Restaurant</a>
                  <a href="/service" className="block text-gray-600">Service</a>
                  <a href="/taxi" className="block text-gray-600">Taxi</a>
                  <a href="/delivery" className="block text-gray-600">Delivery</a>
                </div>
              </div>
            </div>

            <a href="/blog" className="block border-b border-gray-100 pb-2">Blog</a>
            <a href="/contact" className="block border-b border-gray-100 pb-2">Contact</a>

            <div className="pt-4">
              <a href="/getstart">
                <Button text="Get Started" text_font_size="16px" text_font_weight="700" text_color="#000000" fill_background_color="#9CEE69" border_border_radius="50px" padding="14px 20px" text_align="center" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;