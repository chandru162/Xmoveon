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
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] md:rounded-[42px] p-4 sm:p-8 lg:p-12">
          
          {/* Header */}
          <div className="mb-10 lg:mb-16 lg:mx-12 xl:mx-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-black mb-4">
              Launch in <span className="bg-[#E4FFD4] px-2">4 Simple Steps</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm sm:text-base text-gray-600 max-w-md">
                From concept to launch in just 7 days. No technical expertise required.
              </p>
              <img 
                src="/images/img_group_1000001747.svg" 
                alt="Process Icon"
                className="w-[100px] lg:w-[120px] h-auto"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 lg:mx-12">
            {steps?.map((step, index) => (
              <div 
                key={index}
                className="
                  bg-[#f4ffef] 
                  rounded-[24px] md:rounded-[40px] 
                  p-8 md:p-10 
                  transition-all duration-300 
                  hover:shadow-md hover:-translate-y-1
                  flex flex-col
                "
              >
                <div className="text-[40px] md:text-[56px] font-bold text-[#5C9B35] leading-none mb-4">
                  {step?.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                  {step?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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