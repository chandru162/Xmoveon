import React from 'react';

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: "/images/img_device_mobile_message.svg",
      title: "In-App Communication",
      description: "Seamless chat and call features between customers, drivers, and vendors."
    },
    {
      icon: "/images/img_layout_dashboard_gray_900_01.svg", 
      title: "Dynamic Pricing Engine",
      description: "Real-time pricing adjustment based on demand, distance, and time."
    },
    {
      icon: "/images/img_heart_pin.svg",
      title: "Advanced Safety Features", 
      description: "SOS button, emergency contacts, and ride/order tracking for user safety."
    },
    {
      icon: "/images/img_topology_full_hierarchy.svg",
      title: "Granular Business Controls",
      description: "Manage permissions, commissions, and service parameters easily."
    },
    {
      icon: "/images/img_clover.svg",
      title: "Marketing Tools",
      description: "Push notifications, promo codes, and referral programs built-in."
    },
    {
      icon: "/images/img_brand_walmart.svg",
      title: "Smart Route Optimization", 
      description: "AI-powered routing for faster delivery and improved efficiency."
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 relative ">
 
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-4 ">
        {/* Content */}
        <div className="relative mx-2 md:mx-6 lg:mx-10 xl:mx-16">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between  me-8 lg:me-16 mb-12 lg:mb-12">

            <div className="">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-text-primary ms-4 lg:ms-12  ">
                Advanced <span className='bg-[#E4FFD4]'>Features  for Growth</span>
              </h2>
           </div>
          
             <div className="lg:w-1/2">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed  mt-4 lg:mt-8 ms-16 lg:ms-12 ">
                Powerful tools to optimize operations,<br /> increase revenue, and delight your  <br />customers.
              </p>
            </div>
      </div>

          {/* Features Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mx-8 lg:mx-16   ">
            {features?.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-3">
                  <img src={feature?.icon} alt="" className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-lg sm:text-lg font-semibold text-text-secondary">
                    {feature?.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed pl-11 lg:text-sm">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;