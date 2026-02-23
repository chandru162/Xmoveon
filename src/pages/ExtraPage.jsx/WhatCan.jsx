import React from "react";

  const services = [
    {
      icon: "/images/img_frame_19.svg",
      description: "Handyman & Home Services"
    },
    {
      icon: "/images/img_frame_19_light_green_700.svg",
      description: "Cleaning & Housekeeping"
    },
    {
      icon: "/images/img_box.svg",
      description: "Local & Professional Services"
    },
    {
      icon: "/images/img_frame_19_light_green_700_62x62.svg",
      description: "Beauty & Wellness"
    },
    {
      icon: "/images/img_frame_19_62x62.svg",
      description: "Repair & Maintenance"
    },
    {
      icon: "/images/img_report_medical.svg",
      description: "Smart Route Optimization"
    }
  ];

const WhatCan = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="mx-6 md:mx-10 lg:mx-14 xl:mx-14">
            <h2 className="inline-block text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-medium  rounded-md ">
              <span className="bg-[#E4FFD4]">What You Can </span> <br /> Build with <br />Xmoveon
            </h2>

            <p className="mt-4 text-sm  max-w-md">
              Drivers get smart routing that saves time and fuel. They see
              earnings clearly and manage their schedule on their own terms.
            </p>

            {/* CTA */}
              <div className="mt-6 flex flex-row justify-start mx-2 md:mx-2 lg:mx-2 xl:mx-2">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
                Learn
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  ↗
                </span>
              </button>
               <img 
                   src="/images2/features/img_group_1000001743.svg" 
                   alt="Driver Earnings" 
                   className="w-[61px] sm:w-[75px] md:w-[92px] lg:w-[106px] xl:w-[122px] h-[24px] sm:h-[29px] md:h-[36px] lg:h-[42px] xl:h-[48px] mx-8 mt-1"
              />
            </div>

            {/* Image */}
            <div className="mt-10 rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="/public/assets/window.jpg"
                alt="Smart Routing"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Right List */}
            <div className="space-y-8 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#F4F4F480]
                  p-4
                  rounded-[20px]
                  h-[70px]
                  w-[500px]
                  flex
                  flex-col
                  justify-between
                "
              >
                <div className="flex items-center gap-5">
                  <div className=" flex rounded-[12px] ">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-7 h-7 bg-[#e4ffd4] "
                    />
                     <p className="text-sm text-black leading-relaxed mx-2 ">
                       {service.description}
                     </p>
                  </div>
                </div>

               
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatCan;
