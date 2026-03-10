import React from "react";
import { DashboardBanner } from "../../../svg/svgBackgrounds";
import { ContactIcon } from "../../../svg/svgIcons";

function Section11({data}) {
  return (
      <section className="w-full py-12 px-4">
    
          <div className="relative max-w-[1200px] mx-auto rounded-[18px] overflow-hidden">
    
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
              <DashboardBanner />
            </div>
    
            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-6 md:px-12 lg:px-16 py-12">
    
              {/* LEFT SIDE */}
              <div className="max-w-[640px] text-black">
    
                <h2 className="
                  text-[26px]
                  sm:text-[30px]
                  md:text-[34px]
                  lg:text-[38px]
                  xl:text-[42px]
                  font-semibold
                  leading-[1.2]
                ">
                  Why Businesses Love Xmoveon
                </h2>
    
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px] font-medium">
    
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 bg-black rounded-full"></span>
                    <span>100% platform ownership — no recurring costs.</span>
                  </li>
    
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 bg-black rounded-full"></span>
                    <span>Total control over hosting and data</span>
                  </li>
    
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 bg-black rounded-full"></span>
                    <span>Developer-friendly structure with documentation.</span>
                  </li>
    
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 bg-black rounded-full"></span>
                    <span>Fast setup and white-label branding.</span>
                  </li>
    
                </ul>
    
              </div>
    
    
              {/* RIGHT BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
    
                <button className="
                  h-[48px]
                  px-8
                  bg-black
                  text-white
                  rounded-full
                  text-[16px]
                  font-semibold
                  flex items-center
                  gap-2
                  hover:bg-gray-900
                  transition
                ">
                  Start Free Trial <span>↗</span>
                </button>
    
                <button className="
                  h-[48px]
                  px-8
                  border-2
                  border-black
                  rounded-full
                  text-[16px]
                  font-semibold
                  flex items-center
                  gap-2
                  hover:bg-black
                  hover:text-white
                  transition
                ">
                  Schedule a Demo
                  <ContactIcon className="w-5 h-5" />
                </button>
    
              </div>
    
            </div>
    
          </div>
    
        </section>
  );
}

export default Section11;