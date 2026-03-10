import React from "react";
import {
  GlobalIcon,
  BrightIcon,
  CoderIcon,
  BillingIcon,
  EditerIcon,
  HeadsetIcon,
} from "../../svg/svgIcons";

const Icon = () => {
  const services = [
    {
      icon: <GlobalIcon />,
      title: "Global Ready",
      description:
        "Multi-language and multi-currency support with flexible regional configuration.",
    },

    {
      icon: <BrightIcon />,
      title: "High-Performance Architecture",
      description:
        "Built with modern, scalable technology for fast, reliable performance.",
    },

    {
      icon: <CoderIcon />,
      title: "Full Source Code Ownership",
      description:
        "Complete access and control for unlimited customization and future expansion.",
    },

    {
      icon: <BillingIcon />,
      title: "Enterprise-Grade Reliability",
      description:
        "Secure cloud infrastructure with 99.9% uptime and high availability.",
    },

    {
      icon: <EditerIcon />,
      title: "Fully White-Label & Customizable",
      description:
        "Personalize branding, design elements, and workflows to match your business.",
    },

    {
      icon: <HeadsetIcon />,
      title: "Dedicated Setup & Support",
      description:
        "Deployment assistance included, with optional maintenance and ongoing enhancements.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-4 overflow-hidden  font-poppins">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">

        {/* MAIN CARD */}
        <div className="bg-white lg:rounded-[42px] py-8 sm:py-10 lg:py-14">

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
                  cursor-pointer
                "
              >

                <div className="flex items-center gap-4">

                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">

                    <div className="bg-[#E4FFD4] rounded-[4px]">
                      {service.icon}
                    </div>

                  </div>

                  <h4 className="text-base sm:text-[22px] font-semibold text-black">
                    {service.title}
                  </h4>

                </div>

                <p className="text-sm sm:text-[16px] text-[#5f5f5f] leading-relaxed">
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

export default Icon;