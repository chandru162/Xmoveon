import React from "react";
import { HeartIcon, ProfileIcon, PackageIcon } from "../../svg/svgIcons";

const benefits = [
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
];

const Options = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-2 xl:px-0">

        {/* TITLE */}
        <div className="mb-10 text-center lg:text-left">

          <h3
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
            <span className="inline-block bg-[#E4FFD4] px-2 rounded-md">
              Monetization
            </span>{" "}
            Options
          </h3>

        </div>

        {/* CARDS */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-8
          "
        >

          {benefits.map((item, index) => (
            <div
              key={index}
              className="
              bg-[#FAFAFA]
              rounded-2xl
              p-5 sm:p-6
              flex
              flex-col
              gap-3
              transition
              hover:shadow-md
              hover:-translate-y-[2px]
              "
            >

              {/* ICON + TITLE */}
              <div className="flex items-start gap-2">

                <div className="w-10 h-10 flex items-center justify-center bg-[#E4FFD4] rounded-[10px] shrink-0">
                  {item.icon}
                </div>

                <h4 className="text-base sm:text-[22px] font-semibold text-black">
                  {item.title}
                </h4>

              </div>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-[15px] text-[#6b6b6b] leading-relaxed pl-[52px]">
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