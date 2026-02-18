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
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 ">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" mb-12 lg:mb-16 xl:mb-16 mx-1 md:mx-8 lg:mx-12 xl:mx-20">
          <div className="relative inline-block mb-6">
            <h2 className=" text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-text-primary px-4 ">
              <span className="bg-[#E4FFD4]" >Three Apps,</span> One Ecosystem
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-secondary ps-4 md:ps-6 lg:ps-6 xl:ps-6 ">
            Complete solution with dedicated apps for every stakeholder in your business.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mx-8 lg:mx-24 md:mx-20">
          {apps?.map((app, index) => (
            <div 
              key={index}
              className="bg-[#f9fff5] rounded-[40px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="bg-[#e4ffd4] rounded-[10px] p-4 w-16 h-16 flex items-center justify-center mb-6">
                <img 
                  src={app?.icon} 
                  alt=""
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-lg font-semibold text-text-secondary mb-2">
                {app?.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed mb-8 lg:text-sm">
                {app?.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {app?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <img 
                      src="/images/img_square_check.svg" 
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-text-secondary">
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