import React from 'react';

const Section5 = ({ data }) => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        
        {/* Left Side: Title and Action Buttons */}
        <div className="flex-1 space-y-8 md:space-y-20 w-full">
          <h2 className="text-[32px] sm:text-[42px] md:text-[55px] text-[#111827] leading-[1.1] tracking-tight text-left">
            {data.title1}{' '}
            <span className="bg-[#D4FFB2] px-4 md:px-5 py-1 rounded-t-[18px] md:rounded-t-[25px] rounded-br-[18px] md:rounded-br-[25px] inline-block">
              {data.title2}
            </span>
            <br />
            {data.title3} <br />
            {data.title4}
          </h2>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-0">
            {/* Dark Button - Responsive padding and text */}
            <button className="bg-[#111827] text-white px-6 md:px-10 py-3 md:py-3 rounded-full text-[16px] md:text-[18px] hover:bg-black transition-all shadow-lg active:scale-95">
              {data.ctaButton}
            </button>

            {/* Arrow Icon Button */}
            <div className="flex items-center justify-center relative overflow-hidden cursor-pointer group scale-90 md:scale-100">
              {data.ArrowButton}
            </div>
          </div>
        </div>

        {/* Right Side: Features List Cards */}
        <div className="flex-1 w-full space-y-2 md:space-y-0">
          {data.adminFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 md:p-6 lg:px-20 rounded-[20px] md:rounded-[30px] flex items-center gap-4 cursor-default hover:bg-gray-50 transition-colors"
            >
              {/* Feature Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Feature Text */}
              <p className="text-[16px] md:text-[21px] text-[#111827] leading-tight font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section5;