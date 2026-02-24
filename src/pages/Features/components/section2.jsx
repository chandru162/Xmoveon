import React from 'react';

const Section2 = ({ data }) => {
  return (
    <section className="w-full bg-[#F3F4F6] py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Left Side Content */}
          <div className="flex-1 w-full space-y-10">
            <div className="space-y-6">
              <h2 className="text-[34px] sm:text-[44px] md:text-[50px] text-[#111827] leading-[1.1] tracking-tight">
                <span className="bg-[#D4FFB2] px-6 py-2 rounded-t-[28px] rounded-br-[28px] inline-block mb-2">
                  {data.titleHighlight1}
                </span>
                <span className="bg-[#D4FFB2] px-6 py-2 rounded-t-[28px] rounded-br-[28px] inline-block mb-2">
                  {data.titleHighlight2}
                </span>
                {data.titleMain}
              </h2>
              <p className="text-[#4B5563] text-[16px] md:text-[19px] max-w-lg">
                {data.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#8CFF5E] text-[28px] md:text-[32px] font-medium">{data.featureTitle}</h3>
              <ul className="space-y-4 list-disc list-inside">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="text-[#111827] text-[16px] md:text-[18px]">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Grid Layout */}
          <div className="flex-1 w-full">
            {/* Mobile: grid-cols-1 (One by one)
                Desktop: grid-cols-2 (Zigzag alignment)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-20 md:gap-x-20 md:mt-32 w-full max-w-[650px] mx-auto lg:mx-0 ">
              
              {/* Card 1 - Self-Hosted (Top Right in Desktop) */}
              <div className="md:col-start-2 relative w-full aspect-[1.5/1] md:right-40">
                <img src={data.images[0]} alt="" className="w-full h-full object-contain" />
                <h4 className="absolute top-[22%] left-[10%] text-[30px] md:text-[24px] text-[#111827] font-medium pt-14 md:pt-8">
                  Self-Hosted
                </h4>
              </div>

              {/* Card 2 - Source Code (Middle Left in Desktop) */}
              <div className="md:col-start-1 md:-mt-16 relative w-full aspect-[1.5/1]">
                <img src={data.images[1]} alt="" className="w-full h-full object-contain" />
                <h4 className="absolute top-[22%] left-[10%] text-[30px] md:text-[22px] text-white font-medium leading-8 pt-14 md:pt-8">
                  Full Source Code <br /> Ownership
                </h4>
              </div>

              {/* Card 3 - Infrastructure (Bottom Right in Desktop) */}
              <div className="md:col-start-2 md:-mt-16 relative w-full aspect-[1.5/1]">
                <img src={data.images[2]} alt="" className="w-full h-full object-contain" />
                <h4 className="absolute top-[22%] left-[10%] text-[30px] md:text-[22px] text-[#111827] font-medium leading-8 pt-14 md:pt-8">
                  Scalable <br /> Infrastructure
                </h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;