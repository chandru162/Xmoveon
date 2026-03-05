import React, { useState } from 'react';

const Section7 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24  overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
          {/* LEFT SIDE: Title & Image */}
          <div className="flex-1 space-y-8 md:space-y-12 w-full order-1">
            <h2 className="text-[26px]
                      sm:text-[32px]
                      md:text-[40px]
                      lg:text-[48px]
                      xl:text-[52px]
                      font-semibold
                      leading-[1.15]">
              <span className="bg-[#E4FFD4] px-0 md:px-0 py-1 rounded-t-[18px] md:rounded-t-[25px] rounded-br-[18px] md:rounded-br-[25px] inline-block mb-2">
                {data.titleHighlight} 
              </span>
              <div className="flex items-center  relative md:max-w-10">
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

            
          </div>

          {/* RIGHT SIDE: Interactive List */}
          <div className="flex-1 w-full pt-4 lg:pt-24 space-y-4 md:space-y-6 order-2">
            {data.models.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="cursor-pointer p-4 md:p-4 rounded-[20px] md:rounded-[20px] transition-all duration-300 bg-[#F3F4F6] shadow-md border-l-4 border-[#8CFF5E]"                
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
