import React from 'react';

const FooterSection = () => {
  const productLinks = [
    'Features',
    'Integrations', 
    'Documentation',
    'API',
    'Company'
  ];

  const aboutLinks = [
    'Careers',
    'Press',
    'Contact', 
    'Resources'
  ];

  const supportLinks = [
    'Community',
    'Status',
    'Guides',
    'Changelog',
    'News'
  ];

  return (
    <footer className="w-full bg-text-primary rounded-[8px]  text-white py-6 sm:py-8 lg:py-10 xl:py-12">
      <div className="w-full lg:max-w-[1260px] md:max-w-[1140px] max-w-[1020px] xl:max-w-[1460px] mx-auto px-4 sm:px-6 md:px-6 lg:px-0 ">
        <div className="bg-text-primary p-6 sm:p-8 lg:p-8 md:p-10  mx-0 lg:mx-0  md:mx-12 xl:mx-0">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12 lg:mb-16">
            {/* Left Section - Links */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {/* Product Column */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
                    Product
                  </h3>
                  <nav className="space-y-4">
                    {productLinks?.map((link, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="block text-sm sm:text-base text-[#fafafa] hover:text-primary-background transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* About Column */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6  mx-4 lg:mx-4">
                    About
                  </h3>
                  <nav className="space-y-4 mx-4 lg:mx-4 ">
                    {aboutLinks?.map((link, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="block text-sm sm:text-base text-[#fafafa] hover:text-primary-background transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Support Column */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 mx-4 lg:mx-4">
                    Support
                  </h3>
                  <nav className="space-y-4 mx-4 lg:mx-4">
                    {supportLinks?.map((link, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="block text-sm sm:text-base text-[#fafafa] hover:text-primary-background transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Section - Contact */}
            <div className="lg:w-1/2  mx-0 mt-0 lg:mt-8 lg:mx-20 xl:mt-8 xl:mx-20 ">
              <h3 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold text-white mb-4 leading-tight ">
                Connect
              </h3>
              <p className="text-sm sm:text-base text-[#fafafa] mb-6 leading-relaxed mt-4 lg:mt-8">
                Reach out for demos, partnerships, or support questions.
              </p>
              <div className="text-sm sm:text-base text-[#fafafa] leading-relaxed space-y-3">
                <div>
                  <p className="font-semibold mb-1">Address:
                  
                    1A, Spectrum building Phase - 2,<br />
                    Pappanaicken palayam,<br />
                    Coimbatore-641037,<br />
                    Tamil Nadu, India.
                </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Email:info@nplustechnologies.com</p>
                </div>
                <div>
                  <p className="font-semibold mb-1 ">Phone Number    :+91 99409 09625  <br />
                                                        <span className='ms-0 lg:ms-36 '>+91 99448 20558 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-[#444444] pt-8">
            <p className="text-xs sm:text-sm text-white text-center lg:text-left">
              © 2024 On-Demand Food Delivery App Solution. All Rights Reserved. Privacy Policy Terms Of Service Cookie Settings
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;