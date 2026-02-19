import React from "react";

const features = [
  {
    title: "One-time purchase, lifetime ownership",
    desc: "Pay once, own it forever.",
    icon: "💚",
  },
  {
    title: "White-label & customizable",
    desc: "Tailor every detail to match your brand.",
    icon: "🎨",
  },
  {
    title: "Self-hosted",
    desc: "You control your data, hosting, and user experience.",
    icon: "🔒",
  },
  {
    title: "Built for service marketplaces",
    desc: "Booking, scheduling, messaging, and payments.",
    icon: "🛠️",
  },
  {
    title: "Scalable & flexible architecture",
    desc: "Modern stack designed to grow with your business.",
    icon: "📈",
  },
  {
    title: "No vendor lock-in",
    desc: "You decide how to deploy and evolve your platform.",
    icon: "🔗",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#fafafa] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
          Why Choose <span className="font-bold">Xmoveon</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4 text-lg">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
