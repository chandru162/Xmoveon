import React from "react";
import {
  RectangleIcon,
  MessageIcon,
  TopologyIcon,
  RouteIcon,
  CloverIcon,
  HeartPinIcon,
} from "../../svg/svgIcons";

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: <MessageIcon />,
      title: "In-App Communication",
      description:
        "Seamless chat and call features between customers, drivers, and vendors.",
    },
    {
      icon: <RectangleIcon />,
      title: "Dynamic Pricing Engine",
      description:
        "Real-time pricing adjustment based on demand, distance, and time.",
    },
    {
      icon: <HeartPinIcon />,
      title: "Advanced Safety Features",
      description:
        "SOS button, emergency contacts, and ride/order tracking for user safety.",
    },
    {
      icon: <TopologyIcon />,
      title: "Granular Business Controls",
      description:
        "Manage permissions, commissions, and service parameters easily.",
    },
    {
      icon: <CloverIcon />,
      title: "Marketing Tools",
      description:
        "Push notifications, promo codes, and referral programs built-in.",
    },
    {
      icon: <RouteIcon />,
      title: "Smart Route Optimization",
      description:
        "AI-powered routing for faster delivery and improved efficiency.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 mb-12">
          <h3
              className="
                text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[48px]
                font-medium
                leading-[1.15]
                text-text-primary
              "
            >
             Advanced 
              

              <span
                className="
                  inline-block
                  bg-[#E4FFD4]
                  rounded-md
                  whitespace-nowrap
                  px-1
                "
              >
              Features 
              </span>
              
              <span
                className="
                  inline-block
                  rounded-md
                  whitespace-nowrap
                  px-1
                "
              >
               for
              </span> <br />
              
              <span
                className="
                  inline-block
                  bg-[#E4FFD4]
                  rounded-md
                  whitespace-nowrap
                  px-1
                "
              >
              Growth
              </span>
            </h3>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-text-secondary max-w-md">
            Powerful tools to optimize operations, increase revenue, and delight
            your customers.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-6
            lg:gap-10
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex
                gap-4
                items-start
                p-4
                sm:p-5
                rounded-[16px]
                hover:bg-[#F6FFF0]
                transition
              "
            >
              {/* ICON */}
              <div className="flex-shrink-0 w-12 h-12 rounded-[12px] bg-[#E4FFD4] flex items-center justify-center">
                <div className="w-6 h-6 text-[#56E000]">
                  {feature.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-text-secondary mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;