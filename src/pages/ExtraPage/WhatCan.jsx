import React, { useState } from "react"; 
import Button from "../../components/ui/Button";
import DemoPopup from "../LandingPage/DemoPopup";
import { 
  MapHeartIcon, 
  HeartLayIcon, 
  AddDocumentIcon, 
  SearchDocumentIcon, 
  ConnectionIcon, 
  NetworkIcon 
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
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="
                text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[52px]
                font-semibold
                leading-[1.15]
              ">
              <span className="inline-block bg-[#E4FFD4] rounded-md whitespace-nowrap px-1">
                What You Can
              </span>{" "}
              <br />
              <span className="inline-block bg-[#E4FFD4] rounded-md whitespace-nowrap px-1">
                Build with
              </span>{" "}
              <br />
              <span className="inline-block bg-[#E4FFD4] rounded-md whitespace-nowrap px-1">
                Xmoveon
              </span>
            </h3>

            <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Drivers get smart routing that saves time and fuel. They see
              earnings clearly and manage their schedule on their own terms.
            </p>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 mx-0 lg:mx-4">
              <Button
                text="Access"
                text_font_size="16px"
                text_font_weight="600"
                text_color="#fff"
                fill_background_color="#0f0f0f"
                border_border_radius="32px"
                padding="14px 28px"
                onClick={() => {
                  console.log("Try Demo clicked"); 
                  setShowDemo(true);
                }}
              />
              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="arrow"
                className="w-[52px] sm:w-[68px]"
              />
            </div>

            <img
              src="/assets/Scaleimage.webp"
              alt="Platform Dashboard"
              className="
                mt-6
                max-w-[320px]
                sm:max-w-[320px]
                md:max-w-[660px]
                lg:max-w-[380px]
                xl:max-w-[520px]
                rounded-[20px]
                mx-auto
                lg:mx-0
                transition
                duration-500
                hover:scale-[1.03]
                hover:shadow-xl
              "
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 lg:mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
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
                "
              >
                <div className="
                    bg-[#E4FFD4]
                    p-2
                    rounded-[12px]
                    shrink-0
                    transition
                    duration-300
                    group-hover:scale-110
                  ">
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