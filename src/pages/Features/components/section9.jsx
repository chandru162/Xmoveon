import React from 'react';

const Section9 = ({ data }) => {
  return (
    <section className="w-full bg-white py-12 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8 md:space-y-10 w-full lg:min-w-[500px]">
          <div className="space-y-6">
            <h2 className="text-[34px] sm:text-[48px] md:text-[60px] text-[#111827] leading-[1.1] tracking-tight">
              {data.title1} <br />
              {data.title2}<br />
              <span className="bg-[#D4FFB2] px-4 md:px-6 py-1 rounded-t-[20px] md:rounded-t-[25px] rounded-br-[20px] md:rounded-br-[25px] inline-block mt-2">
                {data.title3}
              </span>
            </h2>

            <div className="max-w-md pt-4 md:pt-6 space-y-4 md:space-y-6">
              <p className="text-[#111827] text-[18px] md:text-[20px] font-medium leading-relaxed">
                "{data.testimonial.quote}"
              </p>
              <p className="text-[#6B7280] text-[14px] md:text-[16px] font-semibold uppercase tracking-widest">
                — {data.testimonial.author}
              </p>
            </div>
          </div>

          <p className="text-[#4B5563] text-[16px] md:text-[18px] max-w-lg leading-relaxed">
            {data.footerDescription}
          </p>
        </div>

        {/* Right Side: Responsive Floating Cards */}
        <div className="flex-1 w-full">
          {/* Mobile: 1 column | Desktop: Grid with offsets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-28 md:gap-x-20 w-full max-w-[650px] mx-auto lg:mx-0 md:mt-32">
            
            {/* Card 1 – 5000+ Active Drivers */}
            <div className="relative w-full aspect-[1.5/1] md:col-start-2 md:right-40">
              <img src={data.cards[0].image} alt="" className="w-full h-full object-contain" />
              <div className="absolute top-[35%] left-[10%] px-4 text-[30px] md:top-[30%]">
                <span className="block text-[40px] md:text-[32px] font-bold text-[#111827]">{data.cards[0].highlightText}</span>
                <p className="text-[30px] md:text-[24px] text-[#111827] leading-tight">{data.cards[0].title}</p>
              </div>
            </div>

            {/* Card 2 – 99.9% Uptime */}
            <div className="relative w-full aspect-[1.5/1] md:col-start-1 md:-mt-12 lg:-mt-20">
              <img src={data.cards[1].image} alt="" className="w-full h-full object-contain" />
              <div className="absolute top-[40%] left-[10%] px-4 text-white md:top-[35%]">
                <div className='flex items-baseline gap-2'>
                  <span className="text-[40px] md:text-[30px] font-bold">{data.cards[1].highlightText}</span>
                  <span className="text-[30px] md:text-[22px]">{data.cards[1].title}</span>
                </div>
              </div>
            </div>

            {/* Card 3 – Global Deployments */}
            <div className="relative w-full aspect-[1.5/1] md:col-start-2 md:-mt-12 lg:-mt-20">
              <img src={data.cards[2].image} alt="" className="w-full h-full object-contain" />
              <div className="absolute top-[40%] left-[10%] px-4 md:top-[35%]">
                <h1 className="text-[40px] md:text-[26px] font-bold text-[#111827] leading-10 md:leading-8">
                  {data.cards[2].highlightText}
                </h1>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Section9;