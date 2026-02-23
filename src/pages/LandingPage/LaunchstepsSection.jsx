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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* CARD */}
        <div className="bg-white rounded-none lg:rounded-[42px] py-8 lg:py-14">

          {/* HEADER */}
          <div className="mb-10 lg:mb-16 text-center lg:text-left">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-text-primary">
              Launch in{" "}
              <span className="bg-[#E4FFD4] px-2 rounded-md">
                4 Simple Steps
              </span>
            </h2>

            <div className="mt-4 flex flex-col lg:flex-row items-center gap-4">
              <p className="text-sm sm:text-base text-text-secondary max-w-md">
                From concept to launch in just 7 days. No technical expertise
                required.
              </p>

              <img
                src="/images/img_group_1000001747.svg"
                alt=""
                className="w-[110px] h-auto"
              />
            </div>
          </div>

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="
                  bg-[#f4ffef]
                  rounded-[28px]
                  p-6 sm:p-8 lg:p-10
                  transition-shadow
                  hover:shadow-lg
                "
              >
                <div className="text-[36px] sm:text-[42px] lg:text-[52px] font-bold text-[#5C9B35] mb-4">
                  {step.number}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-text-secondary mb-3">
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