import {
  CodeIcon,
  HeartIcon,
  HomeIcon,
  LogoutIcon,
  PackageIcon,
  ProfileIcon,
} from "@/svg/svgIcons";
import React from "react";

const features = [
  {
    icon: <HeartIcon />,
    title: "Commission-based revenue",
    desc: "Earn from every completed transaction.",
  },
  {
    icon: <PackageIcon />,
    title: "Platform or booking fees",
    desc: "Apply flat or percentage-based charges.",
  },
  {
    icon: <ProfileIcon />,
    title: "Custom pricing rules",
    desc: "Total admin control over monetization logic.",
  },
  {
    icon: <CodeIcon />,
    title: "Built for service marketplaces",
    desc: "Booking, scheduling, messaging, and payments.",
  },
  {
    icon: <HomeIcon />,
    title: "Scalable & flexible architecture",
    desc: "Modern stack designed to grow with your business.",
  },
  {
    icon: <LogoutIcon />,
    title: "No vendor lock-in",
    desc: "You decide how to deploy and evolve your platform.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full py-8 sm:py-8 lg:py-12  font-poppins">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-4 xl:px-4">

        {/* Title */}
        <h3
          className="
            text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[48px]
            xl:text-[52px]
            font-semibold
            leading-[1.15]
           mb-10 
          "
        >
          Why Choose <span>Xmoveon</span>
        </h3>

        {/* Cards */}
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
          {features.map((item, index) => (
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
              {/* Icon + Title */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 flex items-center justify-center bg-[#E4FFD4] rounded-[10px]">
                  {item.icon}
                </div>

                <h4 className="text-base sm:text-[22px] font-semibold text-black">
                  {item.title}
                </h4>

              </div>

              {/* Description */}
              <p className="text-sm sm:text-[16px] text-[#5f5f5f] leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;