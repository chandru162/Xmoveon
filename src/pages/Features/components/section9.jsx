import React from 'react';

const Section9 = ({ data }) => {
  return (
    <section className="w-full bg-white py-12 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* TOP CONTENT: Title (Left) & Testimonial (Right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-24 mb-16 md:mb-24">
          
          {/* Top Left: Title Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[34px] md:text-[60px] font-semibold text-[#111827] leading-[1.1] tracking-tight">
              {data.title1} <br />
              {data.title2} <br />
              <span className="bg-[#D4FFB2] px-4 md:px-6 py-1 rounded-t-[20px] md:rounded-t-[25px] rounded-br-[20px] md:rounded-br-[25px] inline-block mt-2">
                {data.title3}
              </span>
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[18px] max-w-lg leading-relaxed">
              {data.footerDescription}
            </p>
          </div>

          {/* Top Right: Quote & Author */}
          <div className="flex-1 lg:max-w-md pt-2 lg:pt-4 md:mr-32 md:mt-10">
            <div className="space-y-4 md:space-y-6  ">
              <p className="text-[#111827] text-[18px] md:text-[22px] font-medium leading-relaxed ">
                "{data.testimonial.quote}"
              </p>
              <p className="text-[#6B7280] text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em]">
                — {data.testimonial.author}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT: 3 Images Row-wise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mt-[-70px]">
          
          {/* Card 1 – Active Drivers */}
          <div className="relative w-full aspect-[2/1] group">
            <img src={data.cards[0].image} alt="" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-[25%] left-[10%] px-2">
              <span className="block text-[32px] md:text-[36px] font-bold text-[#111827]">{data.cards[0].highlightText}</span>
              <p className="text-[20px] md:text-[22px] text-[#111827] font-medium leading-tight">{data.cards[0].title}</p>
            </div>
          </div>

          {/* Card 2 – Uptime */}
          <div className="relative w-full aspect-[2/1] group">
            <img src={data.cards[1].image} alt="" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-[30%] left-[10%] px-2 text-white">
              <div className='flex items-baseline gap-2'>
                <span className="text-[30px] md:text-[34px] font-bold">{data.cards[1].highlightText}</span>
                <span className="text-[18px] md:text-[20px] font-medium">{data.cards[1].title}</span>
              </div>
            </div>
          </div>

          {/* Card 3 – Global Deployments */}
          <div className="relative w-full aspect-[2/1] group">
            <img src={data.cards[2].image} alt="" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-[30%] left-[10%] px-2">
              <h1 className="text-[22px] md:text-[28px] font-bold text-[#111827] leading-snug">
                {data.cards[2].highlightText}
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section9;