import React, { useState, useRef, useEffect } from "react";
import Button from "../components/ui/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 w-full bg-white border-b z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/images/img_xmoveon.svg"
              alt="Xmoveon"
              className="w-[120px] sm:w-[140px] lg:w-[160px]"
            />
          </div>

          {/* DESKTOP / LAPTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-600">
            <a href="/" className="hover:text-black">Home</a>

            {/* FEATURES DROPDOWN */}
            <div
              ref={featuresRef}
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
            >
              <button
                onClick={() => setFeaturesOpen(true)}
                className="flex items-center gap-1 hover:text-black"
              >
                Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-0 mt-3 w-[220px] bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/restaurant" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Restaurant
                  </a>
                  <a href="/service" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Service
                  </a>
                  <a href="/taxi" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Taxi
                  </a>
                  <a href="/delivery" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Delivery
                  </a>
                </div>
              )}
            </div>

            <a href="/blog" className="hover:text-black">Blog</a>
            <a href="/contact" className="hover:text-black">Contact</a>
          </nav>

          {/* CTA (DESKTOP + TABLET) */}
          <div className="hidden md:flex items-center gap-4">
           <a href="/getstart">
            <Button
              text="Get Started"
              text_font_size="14px"
              text_font_weight="600"
              text_color="#0f0f0f"
              fill_background_color="#9CEE69"
              border_border_radius="6px"
              padding="10px 18px"
              text_align="center"
            />
            </a>
          </div>

          {/* HAMBURGER (TABLET + MOBILE) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* MOBILE / TABLET MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 text-sm font-medium text-gray-700">

            <a href="/" className="block">Home</a>

            {/* MOBILE FEATURES DROPDOWN */}
            <div>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center justify-between w-full"
              >
                Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {featuresOpen && (
                <div className="mt-2 ml-3 space-y-2">
                  <a href="/restaurant" className="block">Restaurant</a>
                  <a href="/service" className="block">Service</a>
                  <a href="/taxi" className="block">Taxi</a>
                  <a href="/delivery" className="block">Delivery</a>
                </div>
              )}
            </div>

            <a href="/blog" className="block">Blog</a>
            <a href="/contact" className="block">Contact</a>

            <div className="pt-4">
              <a href="/getstart">
              <Button
                text="Get Started"
                text_font_size="14px"
                text_font_weight="600"
                text_color="#0f0f0f"
                fill_background_color="#9CEE69"
                border_border_radius="6px"
                padding="12px 18px"
                text_align="center"
              />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;