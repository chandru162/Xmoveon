import React from "react";

const EcosystemSection = () => {
  const apps = [
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: "Customer App",
      description:
        "Smooth interface for customers to make orders and book services.",
      features: [
        "Browse Services",
        "Real-time Tracking",
        "Payment Integration",
        "Order History",
      ],
    },
    {
      icon: "/images/img_building_store.svg",
      title: "Vendor App",
      description:
        "Complete management system to receive and manage requests.",
      features: [
        "Order Management",
        "Inventory Control",
        "Analytics Dashboard",
        "Customer Insights",
      ],
    },
    {
      icon: "/images/img_device_mobile_heart.svg",
      title: "Driver App",
      description:
        "Optimized app for drivers and delivery partners with navigation.",
      features: [
        "Route Optimization",
        "Earnings Tracks",
        "Job Acceptance",
        "Navigation",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* HEADER */}
        <div className="mb-10 lg:mb-16 text-center lg:text-left">
         <h3
                  className="
                    text-[26px]
                    sm:text-[32px]
                    md:text-[40px]
                    lg:text-[48px]
                    xl:text-[52px]
                    font-medium
                    leading-[1.15]
                    text-text-primary
                  "
                >
                  <span
                    className="
                      inline-block
                      rounded-md
                      whitespace-nowrap
                      bg-[#E4FFD4]

                    "
                  >
                     Three Apps,
                  </span>
                  <br />

                  <span
                    className="
                      inline-block
                      rounded-md
                      whitespace-nowrap
                    "
                  >
                    One Ecosystem
                  </span>
</h3>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto lg:mx-0">
            Complete solution with dedicated apps for every stakeholder in your
            business.
          </p>
        </div>

        {/* APPS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-10
          "
        >
          {apps.map((app, index) => (
            <div
              key={index}
              className="
                bg-[#F9FFF5]
                rounded-[28px]
                p-6
                sm:p-8
                lg:p-10
                hover:shadow-lg
                transition
                flex
                flex-col
              "
            >
              {/* ICON */}
              <div className="bg-[#E4FFD4] rounded-[12px] w-14 h-14 flex items-center justify-center mb-6">
                <img src={app.icon} alt={app.title} className="w-7 h-7" />
              </div>

              {/* TITLE */}
              <h4 className="text-base sm:text-lg font-semibold text-text-secondary mb-2">
                {app.title}
              </h4>

              {/* DESC */}
              <p className="text-sm sm:text-base text-[#5f5f5f] leading-relaxed mb-6">
                {app.description}
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mt-auto">
                {app.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src="/images/img_square_check.svg"
                      alt=""
                      className="w-5 h-5 shrink-0"
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