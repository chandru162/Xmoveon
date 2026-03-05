import React from "react";

const FooterSection = () => {
  const productLinks = [
    "Features",
    "Integrations",
    "Documentation",
    "API",
    "Company",
  ];

  const aboutLinks = ["Careers", "Press", "Contact", "Resources"];

  const supportLinks = ["Community", "Status", "Guides", "Changelog", "News"];

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-20">

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-24">

          {/* LEFT – LINKS */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

              {/* PRODUCT */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Product</h3>
                <ul className="space-y-4 text-sm sm:text-base ">
                  {productLinks.map((item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ABOUT */}
              <div>
                <h3 className="text-xl font-semibold mb-6">About</h3>
                <ul className="space-y-4 text-sm sm:text-base">
                  {aboutLinks.map((item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SUPPORT */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Support</h3>
                <ul className="space-y-4 text-sm sm:text-base  ">
                  {supportLinks.map((item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT – CONNECT */}
          <div className="flex-1">
            <h3 className="text-[26px]
                      sm:text-[32px]
                      md:text-[40px]
                      lg:text-[48px]
                      xl:text-[52px]
                      font-semibold
                      leading-[1.15]
                       mb-4">
              Connect
            </h3>
            <p className="text-sm sm:text-base  mb-8 max-w-md">
              Reach out for demos, partnerships, or support questions.
            </p>

            <div className="text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                <span className=" text-white">Address:</span>
                <br />
                1A, Spectrum building Phase - 2,
                <br />
                Pappanaicken palayam,
                <br />
                Coimbatore-641037,
                <br />
                Tamil Nadu, India.
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@nplustechnologies.com
              </p>

              <p>
                <span className="font-semibold text-white">Phone Number:</span>
                <br />
                +91 99409 09625
                <br />
                +91 99448 20558
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-14 pt-6">
          <p className="text-xs sm:text-sm  text-center lg:text-left">
            © 2024 On-Demand Food Delivery App Solution. All Rights Reserved.
            Privacy Policy · Terms Of Service · Cookie Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;