import React from "react";

const services = [
  { icon: "/images/img_frame_19.svg", description: "Handyman & Home Services" },
  { icon: "/images/img_frame_19_light_green_700.svg", description: "Cleaning & Housekeeping" },
  { icon: "/images/img_box.svg", description: "Local & Professional Services" },
  { icon: "/images/img_frame_19_light_green_700_62x62.svg", description: "Beauty & Wellness" },
  { icon: "/images/img_frame_19_62x62.svg", description: "Repair & Maintenance" },
  { icon: "/images/img_report_medical.svg", description: "Smart Route Optimization" },
];

const WhatCan = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="text-center lg:text-left">
             <h3
                                className="
                                  text-[26px]
                                  sm:text-[32px]
                                  md:text-[40px]
                                  lg:text-[48px]
                                  xl:text-[52px]
                                  font-medium
                                  leading-[1.15]
                                  text-text-primary
                                "
                              >
                                   <span
                                  className="
                                    inline-block
                                    bg-[#E4FFD4]
                                    rounded-md
                                    whitespace-nowrap
                                  "
                                > What You Can  </span>  
                              <span
                                  className="
                                    inline-block
                                    rounded-md
                                    whitespace-nowrap
                                  "
                                > Build with  </span> <br />

                                <span
                                  className="
                                    inline-block
                                    rounded-md
                                    whitespace-nowrap
                                  "
                                >
                                Xmoveon
                                </span>
                              </h3>

            <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0 text-gray-700">
              Drivers get smart routing that saves time and fuel. They see
              earnings clearly and manage their schedule on their own terms.
            </p>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-6">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
                Learn
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  ↗
                </span>
              </button>

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Arrow"
                className="w-[56px] sm:w-[72px] lg:w-[96px]"
              />
            </div>

            {/* IMAGE */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="w-full max-w-[360px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/assets/window.jpg"
                  alt="Build with Xmoveon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 md:mt-32">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#F4F4F480]
                  rounded-[20px]
                  p-4
                  flex
                  items-center
                  gap-4
                  hover:shadow-sm
                  transition
                "
              >
                <div className="bg-[#E4FFD4] p-2 rounded-[12px] shrink-0">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-6 h-6"
                  />
                </div>

                <p className="text-sm sm:text-base text-black">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatCan;