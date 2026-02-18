import React from "react";

const features = [
  {
    title: "Customers get what they want",
    desc: "Search by cuisine, distance, or rating. Order in seconds, fast.",
    icon: "🛍️",
  },
  {
    title: "Restaurants keep their independence",
    desc: "They control menus, pricing, and how they operate day to day.",
    icon: "🏪",
  },
  {
    title: "You build the business that connects them",
    desc: "One dashboard runs the whole operation and generates your revenue.",
    icon: "📊",
  },
  {
    title: "Drivers work when they choose",
    desc: "Flexible hours, clear pay, and routes that make sense economically.",
    icon: "🚗",
  },
];

const PlatformPowers = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10 max-w-2xl">
          The Platform That Powers Your Marketplace
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg mb-4 text-lg">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformPowers;
