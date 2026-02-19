import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Foody
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Features</li>
          <li className="hover:text-black cursor-pointer">Solutions</li>
          <li className="hover:text-black cursor-pointer">Apps</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          Get Started →
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              <span className="text-green-500">Xmoveon</span> Launch <br />
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-lg mt-2">
                Your Own Service
              </span>{" "}
              Marketplace Platform
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Beautiful ownership. One-time payment. No subscriptions.
              Xmoveon is the all-in-one service marketplace software that
              lets you build your own platform — similar to Taskrabbit,
              but with complete control, source code access, and zero
              recurring fees.
            </p>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg p-4 max-w-md mx-auto">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512499617640-c2f999098c01"
                  alt="Mobile"
                  className="rounded-2xl w-full h-64 object-cover"
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs shadow">
                  📱 Tummy
                </span>

                {/* Button */}
                <button className="absolute bottom-3 right-3 bg-green-500 text-white text-xs px-4 py-2 rounded-full">
                  Request demo
                </button>
              </div>

              {/* Bubble text */}
              <div className="mt-4 bg-gray-100 p-4 rounded-2xl text-sm text-gray-600">
                Whether you’re a startup, agency, or developer, Xmoveon
                gives you the flexibility to create, customize, and scale
                your own marketplace — entirely under your brand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
