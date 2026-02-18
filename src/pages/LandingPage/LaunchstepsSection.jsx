import React from 'react';

const LaunchStepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Services",
      description: "Select from taxi, delivery, errands, grocery, home services."
    },
    {
      number: "02", 
      title: "Add Your Branding",
      description: "Customize colors, logos, and design themes to match your brand"
    },
    {
      number: "03",
      title: "Deploy Your Apps", 
      description: "Launch customer, vendor, and driver apps on iOS and Android."
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Go live with fully functioning platform and our success toolkits."
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-14">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[42px] p-6 sm:p-8 lg:p-12 mx-0">
          {/* Header */}
          <div className="mb-12 lg:mb-16 mx-0 lg:mx-5 md:mx-2 xl:mx-12">
            <div className="relative">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-text-primary ">
                Launch in   <span className="bg-[#E4FFD4]">4 Simple Steps </span>
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center p-0 lg:pt-2  gap-2 lg:gap-4">
              <p className="text-sm sm:text-base text-text-secondary max-w-md">
                From concept to launch in just 7 days. No technical expertise required.
              </p>
              <img 
                src="/images/img_group_1000001747.svg" 
                alt=""
                className="w-[120px] lg:w-[100px] h-auto"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  lg:gap-8 max-w-5x1 mx-8 lg:mx-16">
            {steps?.map((step, index) => (
              <div 
                key={index}
                className="bg-[#f4ffef] rounded-[42px] p-4 lg:p-10 ps-10 lg:ps-12  hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-[#9cee69] mb-6 lg:mb-4">
                  {step?.number}
                </div>
                <h3 className="text-lg sm:text-lg font-bold text-text-secondary mb-4">
                  {step?.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed  lg:text-sm">
                  {step?.description}
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