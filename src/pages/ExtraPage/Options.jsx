import React from "react";
import { HeartIcon , ProfileIcon ,PackageIcon } from "../../svg/svgIcons";

const benefits = [
  {
    icon: <HeartIcon/>,
    title: "Commission-based revenue",
    desc: "Earn from every completed transaction.",
  },
  {
    icon: <PackageIcon/>,
    title: "Platform or booking fees",
    desc: "Apply flat or percentage-based charges.",
  },
  {
    icon: <ProfileIcon/>,
    title: "Custom pricing rules",
    desc: "Total admin control over monetization logic.",
  },
];

const Options = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">

        {/* TITLE */}
        <div className="mb-10 text-center lg:text-left">
          <h3 className="   text-[26px]
                      sm:text-[32px]
                      md:text-[40px]
                      lg:text-[48px]
                      xl:text-[52px]
                      font-semibold
                      leading-[1.15]">
            <span className="inline-block bg-[#E4FFD4]  rounded-md">
              Monetization
            </span>{" "}
            Options
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#FAFAFA]
                rounded-2xl
                p-6
                flex
                flex-col
                gap-3
                hover:shadow-md
                transition
              "
            >
              {/* ICON */}
              <div className="w-10 h-10 bg-[#E4FFD4] rounded-xl flex items-center justify-center">
                <div>
                  {item.icon}   
              </div>
            </div>
              {/* CONTENT */}
              <h4 className="font-semibold  text-base sm:text-lg">
                {item.title}
              </h4>

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

export default Options;