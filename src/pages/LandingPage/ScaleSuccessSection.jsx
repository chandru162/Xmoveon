import React from "react";

const ScaleSuccessSection = () => {
  const platformFeatures = [
    {
      icon: "/images2/features/img_layout_dashboard.svg",
      title: "Localisation",
      description:
        "Multi-language and multi-currency support with regional settings.",
    },
    {
      icon: "/images2/features/img_sparkles.svg",
      title: "Blazing Fast",
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
      title: "Support",
      description:
        "Includes setup and deployment. Optional maintenance and enhancements.",
    },
  ];

  return (
    <section className="w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* MAIN CARD */}
        <div className="bg-secondary-background lg:rounded-[48px] py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
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
               Built for Scale, 
                <br />

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
                >
                  Success
                </span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-md mx-auto lg:mx-0">
                Build and deploy fully customizable service applications without
                any coding. Everything you need to start and scale your
                on-demand business instantly.
              </p>

              <img
                src="/assets/car.jpg"
                alt="Platform Dashboard"
                className="
                  mt-6
                  w-full
                  max-w-[350px]
                  sm:max-w-[320px]
                  md:max-w-[360px]
                  lg:max-w-[420px]
                  rounded-[24px]
                  mx-auto
                  lg:mx-0
                "
              />
            </div>

            {/* RIGHT FEATURES */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {platformFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      bg-white
                      rounded-[16px]
                      p-4
                      sm:p-5
                      flex
                      flex-col
                      gap-2
                      hover:shadow-md
                      transition
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-[#E4FFD4] p-2 rounded-[10px] shrink-0">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-5 h-5"
                        />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-black">
                        {feature.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-[46px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSuccessSection;