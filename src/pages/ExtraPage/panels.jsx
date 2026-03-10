import React, { useState } from "react";

/* ICON */
export const ArrowButtonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 134 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="132.38" height="51.056" rx="25.528" stroke="currentColor"/>
    <rect x="0.5" y="0.5" width="114.727" height="51.056" rx="25.528" stroke="currentColor"/>
    <rect x="0.5" y="0.5" width="99.0353" height="50" rx="25" stroke="currentColor"/>
    <path
      d="M56.9295 15.1576L34.0176 37.3535L37.7817 41L60.6936 18.8067L60.6936 38.367L66.0176 38.367L66.0176 10L36.7355 10L36.7355 15.1576L56.9295 15.1576Z"
      fill="currentColor"
    />
  </svg>
);

const Panels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = {
    models: [
      {
        title: "Admin Dashboard",
        desc: "Manage users, commissions, approvals, and reports — all in one place.",
        image: "/assets/Adminimage.webp",
      },
      {
        title: "Service Provider Panel",
        desc: "Control services, availability, and earnings seamlessly.",
        image: "/assets/ServiceDashboardimage.webp",
      },
      {
        title: "Customer Apps",
        desc: "Search, compare, and book services through a modern, intuitive interface.",
        image: "/assets/Customerimage.webp",
      },
    ],
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-4 xl:px-3">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT */}
          <div className="flex-1 space-y-6 text-center lg:text-left">

            <h2
              className="
              text-[26px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[52px]
              font-semibold
              leading-[1.15]
              text-[#111827]
              "
            >
              <span className="bg-[#E4FFD4] px-1 rounded-md">
                Panels
              </span>{" "}
              & <br /> Dashboards

              <div className="mt-2 flex justify-center lg:justify-start">
                <img
                  src="/images2/features/img_group_1000001743.svg"
                  alt="Arrow"
                  className="w-[56px] sm:w-[72px] lg:w-[90px]"
                />
              </div>

            </h2>

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={data.models[activeIndex].image}
                alt={data.models[activeIndex].title}
                className="
                w-full
                h-auto
                object-cover
                rounded-[8px]
                transition-all
                duration-500
                "
              />
            </div>

            {/* DOTS */}
            <div className="flex justify-center lg:justify-start gap-2">
              {data.models.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-8 bg-[#8CFF5E]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex-1 space-y-4 md:space-y-6 xl:mt-44 xl:space-y-8">

            {data.models.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer p-4 sm:p-5 rounded-[18px] transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-[#F3F4F6] shadow-md border-l-4 border-[#8CFF5E]"
                    : "hover:bg-gray-50 border-l-4 border-transparent"
                }`}
              >

                <h4 className="text-[18px] sm:text-[22px] lg:text-[20px] font-semibold text-[#111827]">
                  {item.title}
                </h4>

                <p className="text-sm sm:text-[16px] text-[#5f5f5f] mt-2 leading-relaxed">
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