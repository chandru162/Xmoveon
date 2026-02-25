import React, { useState } from 'react';

const Section7 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
          {/* LEFT SIDE: Title & Image */}
          <div className="flex-1 space-y-8 md:space-y-12 w-full order-1">
            <h2 className="text-[32px] sm:text-[44px] md:text-[60px] font-semibold text-[#111827] leading-[1.1] tracking-tight">
              <span className="bg-[#D4FFB2] px-4 md:px-6 py-1 rounded-t-[18px] md:rounded-t-[25px] rounded-br-[18px] md:rounded-br-[25px] inline-block mb-2">
                {data.titleHighlight}
              </span>
              <br />
              <div className="flex items-center gap-4 relative md:max-w-10">
                {data.titleMain}
                {/* Desktop-only Arrow positioning */}
                <div className="hidden md:block absolute md:top-10 md:left-52 ">
                  {data.ArrowIcon}
                </div>
              </div>
            </h2>

            {/* HERO IMAGE (Shows after title in Mobile) */}
            <div className="rounded-[30px] md:rounded-[45px]">
              <img
                src={data.models[activeIndex].image}
                alt={data.models[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* DOTS */}
            <div className="flex gap-2 justify-center md:justify-center">
              {data.models.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-[#8CFF5E]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Interactive List */}
          <div className="flex-1 w-full pt-4 lg:pt-24 space-y-4 md:space-y-6 order-2">
            {data.models.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer p-4 md:p-4 rounded-[20px] md:rounded-[20px] transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-[#F3F4F6] shadow-md border-l-4 border-[#8CFF5E]'
                    : 'bg-transparent hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <h4 className="text-[18px] md:text-[24px] font-bold text-[#111827]">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] text-[15px] md:text-[18px] mt-2 leading-relaxed">
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

export default Section7;
