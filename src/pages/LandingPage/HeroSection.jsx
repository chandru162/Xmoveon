import React, { useState } from "react";
import Button from "../../components/ui/Button";
import DemoPopup from "./DemoPopup";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white overflow-hidden ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">

        {/* HERO CARD */}
        <div className="bg-white lg:rounded-[40px] py-8 sm:py-10 lg:p-8 xl:p-8 mt-4 lg:mt-8 xl:mt-8">

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left font-poppins">

              <h5
                className="
                  text-[26px]
                  sm:text-[32px]
                  md:text-[40px]
                  lg:text-[48px]
                  xl:text-[52px]
                  font-semibold
                  leading-[1.15]
                "
              >
                Launch Your On- <br />Demand

                <span className="inline-block bg-[#E4FFD4] rounded-md px-2 whitespace-nowrap">
                  Super
                </span>

                <span className="inline-block bg-[#E4FFD4] rounded-md whitespace-nowrap">
                  App in 7 Days
                </span>

              </h5>

              <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                Build and deploy fully customizable service applications without
                any coding. Everything you need to start and scale your
                on-demand business instantly.
              </p>

              {/* META */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

                <div className="flex items-center gap-2">
                  <img src="/images/img_moneybag.svg" alt="" className="w-5 h-5"/>
                  <span className="text-sm">$10B+ Processed</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src="/images/img_code.svg" alt="" className="w-5 h-5"/>
                  <span className="text-sm">No Coding Required</span>
                </div>

              </div>

              <div className="mt-3 flex justify-center lg:justify-start gap-2">

                <img src="/images/img_headset.svg" alt="" className="w-5 h-5"/>

                <span className="text-sm">
                  24/7 Support
                </span>

              </div>

              <div className="mt-6 lg:mt-14 flex justify-center lg:justify-start">

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
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">

              {/* MOBILE IMAGE */}
              <img
                src="/assets/Welcomeimage.webp"
                alt="Platform showcase"
                className="
                  w-full
                  max-w-[260px]
                  sm:max-w-[340px]
                  md:max-w-[420px]
                  lg:max-w-[500px]
                  xl:max-w-[580px]
                  rounded-[20px]
                "
              />

              {/* STATS CARDS */}
              <div className="w-full flex flex-col sm:flex-row gap-4">

                {/* CARD 1 */}
                <div className="relative flex-1 h-[90px] sm:h-[100px] md:h-[110px] lg:h-[70px] xl:h-[80px] rounded-[20px] overflow-hidden">
                  <img
                    src="/assets/Launchimage.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* CARD 2 */}
                <div className="relative flex-1 h-[90px] sm:h-[100px]  md:h-[110px] lg:h-[70px] xl:h-[80px] rounded-[20px] overflow-hidden">
                  <img
                    src="/assets/Categoryimage.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* CARD 3 */}
                <div className="relative flex-1 h-[90px] sm:h-[100px] md:h-[110px] lg:h-[70px] xl:h-[80px] rounded-[20px] overflow-hidden">
                  <img
                    src="/assets/Customizeimage.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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