import React from 'react';

const Section6 = ({ data }) => {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden ">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <h2 className="text-[38px] sm:text-[48px] md:text-[60px] font-semibold leading-tight">
            <span className="text-black">How</span>{' '}
            <span className="bg-[#E4FFD4] text-black px-4 md:px-6 py-2 md:py-6 rounded-t-[15px] md:rounded-t-[20px] rounded-br-[10px] inline-block">
              It Works
            </span>
          </h2>

          {/* Arrow Icon Placeholder */}
          <div className="hidden md:flex w-24 h-14 border border-black/10 rounded-full items-center justify-center relative overflow-hidden cursor-pointer group">
            {/* Logic for Arrow Icon if needed */}
          </div>
        </div>

        {/* Sub-description with Arrow */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 mb-12 text-center md:text-left">
          <p className="text-[16px] md:text-[18px] text-gray-600 max-w-md">
            From concept to launch in just 7 days. No technical expertise required.
          </p>
          <div className="hidden md:block transform rotate-90 md:rotate-0">{data.ArrowIcon}</div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 max-w-[950px] mx-auto">
          {data.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-[25px] md:rounded-[30px] p-8 md:p-12 flex flex-col justify-center 
                         min-h-[220px] md:h-[250px] w-full max-w-[450px] mx-auto  
                         hover:scale-[1.02] transition-transform duration-300 shadow-sm"
            >
              <span className="text-[48px] md:text-[64px] text-[#8CFF5E] font-bold leading-none">
                {step.number}
              </span>

              <div className="mt-4 md:mt-6">
                <h4 className="text-[20px] md:text-[28px] text-black mb-2 font-semibold">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-[15px] md:text-[18px] leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* End Result Banner */}
        <div className="w-full bg-gray-100 rounded-[25px] md:rounded-[30px] p-8 md:p-10 flex flex-col justify-center gap-4 md:gap-6 mt-6 md:mt-8 max-w-[950px] mx-auto hover:scale-[1.02] transition-transform duration-300 shadow-sm">
          <h3 className="text-[36px] md:text-[64px] text-[#8CFF5E] font-bold leading-none">
            End result
          </h3>
          <p className="text-black text-[18px] md:text-[28px] font-medium leading-tight">
            {data.endResult}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section6;