import React from 'react';

const EcosystemSection = () => {
  const apps = [
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: "Customer App",
      description: "Smooth interface for customers to make orders and book services.",
      features: [
        "Browse Services",
        "Real-time Tracking", 
        "Payment Integration",
        "Order History"
      ]
    },
    {
      icon: "/images/img_building_store.svg", 
      title: "Vendor App",
      description: "Complete management system to receive and manage requests.",
      features: [
        "Order Management",
        "Inventory Control",
        "Analytics Dashboard",
        "Customer Insights"
      ]
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: "Driver App", 
      description: "Optimized app for drivers and delivery partners with navigation.",
      features: [
        "Route Optimization",
        "Earnings Tracks",
        "Job Acceptance", 
        "Navigation"
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Fixed padding for mobile */}
        <div className="mb-10 lg:mb-14 xl:mx-10">
          <div className="relative inline-block mb-4">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-gray-900 leading-tight">
              <span className="bg-[#E4FFD4] px-1">Three Apps,</span> <div className='mt-8'>One Ecosystem</div> 
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Complete solution with dedicated apps for every stakeholder in your business.
          </p>
        </div>

        {/* Apps Grid - Responsive Margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:mx-10">
          {apps?.map((app, index) => (
            <div 
              key={index}
              className="bg-[#f9fff5] rounded-[32px] md:rounded-[40px] p-7 lg:p-9 hover:shadow-xl transition-all duration-300 border border-[#e4ffd4]/20"
            >
              {/* Icon Container */}
              <div className="bg-[#e4ffd4] rounded-[12px] w-14 h-14 flex items-center justify-center mb-6">
                <img 
                  src={app?.icon} 
                  alt={app?.title} 
                  className="w-7 h-7"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {app?.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[40px]">
                {app?.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-4 border-t border-[#e4ffd4]">
                {app?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <img 
                      src="/images/img_square_check.svg" 
                      alt="Check" 
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;