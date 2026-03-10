import React from "react";

import {
  LocalisationIcon,
  OrbitIcon,
  DocumentArrowIcon,
  HistoryIcon,
  MobileCheckIcon,
  ClockBoxIcon,
} from "../../svg/svgIcons";

const ScaleSuccessSection = () => {
  const services = [
    {
      icon: <LocalisationIcon />,
      title: "Localisation",
      description:
        "Multi-language and multi-currency support with regional settings.",
    },
    {
      icon: <OrbitIcon />,
      title: "Blazing Fast",
      description:
        "Built with latest technology for lightning fast loading times.",
    },
    {
      icon: <DocumentArrowIcon />,
      title: "Source Code",
      description:
        "Full source code ownership with complete customization freedom.",
    },
    {
      icon: <HistoryIcon />,
      title: "99.9% Uptime",
      description:
        "Enterprise-grade infrastructure ensures your app is always available.",
    },
    {
      icon: <MobileCheckIcon />,
      title: "Fully Customizable",
      description:
        "Intuitive drag-and-drop configuration without coding knowledge.",
    },
    {
      icon: <ClockBoxIcon />,
      title: "Support",
      description:
        "Includes setup and deployment. Optional maintenance and enhancements.",
    },
  ];

  return (
    <section className="w-full bg-white py-8  font-poppins">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Heading */}
            <h3
              className="
                text-[28px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[52px]
                font-semibold
                leading-[1.15]
              "
            >
              Built for Scale, <br />

              <span className="bg-[#E4FFD4] rounded-md px-2">
                Designed for
              </span>{" "}
              <br />

              <span className="bg-[#E4FFD4] rounded-md px-2">
                Success
              </span>
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-md text-[16px] text-[#5f5f5f]">
              Everything you need to launch, manage, and grow your on-demand
              service business.
            </p>

            {/* Image */}
            <img
              src="/assets/Scaleimage.webp"
              alt="Platform Dashboard"
              className="
                mt-10
                w-full
                max-w-[420px]
                sm:max-w-[520px]
                md:max-w-[650px]
                lg:max-w-[400px]
                xl:max-w-[550px]
              "
            />

          </div>

          {/* RIGHT SIDE FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#F5F5F5]
                  rounded-[20px]
                  p-6
                  hover:shadow-md
                  transition
                  cursor-pointer
                "
              >

                <div className="flex items-center gap-2">

                  <div className="flex items-center justify-center w-10 h-10 bg-[#E4FFD4] rounded-[10px]">
                    {service.icon}
                  </div>

                  <h4 className="text-base sm:text-[22px] font-semibold text-black">
                    {service.title}
                  </h4>

                </div>

                <p className="text-[14px] text-gray-500 leading-relaxed">
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