import React, { useState } from "react";

const tabs = [
  {
    label: "Startups & Entrepreneurs",
    tagline: "Launch your idea fast — without losing ownership.",
    description:
      "Xmoveon lets you create your own marketplace for home services, wellness, professionals, or on-demand bookings with zero recurring fees.",
    title: "Why Founders",
    highlight: "Love It",
    points: [
      "Launch quickly with prebuilt modules",
      "Keep 100% ownership & control",
      "Full design & feature freedom",
    ],
    image: "/public/assets/men.jpg",
  },
  {
    label: "Agencies & Development Studios",
    tagline: "Deliver client projects faster — with full flexibility.",
    description:
      "Build and deploy white-label service platforms for multiple clients without recurring platform costs.",
    title: "Why Agencies",
    highlight: "Choose Xmoveon",
    points: [
      "White-label & client-ready",
      "Faster project delivery",
      "Custom branding & features",
    ],
    image: "/public/assets/men.jpg",
  },
  {
    label: "Developers & Tech Founders",
    tagline: "Build scalable products — your way.",
    description:
      "Use a modern, extensible foundation to build and scale service platforms with full technical control.",
    title: "Why Developers",
    highlight: "Trust It",
    points: [
      "Modern & scalable architecture",
      "Full code & hosting control",
      "No vendor lock-in",
    ],
    image: "/public/assets/men.jpg",
  },
];

const Who = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = tabs[activeTab];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">

        {/* Top Title */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium">
            Who Xmoveon Is For
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-sm px-5 py-2 rounded-full transition ${
                  activeTab === index
                    ? "bg-[#9CEE69] font-semibold text-black"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-[18px] font-semibold">
            {data.tagline}
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-gray-700">
            {data.description}
          </p>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-medium mx-4 lg:mx-4 xl:mx-8">
              {data.title} <br />
              <span className="bg-[#E4FFD4] px-2 py-1">
                {data.highlight}
              </span>
            </h3>

            <ul className="mt-6 space-y-3 text-sm mx-4 lg:mx-4 xl:mx-8">
              {data.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-6 flex items-center gap-6 mx-4 lg:mx-4 xl:mx-8">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
                Access
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  ↗
                </span>
              </button>

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Earnings"
                className="w-[70px] sm:w-[90px] lg:w-[120px] h-auto"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md w-full">
              <img
                src={data.image}
                alt={data.label}
                className="w-full h-[260px] sm:h-[320px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Who;