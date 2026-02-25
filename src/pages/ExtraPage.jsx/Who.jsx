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
    image: "/assets/men.jpg",
  },
  {
    label: "Agencies & Development Studios",
    tagline: "Deliver powerful, custom marketplaces for your clients — faster and smarter",
    description:
      "Use Xmoveon as your white-label foundation to cut dev time, increase profit margins, and offer clients full code ownership.",
    title: "Why Agencies ",
    highlight: "Use It",
    points: [
      "One-time license, unlimited customization",
      "70% faster deployment for client projects",
      "Adaptable for any service niche",
    ],
    image: "/assets/men.jpg",
  },
  {
    label: "Developers & Tech Founders",
    tagline: "Get the flexibility you’ve always wanted — no black-box SaaS limitations.",
    description:
      "Xmoveon gives you modular, clean source code to build scalable platforms your way.",
    title: "Why Developers ",
    highlight: "Love It",
    points: [
      "Open architecture for integrations and API flexibility",
      "Scalable backend with documentation",
      "Works with any hosting or payment provider",
    ],
    image: "/assets/men.jpg",
  },
];

const Who = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = tabs[activeTab];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="text-center mb-10">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] xl:text-[52px] font-semibold">
            Who Xmoveon Is For
          </h2>

          {/* PILLS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full transition whitespace-nowrap ${
                  activeTab === index
                    ? "bg-[#9CEE69] font-semibold text-black"
                    : "bg-transparent text-black hover:bg-gray-100 border border-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg font-semibold">
            {data.tagline}
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-700">
            {data.description}
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h3 className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold">
              {data.title}
              <br />
              <span className="inline-block bg-[#E4FFD4] px-2 py-1 rounded-md mt-1">
                {data.highlight}
              </span>
            </h3>

            <ul className="mt-6 space-y-3 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              {data.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#9CEE69] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-5">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
                Access
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  ↗
                </span>
              </button>

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Arrow"
                className="w-[56px] sm:w-[72px] lg:w-[96px]"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt={data.label}
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