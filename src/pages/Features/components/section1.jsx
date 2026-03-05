import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import DemoPopup from '../../LandingPage/DemoPopup';

const Section1 = ({ data }) => {

  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white pt-10 pb-16 md:pt-16 md:pb-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col pt-4 w-full">
          
          <h3 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold leading-[1.15]">
            {data.title2} 
          </h3>

          <div className="flex">
            <span className="bg-[#E4FFD4] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold leading-[1.15] px-0 md:px-0 py-2 md:py-5 lg:py-2 rounded-sm md:rounded-md text-[#111827] inline-block">
              {data.highlightText1}
            </span>
          </div>

          <div className="flex">
            <span className="bg-[#E4FFD4] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold  rounded-sm md:rounded-md  text-[#111827] inline-block">
              {data.highlightText2}
            </span>
          </div>

          <div className="mt-4 md:mt-6 space-y-6 md:space-y-8">
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              {data.subTitle}
            </p>

            <p className="text-sm sm:text-base lg:text-base text-[#4B5563] max-w-[540px]">
              {data.description}
            </p>
            
            {/* Desktop Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button
                text="Try Our Demo"
                text_font_size="16px"
                text_font_weight="600"
                text_color="#0f0f0f"
                fill_background_color="#9cee69"
                border_border_radius="32px"
                padding="14px 28px"
                text_align="center"
                onClick={() => setShowDemo(true)}
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full lg:max-w-[620px] flex flex-col gap-8">
          
          <div className="relative rounded-[30px] md:rounded-[55px] overflow-hidden shadow-sm border border-gray-50 aspect-[1.2/1] lg:aspect-auto lg:h-[430px]">
            <img src={data.image} alt="Visual" className="w-full h-full object-cover" />
          </div>

        </div>
        
      </div>

      <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />

    </section>
  );
};

export default Section1;