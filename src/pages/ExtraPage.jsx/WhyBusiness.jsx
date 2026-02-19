import React from "react";

const WhyBusinesses = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Green CTA */}
        <div className="bg-green-400 rounded-3xl p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Why Businesses Love Xmoveon
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-black/80">
              <li>● 100% platform ownership — no recurring costs</li>
              <li>● Total control over hosting and data</li>
              <li>● Developer-friendly structure with documentation</li>
              <li>● Fast setup with white-label branding</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90">
              Start Free Trial →
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-gray-100">
              Schedule a Demo →
            </button>
          </div>
        </div>

        {/* Real Voices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
              Real Voices
            </span>

            <p className="mt-3 text-sm text-gray-600">
              People who built their business on this platform.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="bg-green-400 rounded-3xl p-8 text-black relative">
            <span className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded-full mb-4">
              ✔ Client Testimonial
            </span>

            <p className="text-lg font-medium leading-relaxed">
              “TaxiAppz helped us build a platform that's lightning fast,
              highly localized, and perfect for the Indian food delivery
              market. The experience exceeded expectations.”
            </p>

            <p className="mt-4 text-sm font-semibold">
              — Towny Product Team
            </p>

            <div className="absolute bottom-4 right-6 text-xs bg-white px-3 py-1 rounded-full">
              1 / 3
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyBusinesses;
