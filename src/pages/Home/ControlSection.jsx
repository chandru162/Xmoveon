import React, { useState } from "react";
import Button from "../../components/ui/Button";
import DemoPopup from "../LandingPage/DemoPopup";

const features = [
  {
    title: "Commission management",
    heading: "Set commission rates per restaurant",
    description:
      "Configure custom commission structures for each restaurant, cuisine, or individual vendor. Changes take effect immediately across the platform.",
    image: "/assets/Commisionimage.webp",
  },
  {
    title: "Restaurant onboarding",
    heading: "Onboard restaurants faster",
    description:
      "Add, verify, and manage restaurant partners easily with streamlined onboarding and approval workflows.",
    image: "/assets/Restaurentcontrolimage.webp",
  },
  {
    title: "System analytics",
    heading: "Track system performance",
    description:
      "Monitor orders, revenue, growth metrics, and operational insights from a single analytics dashboard.",
    image: "/assets/Systemimage.webp",
  },
  {
    title: "Settings control",
    heading: "Control platform settings",
    description:
      "Manage platform-wide configurations, permissions, and feature toggles with full control.",
    image: "/assets/Settingimage.webp",
  },
  {
    title: "Revenue tracking",
    heading: "Track platform revenue",
    description:
      "View detailed revenue reports, payouts, and financial summaries in real time.",
    image: "/assets/Revenueimage.webp",
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
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 px-6 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* TITLE */}
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold leading-[1.15] mb-8 md:mb-12 text-center max-w-[900px]">
          The admin panel that <br />
          <span className="bg-[#E4FFD4] px-3 py-1 rounded-lg">
            runs everything
          </span>
        </h2>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 w-full">

          {features.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 md:px-8 py-2.5 rounded-full font-semibold border transition-all duration-300
              
              ${
                activeIndex === index
                  ? "bg-[#8CFF5E] border-[#8CFF5E] text-black shadow-md text-[17px] md:text-[19px] scale-105"
                  : "bg-transparent border-gray-400 text-gray-600 hover:bg-gray-200 text-[15px] md:text-[17px]"
              }`}
            >
              {item.title}
            </button>
          ))}

        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left justify-between w-full lg:max-w-[1200px] gap-10 lg:gap-20">

          {/* LEFT */}
          <div className="flex-1 space-y-6 w-full order-2 lg:order-1">
                <h3 className="text-[16px] sm:text-[32px] md:text-[30px] lg:text-[38px] xl:text-[42px] font-semibold text-[#56E000]">Manage</h3>
            <ul className="space-y-4 md:space-y-6">

              <li className="flex items-start gap-3 text-[24px] md:text-[30px] lg:text-[42px] font-semibold">
                {activeFeature.heading}
              </li>

              <li className="flex items-start gap-3 text-[16px] md:text-[18px] text-gray-600">
                <span className="text-[#8CFF5E] text-xl"></span>
                {activeFeature.description}
              </li>

            </ul>

            <div className="pt-6 flex justify-start">
              <Button
                text="Access"
                text_font_size="16px"
                text_font_weight="600"
                text_color="#fff"
                fill_background_color="#0f0f0f"
                border_border_radius="32px"
                padding="14px 28px"
                onClick={() => setShowDemo(true)}
              />
                                              <img
                                  src="/images2/features/img_group_1000001743.svg"
                                  alt="arrow"
                                  className="w-[52px] sm:w-[68px] mx-4"
                                />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full order-1 lg:order-2">

            <div className="rounded-[30px] md:rounded-[45px] overflow-hidden">
              <img
                src={activeFeature.image}
                alt="Admin Feature"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">

              {features.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-8 bg-[#8CFF5E]"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

      <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />
    </section>
  );
};

export default AdminControl;