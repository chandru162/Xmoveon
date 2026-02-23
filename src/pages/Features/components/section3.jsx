import React from 'react';

const Section3 = ({ data }) => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Dynamic Title Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <h3 className="text-[#8CFF5E] text-[24px] md:text-[28px] font-bold min-w-[300px] leading-tight ">
            {data.sideTitle}
          </h3>
          <h2 className="text-[42px] md:text-[60px] font-bold text-[#111827] leading-[1.1] tracking-tight">
            <span className="bg-[#D4FFB2] px-6 py-1 rounded-t-[25px] rounded-br-[25px] inline-block mb-2">
              {data.mainTitleHighlight}
            </span> <br />
            {data.mainTitlePlain}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Dynamic Features List */}
          <div className="flex-1 space-y-12">
            <p className="text-[#6B7280] text-[18px] leading-relaxed max-w-lg mb-10">
              {data.topDescription}
            </p>

            <div className="space-y-10">
              {data.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="text-xl mt-1 grayscale group-hover:grayscale-0 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[22px] font-bold text-[#111827]">
                      {item.title}
                    </h4>
                    <p className="text-[#6B7280] text-[16px] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Image Card */}
          <div className="flex-1 w-full">
            <div className=" p-12 lg:p-20 flex justify-center items-center">
              <img 
                src={data.showcaseImage} 
                alt="Showcase" 
                className="w-full h-auto  hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;