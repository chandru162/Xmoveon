import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">API</li>
              <li className="hover:text-white cursor-pointer">Company</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Resources</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Status</li>
              <li className="hover:text-white cursor-pointer">Guides</li>
              <li className="hover:text-white cursor-pointer">Changelog</li>
              <li className="hover:text-white cursor-pointer">News</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Connect
            </h3>
            <p className="text-sm mb-4">
              Reach out for demos, partnerships, or support questions.
            </p>

            <div className="text-sm space-y-2 leading-relaxed">
              <p>
                Address: 1A, Spectrum Building Phase-2,
                Pappanaickenpalayam, Coimbatore-641037,
                Tamil Nadu, India
              </p>
              <p>Email: info@taxiappzlogic.com</p>
              <p>Phone: +91 99490 06255, +91 99448 02558</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © 2024 On-Demand Food Delivery App Solution. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookie Settings
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
