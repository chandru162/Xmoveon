import React from "react";

const panels = [
  {
    title: "Admin Dashboard",
    desc: "Manage users, commissions, approvals, and reports — all in one place.",
  },
  {
    title: "Service Provider Panel",
    desc: "Control services, availability, and earnings seamlessly.",
  },
  {
    title: "Customer Panel",
    desc: "Search, compare, and book services through a modern, intuitive interface.",
  },
];

const Panels = () => {
  return (
    <section className="w-full bg-[#fafafa] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-3 bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
              Panels & Dashboards
              <span className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full shadow">
                ↗
              </span>
            </span>

            {/* Image */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Dashboard"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {panels.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  index === 0
                    ? "bg-white shadow-sm"
                    : "bg-transparent"
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Panels;
