import React from 'react';

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: 'In-App Communication',
      description: 'Seamless chat and call features between customers, drivers, and vendors.',
    },
    {
      icon: "/images/img_building_store.svg",
      title: 'Dynamic Pricing Engine',
      description: 'Real-time pricing adjustment based on demand, distance, and time.',
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: 'Advanced Safety Features',
      description: 'SOS button, emergency contacts, and ride/order tracking for user safety.',
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: 'Granular Business Controls',
      description: 'Manage permissions, commissions, and service parameters easily.',
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: 'Marketing Tools',
      description: 'Push notifications, promo codes, and referral programs built-in.',
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: 'Smart Route Optimization',
      description: 'AI-powered routing for faster delivery and improved efficiency.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Header - Keeping the Background Color intact */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          <div className="w-full lg:w-3/5">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-black leading-[1.4]">
              Advanced <span className="bg-[#E4FFD4] px-2 py-1 inline-block mb-1">Features for</span>
              <br />
              <span className="bg-[#E4FFD4] px-2 py-1 inline-block">Growth</span>
            </h2>
          </div>

          <div className="w-full lg:w-2/5 lg:pt-6">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Powerful tools to optimize operations, increase revenue, and delight your customers.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#E4FFD4] p-2 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                   <img src={feature.icon} className="w-6 h-6" alt="" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-14">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;