import React from "react";

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: "/images/img_device_mobile_message.svg",
      title: "In-App Communication",
      description:
        "Seamless chat and call features between customers, drivers, and vendors.",
    },
    {
      icon: "/images/img_layout_dashboard_gray_900_01.svg",
      title: "Dynamic Pricing Engine",
      description:
        "Real-time pricing adjustment based on demand, distance, and time.",
    },
    {
      icon: "/images/img_heart_pin.svg",
      title: "Advanced Safety Features",
      description:
        "SOS button, emergency contacts, and ride/order tracking for user safety.",
    },
    {
      icon: "/images/img_topology_full_hierarchy.svg",
      title: "Granular Business Controls",
      description:
        "Manage permissions, commissions, and service parameters easily.",
    },
    {
      icon: "/images/img_clover.svg",
      title: "Marketing Tools",
      description:
        "Push notifications, promo codes, and referral programs built-in.",
    },
    {
      icon: "/images/img_brand_walmart.svg",
      title: "Smart Route Optimization",
      description:
        "AI-powered routing for faster delivery and improved efficiency.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 mb-12">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-text-primary leading-tight">
            Advanced{" "}
            <span className="bg-[#E4FFD4] px-2 rounded-md">
              Features for
            </span>{" "}
            Growth
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-lg">
            Powerful tools to optimize operations, increase revenue, and delight
            your customers.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              {/* ICON */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E4FFD4] flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-5 h-5" />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text-secondary mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;