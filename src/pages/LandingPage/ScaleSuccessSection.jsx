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
 const Scale = [
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
                xl:text-[52px]
                font-medium
                leading-[1.15]
                text-text-primary
              "
            >
            Built for Scale, <br />
              

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
              >Success</span>
</h3>

            <p className="text-sm sm:text-base text-text-secondary max-w-md">
             Everything you need to launch, manage, and grow your on-demand service business.

            </p>
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
            {Scale.map((Scale, index) => (
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
                   <div className="flex-shrink-0 w-12 h-12 rounded-[12px] bg-[#E4FFD4] flex items-center justify-center">
                      <div className="w-6 h-6 text-[#56E000]">
                        {Scale.icon}
                      </div>
                    </div>

                  <h4 className="text-base sm:text-lg font-semibold text-black">
                    {Scale.title}
                  </h4>
                </div>

                <p className="text-sm sm:text-[15px] text-black leading-relaxed">
                  {Scale.description}
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