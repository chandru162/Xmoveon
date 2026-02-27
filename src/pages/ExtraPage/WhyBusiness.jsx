import React from 'react';
import { DashboardBanner } from '../../svg/svgBackgrounds';
import { ContactIcon } from '../../svg/svgIcons';

const WhyBusinesses = () => {
  return (
    <section className="w-full">
      <div className="w-full py-10 md:py-20 lg:py-8 px-1 rounded-md">
        {/* Banner Container */}
        <div className="relative max-w-[1200px] mx-auto overflow-hidden ">
          {/* SVG Background - Full Height Stretch */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DashboardBanner className="md:w-full object-fill" style={{ minHeight: '100%' }} />
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 text-center md:text-left gap-10">
            {/* LEFT CONTENT */}
            <div className="max-w-[620px] text-black w-full">
              <h1 className="text-[32px] md:text-[40px] font-bold leading-10 mb-8">
                Why Businesses Love Xmoveon
              </h1>

              <ul className="space-y-4 text-[15px] md:text-[16px] font-medium inline-block text-left">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                  <span>100% platform ownership — no recurring costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                  <span>Total control over hosting and data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                  <span>Developer-friendly structure with documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                  <span>Fast setup with white-label branding</span>
                </li>
              </ul>
            </div>

            {/* RIGHT BUTTONS - Cleaned & Fixed Alignment */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto md:mt-20">
              {/* Button 1 */}
              <button className="h-[56px] md:w-[255px] w-full sm:w-[200px] bg-black text-white rounded-full text-[16px] font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-gray-900 transition-all active:scale-95 whitespace-nowrap px-6">
                Start Free Trial <span>↗</span>
              </button>

              {/* Button 2 */}
              <button className="h-[56px] w-full md:w-[255px] sm:w-auto px-10 py-4 border-2 border-black rounded-full text-[16px] font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all active:scale-95">
                Schedule a Demo <ContactIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinesses;
