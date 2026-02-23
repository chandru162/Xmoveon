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
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* CARD */}
        <div className="bg-secondary-background rounded-none lg:rounded-[48px] py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* LEFT */}
            <div className="w-full lg:w-[50%] text-center lg:text-left">
              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-tight text-text-primary">
                <span className="bg-[#E4FFD4] px-2 rounded-md">
                  Built for Scale,
                </span>{" "}
                <br />
                Designed for <br />
                Success
              </h2>

              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-md mx-auto lg:mx-0">
                Everything you need to launch, manage, and grow your on-demand
                service business.
              </p>

              <img
                src="/public/assets/car.jpg"
                alt="Platform Dashboard"
                className="
                  mt-6
                  w-full
                  max-w-[320px]
                  sm:max-w-[380px]
                  lg:max-w-[420px]
                  rounded-[20px]
                  mx-auto
                  lg:mx-0
                "
              />
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-[50%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 lg:mt-0">
                {platformFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-5 h-5 bg-[#E4FFD4] rounded"
                      />
                      <h4 className="text-sm sm:text-base font-semibold">
                        {feature.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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