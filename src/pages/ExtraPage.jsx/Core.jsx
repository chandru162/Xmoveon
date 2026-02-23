import React from "react";

const features = [
  {
    title: "Service Listings",
    desc: "Create detailed listings with images, pricing, and availability.",
    icon: "🗂️",
  },
  {
    title: "Booking & Scheduling",
    desc: "Instant or scheduled bookings made simple.",
    icon: "📅",
  },
  {
    title: "Messaging",
    desc: "In-platform communication between customers and providers.",
    icon: "💬",
  },
  {
    title: "Payments",
    desc: "Supports multiple payment options and commissions.",
    icon: "💳",
  },
  {
    title: "Reviews & Ratings",
    desc: "Build trust with verified feedback.",
    icon: "⭐",
  },
  {
    title: "Flexible Pricing",
    desc: "Offer fixed, hourly, or request-based pricing models.",
    icon: "⚙️",
  },
];

const Core = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
            Core Marketplace Features
          </span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="text-green-500 text-lg mt-1">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Core;

















