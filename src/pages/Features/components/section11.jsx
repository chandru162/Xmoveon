import React from "react";
import { DashboardBanner } from "../../../svg/svgBackgrounds";
import { ContactIcon } from "../../../svg/svgIcons";

function Section11({data}) {
  return (
    <div className="w-full py-10 md:py-18 px-4 ">
      <div className="relative max-w-[1200px] mx-auto overflow-hidden rounded-[40px] ">
        
        {/* SVG Background - Force Stretch logic */}
        <div className="absolute inset-0 z-0">
          {/* 'w-full h-full' and 'object-fill' will force the SVG 
            to stretch to the container's full height, 
            ignoring its original aspect ratio. 
          */}
          <DashboardBanner 
            className="md:w-full object-fill" 
            style={{ minHeight: '100%' }}
          />
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-24 text-center md:text-left gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[520px] text-black">
            <h1 className="text-[34px] md:text-[40px] font-semibold leading-tight">
              About Xmoveon
            </h1>

            <p className="mt-6 text-[15px] md:text-[14px] leading-7 font-medium">
              {data.disclaimer}
            </p>
            <p>
              
            </p>

            <div className="hidden md:block">
              <p className="mt-10 text-[14px]">
                “{data.highlight}”
              </p>
              <p className="mt-4 font-medium text-[14px]">
                — Xmoveon Product Team
              </p>
            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto md:mt-32">
            <button className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full text-[16px] font-bold flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all">
              Start Free Trial <span>↗</span>
            </button>

            <button className="w-full sm:w-auto px-10 py-4 border-2 border-black rounded-full text-[16px] font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all active:scale-95">
              Schedule a Demo <ContactIcon className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Section11;