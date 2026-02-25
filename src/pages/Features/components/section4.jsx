import React, { useState } from 'react';

const Section4 = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full  py-12 md:py-20 px-6 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Main Title - Responsive sizing */}
        <h2 className="text-[32px] sm:text-[44px] font-semibold md:text-[60px] text-[#111827] leading-[1.1] mb-8 md:mb-12 max-w-[900px] text-center">
          {data.title}
        </h2>

        <div className="flex justify-start md:justify-center items-center gap-3 md:gap-4 mb-10 md:mb-16 w-full overflow-x-auto pb-4 no-scrollbar">
          {data.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-6 md:px-8 py-2.5 md:py-2 rounded-full text-[16px] md:text-[18px] font-semibold transition-all duration-300 border ${
                activeTab === index
                  ? 'bg-[#8CFF5E] border-[#8CFF5E] text-black shadow-md'
                  : 'bg-transparent border-gray-400 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-left justify-between w-full lg:max-w-[1200px] gap-10 lg:gap-20">
          
          {/* Left Side: Features List */}
          <div className="flex-1 space-y-6 w-full order-2 lg:order-1">
            <ul className="space-y-4 md:space-y-6">
              {data.categories[activeTab].features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 md:gap-4 text-[#111827] text-[16px] md:text-[20px] leading-tight md:leading-5"
                >
                  <span className="text-[#8CFF5E] text-xl">●</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-4 md:pt-6 flex justify-start">
              {data.leftIcon}
            </div>
          </div>

          {/* Right Side: Image Card */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="rounded-[30px] md:rounded-[45px]">
              <img
                src={data.categories[activeTab].image}
                alt={data.categories[activeTab].label}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {data.categories.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${activeTab === i ? 'w-8 bg-[#8CFF5E]' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
