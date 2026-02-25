import React, { useState } from "react";

const features = [
  {
    title: "Commission management",
    heading: "Set commission rates per restaurant",
    description:
      "Configure custom commission structures for each restaurant, cuisine, or individual vendor. Changes take effect immediately across the platform.",
    image: "/assets/control1.png",
  },
  {
    title: "Restaurant onboarding",
    heading: "Onboard restaurants faster",
    description:
      "Add, verify, and manage restaurant partners easily with streamlined onboarding and approval workflows.",
    image: "/assets/control2.png",
  },
  {
    title: "System analytics",
    heading: "Track system performance",
    description:
      "Monitor orders, revenue, growth metrics, and operational insights from a single analytics dashboard.",
    image: "/assets/control3.png",
  },
  {
    title: "Settings control",
    heading: "Control platform settings",
    description:
      "Manage platform-wide configurations, permissions, and feature toggles with full control.",
    image: "/assets/control4.png",
  },
  {
    title: "Revenue tracking",
    heading: "Track platform revenue",
    description:
      "View detailed revenue reports, payouts, and financial summaries in real time.",
    image: "/assets/control2.png",
  },
  {
    title: "Dispute resolution",
    heading: "Resolve disputes efficiently",
    description:
      "Handle order, payment, and service disputes quickly with built-in resolution tools.",
    image: "/assets/Group.png",
  },
];

const AdminControl = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* TOP */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="block text-[#9CEE69] font-semibold text-[20px] sm:text-[28px] lg:text-[42px]">
            Control
          </span>

          <h2 className="mt-4 text-[22px] sm:text-[28px] lg:text-[40px] font-semibold ">
            The admin panel that{" "} <br />
            <span className="bg-[#E4FFD4] px-3 py-1 rounded-lg">
              runs everything
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            You manage the entire ecosystem from one dashboard. Onboard
            restaurants, set commission rates, monitor performance, and grow
            your business seamlessly.
          </p>

          {/* PILLS */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition whitespace-nowrap ${
                  activeIndex === index
                    ? "bg-[#9CEE69] text-black border-[#9CEE69]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 sm:mt-16 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mx-6">
            <span className="block text-[#9CEE69] font-medium text-[20px] sm:text-[28px] lg:text-[42px]">
              Manage
            </span>

            <h3 className="mt-4 text-[22px] sm:text-[28px] lg:text-[40px] font-semibold ">
              {activeFeature.heading}
            </h3>

            <p className="mt-4 text-sm sm:text-base  max-w-md mx-auto lg:mx-0">
              {activeFeature.description}
            </p>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm hover:opacity-90 transition">
                Access
              </button>

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="arrow"
                className="w-[52px] sm:w-[68px]"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[360px] md:max-w-[420px] aspect-[4/3] rounded-[26px] overflow-hidden shadow-lg">
              <img
                src={activeFeature.image}
                alt="Admin Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdminControl;