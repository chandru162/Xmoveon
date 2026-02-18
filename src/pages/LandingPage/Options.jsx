import React from "react";

const options = [
  {
    title: "Commission-based revenue",
    desc: "Earn from every completed transaction.",
    icon: "💸",
  },
  {
    title: "Platform or booking fees",
    desc: "Apply flat or percentage-based charges.",
    icon: "🏷️",
  },
  {
    title: "Custom pricing rules",
    desc: "Total admin control over monetization logic.",
    icon: "⚙️",
  },
];

const Options = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
            Monetization Options
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((item, index) => (
            <div
              key={index}
              className="bg-[#fafafa] rounded-2xl p-6 hover:shadow-md transition"
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

export default Options;
