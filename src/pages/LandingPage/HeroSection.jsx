import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import DemoPopup from "./DemoPopup";


const HeroSection = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 md:px-12 xl:px-24">

        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-center py-7 xl:flex-row">
          <div className="flex items-center">
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

          <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-4 lg:mt-0 ms-4 lg:ms-6`}>
            <a className="text-base font-medium text-text-secondary" href='/' >Home</a>
            <a className="text-base font-medium text-text-secondary" >Features</a>
            <a className="text-base font-medium text-text-secondary">Blog</a>
            <a className="text-base font-medium text-text-secondary">Contact Us</a>
          </nav>

          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex mt-4 lg:mt-0 md:mt-0 `}>

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
                {/* <img src="/images/img_iconoirarrowtr_black_900"></img> */}
          </div>
        </header>

        {/* Hero */}
        <div className="bg-white rounded-[40px] p-6 sm:p-6 md:p-6 lg:p-8 mt-8 xl:p-10">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">

            {/* Left */}
            <div className="w-full lg:w-1/2 relative">
              {/* <img
                src="/images/img_highlight_text.svg"
                alt=""
                className="absolute top-[78px] left-0 w-[260px] sm:w-[320px] lg:w-[360px] z-0"
              /> */}

              <div className="relative ">
                <h1 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.2] text-text-primary mb-6 ">
                  Launch Your On- <br />
                  Demand <span className='bg-[#E4FFD4]'>Super <br />
                  App in 7 Days </span>
                </h1>

                <p className="text-sm sm:text-base text-text-secondary mb-6 max-w-md ">
                  Build and deploy fully customizable service applications without any coding.
                  Everything you need to start and scale your on-demand business instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 ">
                  <div className="flex items-center gap-2 ">
                    <img src="/images/img_moneybag.svg" className="w-5 h-5" />
                    <span className="text-sm text-text-secondary">$10B+ Processed</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/images/img_code.svg" className="w-5 h-5" />
                    <span className="text-sm text-text-secondary">No Coding Required</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8 ">
                  <img src="/images/img_headset.svg" className="w-5 h-5" />
                  <span className="text-sm text-text-secondary">24/7 Support</span>
                </div>
                
                <Button
                  text="Try Our Demo"
                  text_font_size="16px"
                  text_font_weight="600"
                  text_color="#0f0f0f"
                  fill_background_color="#9cee69"
                  border_border_radius="32px"
                  padding="12px 24px"
                  text_align="center"
                  onClick={() => setShowDemo(true)}
                  
                /> 
                
              </div>
            </div>

            {/*Right */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 xl:gap-10 ">
              <img
                src="/public/assets/mobile.png"
                alt="Platform showcase"
                className="w-full h-auto rounded-[28px]"
              />

              {/*  Cards */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 h-5 xl:gap-6">
                
                <div className="bg-[#e4ffd4] rounded-[20px] h-[96px] flex-1 flex items-center  px-4">
                  <div>
                    <div className="text-[20px] lg:text-[20px] md:text-[13px]  xl:text-[24px] font-bold w-21">7 Days <br /><span className='text-[12px] font-normal py-4'>From idea to launch</span></div>
                  </div>
                </div>

                <div className="bg-black rounded-[20px] h-[96px]  flex-1 flex items-center px-4  text-white">
                  <div>
                    <div className="flex gap-1 py-1">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-4 h-4 bg-white rounded" />
                      ))}
                    </div>
                    <div className="text-[17px] md:text-[13px] xl:text -[13px] w-21 lg:text-[13px]"><span className='text-[17px] lg:text-[13px] xl:text-[13px] md:text-[13px] font-bold'>6+  Service  </span> <br /> categories available</div>
                  </div>
                </div>

                <div className="bg-[#9cee69] rounded-[20px] h-[96px]  flex-1 flex items-center px-5 ">
                  <div>
                    <div className="flex gap-1 py-1">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-4 h-4 bg-white rounded" />
                      ))}
                    </div>
                    <div className="text-[17px] w-21 lg:text-[13px] xl:text-[13px]"> <span className='text-[17px] font-bold'>100% Fully </span> customizable</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
          {showDemo && <DemoPopup onClose={() => setShowDemo(false)} />}
    </section>
  );
};

export default HeroSection;



