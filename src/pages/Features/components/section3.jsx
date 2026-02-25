import React from 'react';

const Section3 = ({ data }) => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: Mobile-la stacked, Desktop-la flex-row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-4">
          <h2 className="text-[32px] sm:text-[42px] md:text-[60px] text-[#111827] leading-[1.1] tracking-tight">
            <span className="md:px-0 px-1 py-1 rounded-t-[20px] font-semibold  rounded-br-[20px] md:rounded-br-[25px] inline-block mb-0">
              {data.mainTitleHighlight1}
            </span>
            <br/>
            <span className="bg-[#D4FFB2] px-4 md:px-0 py-1 font-semibold rounded-t-[20px] md:rounded-t-[25px] rounded-br-[20px] md:rounded-br-[25px] inline-block mb-2">
              {data.mainTitleHighlight2}
            </span>
            <br />
            {data.mainTitlePlain}
          </h2>
          <h3 className="text-[#8CFF5E] text-[20px] font-semibold md:text-[40px] max-w-[300px] leading-tight md:leading-10 md:mt-20">
            {data.sideTitle}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          {/* Left Side: Description & Features */}
          <div className="flex-1 space-y-8 md:space-y-12 w-full order-1">
            <p className="text-[#6B7280] text-[16px] md:text-[18px] leading-relaxed max-w-lg">
              {data.topDescription}
            </p>

            <div className="space-y-8 md:space-y-10">
              {data.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 md:gap-6 group">
                  <div className="text-xl md:text-2xl mt-1 ">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[18px] md:text-[22px] font-semibold text-[#111827]">
                      {item.title}
                    </h4>
                    <p className="text-[#6B7280] text-[14px] md:text-[16px] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Card (Mobile-la last-ah varum) */}
          <div className="flex-1 w-full order-2">
            <div className="flex justify-center items-center overflow-hidden rounded-[20px] md:rounded-[40px] md:mt-12">
              <img
                src={data.showcaseImage}
                alt="Showcase"
                className="w-full h-auto md:h-[500px]  hover:scale-105 transition-transform duration-500 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
