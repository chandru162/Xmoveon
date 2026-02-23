import React from "react";

const ScaleSuccessSection = () => {
  const platformFeatures = [
    {
      icon: '/images2/features/img_layout_dashboard.svg',
      title: 'Localisation',
      description: 'Multi-language and multi-currency support with regional settings.',
    },
    {
      icon: '/images2/features/img_sparkles.svg',
      title: 'Blazing Fast',
      description: 'Built with latest technology for lightning fast loading times.',
    },
    {
      icon: '/images2/features/img_file_power.svg',
      title: 'Source Code',
      description: 'Full source code ownership with complete customization freedom.',
    },
    {
      icon: '/images2/features/img_clock_play.svg',
      title: '99.9% Uptime',
      description: 'Enterprise-grade infrastructure ensures your app is always available.',
    },
    {
      icon: '/images2/features/img_device_mobile_check.svg',
      title: 'Fully Customizable',
      description: 'Intuitive drag-and-drop configuration without coding knowledge.',
    },
    {
      icon: '/images2/features/img_clock_2.svg',
      title: 'Support',
      description: 'Includes setup and deployment. Optional maintenance and enhancements.',
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-10">
      {/* Container - Using rounded-[40px] for a modern consistent look */}
      <div className="bg-[#F9FAFB] rounded-[32px] md:rounded-[60px] p-8 md:p-12 lg:p-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Content - Structure preserved for PC */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.1] text-gray-900 mb-6">
              <span className="bg-[#E4FFD4] px-2">Built for Scale,</span> <br className="hidden lg:block" /> 
              Designed for Success
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md">
              Everything you need to launch, manage, and grow your on-
              <br className="hidden lg:block" />demand service business.
            </p>

            <div className="w-full max-w-sm">
              <img 
                src="/assets/car.jpg" 
                alt="Platform Dashboard" 
                className="w-full h-auto rounded-3xl shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:mt-12">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#E4FFD4] rounded-lg group-hover:scale-110 transition-transform">
                      <img 
                        src={feature.icon} 
                        alt={feature.title} 
                        className="w-5 h-5" 
                      />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-900">
                      {feature.title}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
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