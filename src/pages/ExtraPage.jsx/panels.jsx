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

/*  COMPONENT */
const Panels = () => {
  const [activeTab, setActiveTab] = useState(0);

  const data = {
    leftIcon: (
      <ArrowButtonIcon className="w-14 h-14 md:w-20 md:h-20 text-[#8CFF5E]" />
    ),
    categories: [
      {
        label: "Admin Dashboard",
        image: "/assets/Admin.png",
        features: [
          "Manage users, commissions, approvals, and reports — all in one place.Real-time booking and tracking",
          "All your management tools — users, revenue, bookings, and insights — unified in one place",
          "Oversee operations, track performance, and manage reports in real time",
          "Control users, payments, approvals, and analytics — from a single powerful dashboard."
          
        ],
      },
      {
        label: "Service Provider Panel",
        image: "/assets/Service.png",
        features: [
          "Control services, availability, and earnings seamlessly.",
          "Organize appointments, adjust pricing, and view real-time earnings.",
          "Take control of your services, clients, and payouts with ease.",
          "Update availability, track bookings, and monitor earnings effortlessly."
        ],
      },
      {
        label: "Customer Panel",
        image: "/assets/Customer.png",
        features: [
          "Search, compare, and book services through a modern, intuitive interface.",
          "Explore services, compare options, and book with confidence.",
          'Schedule appointments, track progress, and pay securely online.',
          ""
          
        ],
      },
    ],
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col ">
        
        {/* TITLE  AND IMAGE*/}
        <div className="flex flex-row">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold  mb-8 md:mb-14">
           Panals & <br />  
             <span>
              Dashboard
         <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Arrow"
                className="w-[56px] sm:w-[72px] lg:w-[96px] "
              />
              </span> 
        </h2>
       
        </div>
       
        {/* TABS */}
        <div className="w-full flex gap-3 sm:gap-4 justify-start md:justify-center overflow-x-auto no-scrollbar mb-10">
          {data.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold border transition-all duration-300 whitespace-nowrap
                ${
                  activeTab === index
                    ? "bg-[#8CFF5E] border-[#8CFF5E] text-black shadow-md"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-[1200px]">
          
          {/* LEFT */}
       
            <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gray-100">
              <img
                src={data.categories[activeTab].image}
                alt={data.categories[activeTab].label}
                className="w-full h-[220px] sm:h-[320px] lg:h-[400px] object-cover transition-all duration-500"
              />
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {data.categories.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTab === i ? "w-8 bg-[#8CFF5E]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* RIGHT */}
             <div className="flex-1 order-2 lg:order-2">
            <ul className="space-y-4 sm:space-y-5 bg-[#EDEDED] p-4 rounded-md font-semibold">
              {data.categories[activeTab].features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-[#111827] text-[15px] sm:text-[18px] "
                >
                  <span className="text-[#8CFF5E] text-lg ">●</span>
                  {item}
                </li>
              ))}
            </ul>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panels;