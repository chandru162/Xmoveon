import React from 'react';

const Section1 = ({ data }) => {
  return (
    <section className="w-full bg-white pt-10 pb-16 md:pt-16 md:pb-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
        
        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col pt-4 w-full">
          
          <h1 className="text-[32px] sm:text-[40px] font-semibold md:text-[60px] text-[#111827] leading-[1.05] tracking-tight">
            {data.title2} 
          </h1>

          <div className="mt-4 flex">
            <span className="bg-[#E4FFD4] font-semibold text-[24px] sm:text-[34px] md:text-[60px] px-5 md:px-0 py-2 md:py-5 rounded-sm md:rounded-md leading-tight text-[#111827] inline-block">
              {data.highlightText1}
            </span>
          </div>
          <div className="mt-2 md:mt-4 flex">
            <span className="bg-[#E4FFD4] font-semibold text-[24px] sm:text-[34px] md:text-[60px] px-5 md:px-0 py-2 md:py-5 rounded-sm md:rounded-md leading-tight text-[#111827] inline-block">
              {data.highlightText2}
            </span>
          </div>

          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <p className="text-[18px] md:text-[22px] font-medium text-[#1F2937] leading-snug">
              {data.subTitle}
            </p>
            <p className="text-[16px] md:text-[19px] text-[#4B5563] leading-[1.7] max-w-[540px]">
              {data.description}
            </p>
            
            {/* Desktop Button: Text-ku keela varum (Hidden on Mobile) */}
            <div className="hidden lg:block pt-4">
              <button className="bg-[#8CFF5E] hover:bg-[#7ce453] transition-all text-black text-[22px] px-8 py-2 rounded-[55px] shadow-lg">
                Request demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image & Mobile Button */}
        <div className="flex-1 w-full lg:max-w-[620px] flex flex-col gap-8">
          <div className="relative rounded-[30px] md:rounded-[55px] overflow-hidden shadow-sm border border-gray-50 aspect-[1.2/1] lg:aspect-auto lg:h-[430px]">
            <img src={data.image} alt="Visual" className="w-full h-full object-cover" />
          </div>

          {/* Mobile Button: Image-ku keela varum (Hidden on Desktop) */}
          <div className="lg:hidden w-full">
            <button className="bg-[#8CFF5E] active:scale-95 transition-all text-black text-[16px] px-6 py-2.5 rounded-[55px] shadow-lg w-max">
              Request demo
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Section1;