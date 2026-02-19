import React from "react";

const ScaleSuccessSection = () => {


     const platformFeatures = [
    {
      icon: '/images2/features/img_layout_dashboard.svg',
      title: 'Localisation',
      description: 'Multi-language and multi-currency support with regional settings.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_sparkles.svg',
      title: 'Blazing Fast',
      description: 'Built with latest technology for lightning fast loading times.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_file_power.svg',
      title: 'Source Code',
      description: 'Full source code ownership with complete customization freedom.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_clock_play.svg',
      title: '99.9% Uptime',
      description: 'Enterprise-grade infrastructure ensures your app is always available.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_device_mobile_check.svg',
      title: 'Fully Customizable',
      description: 'Intuitive drag-and-drop configuration without coding knowledge.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_clock_2.svg',
      title: 'Support',
      description: 'Includes setup and deployment. Optional maintenance and enhancements.',
      bgColor: 'bg-background-light'
    }
  ];

  return (
  

 <section className="w-full">
                <div className="bg-secondary-background rounded-full p-[25px] sm:p-[31px] md:p-[38px] lg:p-[42px] xl:p-[50px] mx-[14px] sm:mx-[18px] md:mx-[24px] lg:mx-[44px] xl:mx-[56px] w-full max-w-[1200px] mx-auto">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-[45%]  xl:w-[60%] relative">
                      {/* Background highlight */}
                      

                      {/* Main heading */}
                      <h2 className="relative text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-medium leading-[44px] sm:leading-[54px] md:leading-[66px] lg:leading-[78px] xl:leading-[90px] text-text-primary font-[Inter] w-full z-10 mx-4 md:mx-2 lg:mx-8 xl:mx-16 ">
                      <span className="bg-[#E4FFD4]">Built for Scale, Designed for </span> <br /> Success
                      </h2>

                      {/* Content section */}
                      <div className="flex flex-col justify-start items-center w-full mt-2 lg:mt-4 mx-4 md:mx-2 lg:mx-8 xl:mx-16 xl:mt-6">
                        <p className="text-sm sm:text-base font-normal leading-md text-text-secondary font-[Sans_Serif_Collection] w-full ">
                          Everything you need to launch, manage, and grow your on- <br />demand service business.
                        </p>
                        </div>
                        <div className='mx-4 mt-3 md:mx-2 lg:mx-8 xl:mx-16'>
                        <img 
                          src="/public/assets/car.jpg" 
                          alt="Platform Dashboard" 
                          className="w-full max-w-[235px] sm:max-w-[288px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[400px] h-auto rounded-[13px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[26px] mt-2"
                        />
                      </div>
                      </div>
                    

                    {/* Right Features Grid */}
                    <div className="w-90% md:w-[80%] lg:w-[45%] xl:w-[50%] ">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px] sm:gap-[7px] md:gap-[20px] lg:gap-[28px] xl:gap-[36px] w-full mt-2  xl:mt-16 mx-2  lg:mx-0 xl:mx-0">
                        {platformFeatures?.map((feature, index) => (
                          <div 
                            key={index}
                            className={`flex flex-col gap-[6px] sm:gap-[7px] md:gap-[6px] lg:gap-[10px] xl:gap-[12px] justify-start items-center  w-full h-auto rounded-lg sm:rounded-lg p-[10px] sm:p-[12px] md:p-[14px] lg:p-[17px] xl:p-[20px] mt-2]`}
                          >
                            <div className="flex flex-row justify-start items-center w-full ">
                              <img 
                                src={feature?.icon} 
                                alt={feature?.title} 
                                className="w-[13px] sm:w-[16px] md:w-[20px] lg:w-[23px] xl:w-[26px] h-[13px] sm:h-[16px] md:h-[20px] lg:h-[23px] xl:h-[26px] bg-[#E4FFD4] "
                              />
                              <span className="text-[11px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-semibold leading-lg  ml-[4px] sm:ml-[5px] md:ml-[6px] lg:ml-[7px] xl:ml-[8px]">
                                {feature?.title}
                              </span>
                            </div>
                            <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]  font-normal leading-md  w-[98%]">
                              {feature?.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>



  );
};

export default ScaleSuccessSection;
