import React, { useState } from "react";

/*  ICON  */
export const ArrowButtonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 134 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="132.38" height="51.056" rx="25.528" stroke="currentColor" />
    <rect x="0.5" y="0.5" width="114.727" height="51.056" rx="25.528" stroke="currentColor" />
    <rect x="0.5" y="0.5" width="99.0353" height="50" rx="25" stroke="currentColor" />
    <path
      d="M56.9295 15.1576L34.0176 37.3535L37.7817 41L60.6936 18.8067L60.6936 38.367L66.0176 38.367L66.0176 10L36.7355 10L36.7355 15.1576L56.9295 15.1576Z"
      fill="currentColor"
    />
  </svg>
);

/*  COMPONENT  */
const Panels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = {
    ArrowIcon: (
      <ArrowButtonIcon className="w-16 h-16 md:w-28 md:h-28 text-[#8CFF5E]" />
    ),
    models: [
      {
        title: "Admin Dashboard",
        desc: "Manage users, commissions, approvals, and reports — all in one place.",
        image: "/assets/Admin.png",
      },
      {
        title: "Service Provider Panel",
        desc: "Control services, availability, and earnings seamlessly.",
        image: "/assets/Service.png",
      },
      {
        title: "customer apps",
        desc: "Search, compare, and book services through a modern, intuitive interface.",
        image: "/assets/Customer.png",
      },
      
    ],
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* LEFT */}
          <div className="flex-1 space-y-8 md:space-y-12 order-1">
            <h2 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-semibold text-[#111827] ">
             <span className="bg-[#E4FFD4]"> Panels </span> & Dashboards 
             <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Arrow"
                className="w-[56px] sm:w-[72px] lg:w-[96px]"
              />
            </h2>
            
            {/* IMAGE */}
            <div className="rounded-[24px] sm:rounded-[36px] overflow-hidden ">
              <img
                src={data.models[activeIndex].image}
                alt={data.models[activeIndex].title}
                className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover transition-all duration-500"
              />
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2">
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
          <div className="flex-1 space-y-4 md:space-y-6 pt-2 lg:pt-24 order-2">
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
                <h4 className="text-[17px] sm:text-[22px] md:text-[24px] font-bold text-[#111827]">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] text-[14px] sm:text-[16px] md:text-[18px] mt-2 leading-relaxed">
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