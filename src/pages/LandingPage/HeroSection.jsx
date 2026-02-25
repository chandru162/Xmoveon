import React, { useState } from "react";
import Button from "../../components/ui/Button";
import DemoPopup from "./DemoPopup";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-14">

        {/* HERO CARD */}
        <div className="bg-white lg:rounded-[40px] py-8 sm:py-10 lg:p-12 mt-4 lg:mt-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3
                  className="
                    text-[26px]
                    sm:text-[32px]
                    md:text-[40px]
                    lg:text-[48px]
                    xl:text-[52px]
                    font-semibold
                    leading-[1.15]
                    text-text-primary
                  "
                >
                  Launch Your  On- <br />Demand
                <span
                    className="
                      inline-block
                      bg-[#E4FFD4]
                      rounded-md
                      px-2
                      whitespace-nowrap
                    "
                  > Super</span>

                  <span
                    className="
                      inline-block
                      bg-[#E4FFD4]
                      rounded-md
                      whitespace-nowrap
                    "
                  >
                   App in 7 Days
                  </span>
                </h3>
              

              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-md mx-auto lg:mx-0">
                Build and deploy fully customizable service applications without
                any coding. Everything you need to start and scale your
                on-demand business instantly.
              </p>

              {/* META */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <img src="/images/img_moneybag.svg" alt="" className="w-5 h-5" />
                  <span className="text-sm text-text-secondary">
                    $10B+ Processed
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img src="/images/img_code.svg" alt="" className="w-5 h-5" />
                  <span className="text-sm text-text-secondary">
                    No Coding Required
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-center lg:justify-start gap-2">
                <img src="/images/img_headset.svg" alt="" className="w-5 h-5" />
                <span className="text-sm text-text-secondary">
                  24/7 Support
                </span>
              </div>

              <div className="mt-6 flex justify-center lg:justify-start">
                <Button
                  text="Try Our Demo"
                  text_font_size="16px"
                  text_font_weight="600"
                  text_color="#0f0f0f"
                  fill_background_color="#9cee69"
                  border_border_radius="32px"
                  padding="14px 28px"
                  onClick={() => {
                  console.log("Try Demo clicked"); 
                  setShowDemo(true);
                }}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">

              {/* MOBILE IMAGE */}
              <img
                src="/assets/launch.png"
                alt="Platform showcase"
                className="
                  w-full
                  max-w-[350px]
                  sm:max-w-[360px]
                  md:max-w-[500px]
                  lg:max-w-[500px]
                  xl:max-w-[580px]
                  rounded-[20px]
                "
              />

              {/* STATS CARDS  */}
              <div className="w-full flex flex-col sm:flex-row gap-4 ">

                {/* CARD 1 */}
                <div className="relative flex-1 h-[90px] lg:h-[80px] rounded-[20px] overflow-hidden flex items-center px-4 ">
                  <img
                    src="/assets/Card3.png"
                    alt=""
                    className="absolute inset-0 h-[225px] w-full lg:w-full lg:h-full  md:w-full md:h-[110px] xl:w-full xl:h-[100px] object-cover "
                  />
                  <div className="relative p-12  lg:p-1 md:p-0 xl:p-0">
                    <p className="font-bold text-[32px] md:text-[16px]  lg:text-[14px]  xl:text-[16px] text-black ">
                      7 Days
                    </p>
                    <p className="text-[22px] md:text-[12px]  lg:text-[8px]  xl:text-[14px] font-medium ">
                      From idea to launch
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="relative flex-1 h-[90px] lg:h-[80px] rounded-[20px] overflow-hidden flex items-center px-4 ">
                  <img
                    src="/assets/Card2.png"
                    alt=""
                    className="absolute inset-0 h-[225px] w-full lg:w-full lg:h-[80px]  md:w-full md:h-[110px] xl:w-full xl:h-[95px] object-cover"
                  />
                  <div className="relative text-white p-12 lg:p-0 md:p-0 xl:p-0 sm:p-8 ">
                    <p className="font-bold text-[32px] md:text-[16px]  lg:text-[14px]  xl:text-[16px]">
                      6+ Service
                    </p>
                    <p className="text-[22px] md:text-[12px]  lg:text-[8px]  xl:text-[14px] font-medium ">
                      categories available
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="relative flex-1 h-[90px] lg:h-[80px] rounded-[20px] overflow-hidden flex items-center px-4 ">
                  <img
                    src="/assets/Card3.png"
                    alt=""
                    className="absolute inset-0 h-[225px] w-full lg:w-full lg:h-full  md:w-full md:h-[110px] xl:w-full xl:h-[100px] object-cover"
                  />
                  <div className="relative p-12 lg:p-0 md:p-0 xl:p-0 ">
                    <p className="font-bold text-[36px] md:text-[16px]  lg:text-[14px]  xl:text-[16px] text-black ">
                      100% Fully
                    </p>
                    <p className="text-[22px] md:text-[12px]  lg:text-[8px]  xl:text-[14px]  font-medium">
                      Customize
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

  <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />
      </section>
  );
};

export default HeroSection;