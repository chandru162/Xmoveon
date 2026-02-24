import React from "react";

const LaunchStepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Services",
      description:
        "Select from taxi, delivery, errands, grocery, home services.",
    },
    {
      number: "02",
      title: "Add Your Branding",
      description:
        "Customize colors, logos, and design themes to match your brand",
    },
    {
      number: "03",
      title: "Deploy Your Apps",
      description:
        "Launch customer, vendor, and driver apps on iOS and Android.",
    },
    {
      number: "04",
      title: "Start Earning",
      description:
        "Go live with fully functioning platform and our success toolkits.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* MAIN CARD */}
        <div className="bg-white lg:rounded-[40px] py-8 sm:py-10 lg:p-12 mt-4 lg:mt-8">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-10">
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
           Launch in 4   

            <span
              className="
                inline-block
                bg-[#E4FFD4]
                rounded-md
                whitespace-nowrap
              "
            >
             Simple Steps
            </span>
          </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm sm:text-base text-text-secondary max-w-md text-center sm:text-left">
                From concept to launch in just 7 days. No technical expertise
                required.
              </p>

              <img
                src="/images/img_group_1000001747.svg"
                alt=""
                className="w-[90px] sm:w-[110px] h-auto"
              />
            </div>
          </div>

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="
                  bg-[#F4FFEF]
                  rounded-[28px]
                  p-6
                  sm:p-8
                  lg:p-10
                  hover:shadow-lg
                  transition
                "
              >
                <div className="text-[34px] sm:text-[42px] lg:text-[52px] font-bold text-[#56E000] mb-4">
                  {step.number}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-text-secondary mb-2">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaunchStepsSection;