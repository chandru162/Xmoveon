import React from "react";
import {
  RectangleIcon,
  MessageIcon,
  TopologyIcon,
  RouteIcon,
  CloverIcon,
  HeartPinIcon,
} from "../../svg/svgIcons";

const ScaleSuccessSection = () => {
  const services = [

     {
      icon: "/images2/features/img_layout_dashboard.svg",
      title: "Localisation",
      description:
        "Multi-language and multi-currency support with regional settings.",
    },

    {
      icon: "/images2/features/img_sparkles.svg",
      title: " Blazing Fast",
      description:
        "Built with latest technology for lightning fast loading times.",
    },
     {
      icon: "/images2/features/img_file_power.svg",
      title: "Source Code",
      description:
        "Full source code ownership with complete customization freedom.",
    },

    {
      icon: "/images2/features/img_clock_play.svg",
      title: "99.9% Uptime",
      description:
        "Enterprise-grade infrastructure ensures your app is always available.",
    },

    {
      icon: "/images2/features/img_device_mobile_check.svg",
      title: "Fully Customizable",
      description:
        "Intuitive drag-and-drop configuration without coding knowledge.",
    },

    {
      icon: "/images2/features/img_clock_2.svg",
      title: " Support ",
      description:
        "Includes setup and deployment. Optional maintenance and enhancements.",
    },

   
  ];


  return (
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
                  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

                    {/* MAIN CARD */}
                    <div className="bg-white lg:rounded-[42px] py-8 sm:py-10 lg:py-14">

                      {/* HEADER */}
                      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 mb-10">
                      <h3
                          className="
                            text-[26px]
                            sm:text-[32px]
                            md:text-[40px]
                            lg:text-[48px]
                            xl:text-[48px]
                            font-semibold
                            "
                        >
                        Built for Scale, {""} 
                          <span
                            className="
                              inline-block
                              bg-[#E4FFD4]
                              rounded-md               
                              whitespace-nowrap
                            "
                          >
                          Designed for
                          </span> <br />

                        <span
                            className="
                              inline-block
                              bg-[#E4FFD4]
                              rounded-md               
                              whitespace-nowrap
                            "
                          >Success</span> <br />

                           <span className=" inline-block  max-w-md mt-2 lg:mt-0 xl:mt-2 text-sm sm:text-base font-medium">
                               Everything you need to launch,manage,and grow your on-demand service business.

                              </span>
                     </h3>
                      <img
                            src="/assets/built.png"
                            alt="Platform Dashboard"
                            className="
                              
                              w-full
                              max-w-[360px]
                              sm:max-w-[320px]
                              md:max-w-[660px]
                              lg:max-w-[420px]
                              xl:max-w-[520px]
                              rounded-[20px]
                              mx-auto
                              lg:mx-0
                            "
                          />

                      </div>

                      {/* SERVICES GRID */}
                      <div
                        className="
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          xl:grid-cols-3
                          gap-6
                          lg:gap-10
                        "
                      >
                        {services.map((service, index) => (
                          <div
                            key={index}
                            className="
                              bg-[#F4F4F480]
                              rounded-[20px]
                              p-5
                              sm:p-6
                              lg:p-8
                              flex
                              flex-col
                              gap-4
                              hover:shadow-md
                              transition
                            "
                          >
                            <div className="flex items-center gap-4">
                              <div className="bg-[#E4FFD4] rounded-[12px] p-3 shrink-0">
                                <img
                                  src={service.icon}
                                  alt={service.title}
                                  className="w-6 h-6"
                                />
                              </div>

                              <h4 className="text-base sm:text-lg font-semibold text-black">
                                {service.title}
                              </h4>
                            </div>

                            <p className="text-sm sm:text-base  text-black leading-relaxed">
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

export default ScaleSuccessSection;