import React from 'react';

const Section2 = ({ data }) => {
  return (
    <section className="w-full  py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Content: Title (Left) & List (Right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-16 md:mb-24">
          
          {/* Left Side: Title content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[34px] md:text-[60px] font-semibold text-[#111827] leading-[1.1]">
              <span className="bg-[#E4FFD4] px-0 md:px-0 py-0 inline-block mb-0 rounded-sm md:rounded-md">
                {data.titleHighlight1}
              </span>
              <br className="hidden md:block" />
              <span className="bg-[#E4FFD4] px-0 md:px-0 py-0 inline-block mb-0 rounded-sm md:rounded-md">
                {data.titleHighlight2}
              </span>
              <br />
              {data.titleMain}
            </h2>
            <p className="text-[#4B5563] text-[16px] md:text-[19px] max-w-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Right Side: Features List */}
          <div className="flex-1 space-y-6 lg:pt-4">
            <h3 className="text-[#8CFF5E] text-[26px] md:text-[50px] font-bold">
              {data.featureTitle}
            </h3>
            <ul className="space-y-4">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#111827] text-[16px] md:text-[20px] list-disc">
                  <span className="text-[#8CFF5E] ">●</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: 3 Images Row-wise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mt-[-70px] lg:mt-[20px]">
          
          {/* Card 1 - Self-Hosted */}
          <div className="relative w-full  group overflow-hidden">
            <img src={data.images[0]} alt="" className="w-full h-[130px] object-contain transition-transform duration-500 group-hover:scale-105" />
               <h4 className="absolute top-[40%] left-[15%] text-[22px]  md:top-[34%] md:left-[16%] lg:left-[30%] lg:top-[34%] md:text-[20px] text-black font-semibold leading-8">
                  Self-Hosted
            </h4>
          </div>

          {/* Card 2 - Source Code */}
          <div className="relative w-full  group overflow-hidden">
            <img src={data.images[1]} alt="" className="w-full h-[130px] object-contain transition-transform duration-500 group-hover:scale-105" />
              <h4 className="absolute top-[40%] left-[15%] text-[22px] md:top-[30%] md:left-[16%] lg:left-[30%] lg:top-[34%] md:text-[20px] text-white font-semibold leading-8">
                  Full Source Code <br /> Ownership
            </h4>
          </div>

          {/* Card 3 - Infrastructure */}
          <div className="relative w-full  group overflow-hidden">
            <img src={data.images[2]} alt="" className="w-full h-[130px] object-contain transition-transform duration-500 group-hover:scale-105" />
              <h4 className="absolute top-[40%] left-[15%] text-[22px] md:top-[30%] md:left-[16%] lg:left-[30%] lg:top-[34%] md:text-[20px] text-black font-semibold leading-8">
                  Scalable <br />Infrastructure
            </h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;