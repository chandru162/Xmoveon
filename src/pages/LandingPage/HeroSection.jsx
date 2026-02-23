import React, { useState } from "react";
import Button from "../../components/ui/Button";
import DemoPopup from "./DemoPopup";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* HERO CARD */}
        <div className="bg-white rounded-none lg:rounded-[40px] py-8 sm:py-10 lg:p-10 mt-4 lg:mt-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* LEFT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-tight text-text-primary">
                Launch Your On- <br />
                Demand
                <span className="bg-[#E4FFD4] px-2 rounded-md">
                  Super <br /> App in 7 Days
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-md mx-auto lg:mx-0">
                Build and deploy fully customizable service applications without
                any coding. Everything you need to start and scale your
                on-demand business instantly.
              </p>

              {/* META */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <img src="/images/img_moneybag.svg" className="w-5 h-5" />
                  <span className="text-sm text-text-secondary">
                    $10B+ Processed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/img_code.svg" className="w-5 h-5" />
                  <span className="text-sm text-text-secondary">
                    No Coding Required
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-center lg:justify-start gap-2">
                <img src="/images/img_headset.svg" className="w-5 h-5" />
                <span className="text-sm text-text-secondary">24/7 Support</span>
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
                  text_align="center"
                  onClick={() => setShowDemo(true)}
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">

              {/* IMAGE – FULL WIDTH ON MOBILE */}
              <img
                src="/public/assets/mobile.png"
                alt="Platform showcase"
                className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-full rounded-[28px]"
              />

              {/* STATS */}
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="bg-[#e4ffd4] rounded-[20px] h-[96px] flex-1 flex items-center px-4">
                  <div className="text-[18px] font-bold">
                    7 Days <br />
                    <span className="text-[12px] font-normal">
                      From idea to launch
                    </span>
                  </div>
                </div>

                <div className="bg-black rounded-[20px] h-[96px] flex-1 flex items-center px-4 text-white">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-4 h-4 bg-white rounded" />
                      ))}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold text-[16px]">
                        6+ Service
                      </span>{" "}
                      <br />
                      categories available
                    </div>
                  </div>
                </div>

                <div className="bg-[#9cee69] rounded-[20px] h-[96px] flex-1 flex items-center px-4">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-4 h-4 bg-white rounded" />
                      ))}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold text-[16px]">
                        100% Fully
                      </span>{" "}
                      <br />
                      customizable
                    </div>
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