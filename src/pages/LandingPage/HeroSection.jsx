import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import DemoPopup from './DemoPopup';

/* ✅ Vite image imports */
import Card1 from '../../../public/assets/Card3.png';
import Card2 from '../../../public/assets/Card2.png';
import Card3 from '../../../public/assets/Card3.png';

import { QatarFlag, USAFlag, IndiaFlag } from '../../svg/svgIcons';

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  const locations = [
    {
      Title: '7 days',
      phone: '+97455971077',
      bgImage: Card1,
      textClass: 'text-black',
      span: 'From idea to launch',
    },
    {
      Title: '6+ Service categories available',
      bgImage: Card2,
      textClass: 'text-white',
      span: '',
    },
    {
      Title: '100% Fully customizable',
      bgImage: Card3,
      textClass: 'text-black',
      span: '',
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
        {/* Main Hero Wrapper */}
        <div className="bg-white rounded-[40px] py-6 md:py-10 mt-4 md:mt-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            
            {/* Left Side: Stays consistent in PC */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <h1 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.2] text-text-primary mb-6">
                  Launch Your On- <br className="hidden lg:block" />
                  Demand{' '}
                  <span className="bg-[#E4FFD4]">
                    Super <br className="hidden lg:block" />
                    App in 7 Days{' '}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-text-secondary mb-6 max-w-md">
                  Build and deploy fully customizable service applications without any coding.
                  Everything you need to start and scale your on-demand business instantly.
                </p>

                {/* Badges/Tags */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <img src="/images/img_moneybag.svg" className="w-5 h-5" alt="Money" />
                    <span className="text-sm text-text-secondary font-medium">$10B+ Processed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/img_code.svg" className="w-5 h-5" alt="No Code" />
                    <span className="text-sm text-text-secondary font-medium">No Coding Required</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <img src="/images/img_headset.svg" className="w-5 h-5" alt="Support" />
                  <span className="text-sm text-text-secondary font-medium">24/7 Support</span>
                </div>

                <Button
                  text="Try Our Demo"
                  text_font_size="16px"
                  text_font_weight="600"
                  text_color="#0f0f0f"
                  fill_background_color="#9cee69"
                  border_border_radius="32px"
                  padding="12px 28px"
                  onClick={() => setShowDemo(true)}
                />
              </div>
            </div>

            {/* Right Side: Visuals and Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
              <div className="w-full">
                <img
                  src="/assets/mobile.png"
                  alt="Platform showcase"
                  className="w-full h-auto rounded-[28px] shadow-sm"
                />
              </div>

              {/* Cards Grid: 1 col on Mobile, 3 cols on Tablet/PC */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${loc.bgImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: '100% 100%',
                    }}
                    className={`p-5 rounded-[15px] min-h-[100px] relative flex flex-col justify-center ${loc.textClass}`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-[14px] lg:text-[16px] leading-tight">
                        <span className="font-extrabold">{loc.Title?.split(' ')[0]}</span>{' '}
                        {loc.Title?.split(' ').slice(1).join(' ')}
                      </h3>
                      {loc.span && <p className="text-[12px] mt-1 opacity-90">{loc.span}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      {showDemo && <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />}
    </section>
  );
};

export default HeroSection;