import React from "react";

const Who = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Who Xmoveon Is For
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <span className="bg-green-500 text-white text-sm px-4 py-2 rounded-full">
              Startups & Entrepreneurs
            </span>
            <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">
              Agencies & Development Studios
            </span>
            <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">
              Developers & Tech Founders
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            Launch your idea fast — without losing ownership. Xmoveon lets you
            create your own marketplace for home services, wellness,
            professionals, or on-demand bookings with zero recurring fees.
          </p>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Why Founders{" "}
              <span className="text-green-500 font-bold">Love It</span>
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              <li>🚀 Launch quickly with prebuilt modules</li>
              <li>🔐 Keep 100% ownership & control</li>
              <li>🧠 Full design & feature freedom</li>
            </ul>

            {/* Button */}
            <div className="mt-6">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
                Access
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Founders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Who;
