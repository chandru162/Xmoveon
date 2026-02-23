import React from 'react';

const Section1 = ({ data }) => {
  return (
    <section className="w-full bg-white pt-16 pb-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        
        {/* Left Side: Professional Typography */}
        <div className="flex-1 flex flex-col pt-4">
          <h1 className="text-[44px] md:text-[68px] font-bold text-[#111827] leading-[1.05] tracking-tight">
            {data.title} -
          </h1>
          
          <div className="mt-4 flex">
            <span className="bg-[#D4FFB2] text-[38px] md:text-[60px] font-bold px-7 py-3 rounded-sm leading-tight text-[#111827] inline-block">
              {data.highlightText1}
            </span>
          </div>
          <div className="mt-4 flex">
            <span className="bg-[#D4FFB2] text-[38px] md:text-[60px] font-bold px-7 py-3 rounded-sm leading-tight text-[#111827] inline-block">
              {data.highlightText2}
            </span>
          </div>
          
          <div className="mt-12 space-y-8">
            <p className="text-[20px] md:text-[22px] font-medium text-[#1F2937] leading-snug ">
              {data.subTitle}
            </p>
            <p className="text-[16px] md:text-[19px] text-[#4B5563] leading-[1.7] max-w-[540px]">
              {data.description}
            </p>
          </div>
        </div>

        {/* Right Side: Image & CTA */}
        <div className="flex-1 w-full lg:max-w-[620px] relative">
          <div className="relative rounded-[55px] overflow-hidden shadow-sm border border-gray-50 aspect-[1.3/1] lg:aspect-auto lg:h-[500px]">
            <img 
              src={data.image} 
              alt="Visual" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-3 shadow-md border border-gray-100">
               <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md">📦</div>
               <span className="text-[13px] font-bold text-gray-900 uppercase tracking-widest">{data.category}</span>
            </div>

            <div className="absolute bottom-0 right-0">
              <button className="bg-[#8CFF5E] hover:bg-[#7ce453] transition-all text-black font-bold text-[22px] px-14 py-9 rounded-tl-[55px] shadow-lg">
                Request demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;