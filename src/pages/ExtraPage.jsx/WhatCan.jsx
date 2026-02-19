import React from "react";

const services = [
  "Handyman & Home Services",
  "Cleaning & Housekeeping",
  "Local & Professional Services",
  "Beauty & Wellness",
  "Repair & Maintenance",
  "Smart Route Optimization",
];

const WhatCan = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
              What You Can
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
              Build with <span className="font-bold">Xmoveon</span>
            </h2>

            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Drivers get smart routing that saves time and fuel. They see
              earnings clearly and manage their schedule on their own terms.
            </p>

            {/* CTA */}
            <button className="mt-6 flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
              Learn
              <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                ↗
              </span>
            </button>

            {/* Image */}
            <div className="mt-10 rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                alt="Smart Routing"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Right List */}
          <div className="space-y-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition rounded-xl px-4 py-3 text-sm font-medium text-gray-800 cursor-pointer"
              >
                <span className="text-gray-500">🔹</span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatCan;
