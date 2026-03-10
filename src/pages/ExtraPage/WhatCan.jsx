import React, { useState } from "react";
import Button from "../../components/ui/Button";
import DemoPopup from "../LandingPage/DemoPopup";
import {
  MapHeartIcon,
  HeartLayIcon,
  AddDocumentIcon,
  SearchDocumentIcon,
  ConnectionIcon,
  NetworkIcon,
} from "../../svg/svgIcons";

const services = [
  { icon: <AddDocumentIcon />, description: "Handyman & Home Services" },
  { icon: <ConnectionIcon />, description: "Cleaning & Housekeeping" },
  { icon: <SearchDocumentIcon />, description: "Local & Professional Services" },
  { icon: <HeartLayIcon />, description: "Beauty & Wellness" },
  { icon: <NetworkIcon />, description: "Repair & Maintenance" },
  { icon: <MapHeartIcon />, description: "Smart Route Optimization" },
];

const WhatCan = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20  font-poppins">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-4 xl:px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">

            <h2
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
              <span className="bg-[#E4FFD4] px-1 rounded-md">
                What You Can
              </span>

              <br />

              Build with Xmoveon

              <div className="mt-2 flex justify-center lg:justify-start">
                <img
                  src="/images2/features/img_group_1000001743.svg"
                  alt="Arrow"
                  className="w-[56px] sm:w-[72px] lg:w-[80px]"
                />
              </div>

            </h2>

            <p className="text-sm sm:text-base max-w-md mx-auto lg:mx-0 text-[#5f5f5f]">
              Drivers get smart routing that saves time and fuel. They see
              earnings clearly and manage their schedule on their own terms.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center lg:justify-start gap-4">

              <Button
                text="Access"
                text_font_size="16px"
                text_font_weight="600"
                text_color="#fff"
                fill_background_color="#0f0f0f"
                border_border_radius="32px"
                padding="14px 28px"
                onClick={() => setShowDemo(true)}
              />

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="arrow"
                className="w-[52px] sm:w-[68px]"
              />

            </div>

            {/* IMAGE */}
            <img
              src="/assets/Scaleimage.webp"
              alt="Platform Dashboard"
              className="
              w-full
              max-w-[320px]
              sm:max-w-[360px]
              md:max-w-[500px]
              lg:max-w-[380px]
              xl:max-w-[520px]
              h-auto
              mx-auto
              lg:mx-0
              transition
              duration-500
              hover:scale-[1.03]
              
              "
            />

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                group
                md:w-[500px]
                bg-[#F4F4F480]
                backdrop-blur-sm
                rounded-[20px]
                p-4
                flex
                items-center
                gap-4
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
                cursor-pointer
                "
              >

                <div
                  className="
                  
                  rounded-[10px]
                  shrink-0
                  bg-[#E4FFD4]
                  transition
                  duration-300
                  group-hover:scale-110
                  w-10 h-10
                  "
                >
                  {service.icon}
                </div>

                <p className="text-sm sm:text-base text-black font-medium">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />
    </section>
  );
};

export default WhatCan;