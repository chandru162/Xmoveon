import React from 'react';

const Section2 = ({ data }) => {
  return (
    <section className="w-full bg-[#F3F4F6] py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto ml-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Side Content */}
          <div className="flex-1 space-y-10 min-w-[500px]">
            <div className="space-y-6">
              <h2 className="text-[44px] md:text-[50px] font-bold text-[#111827] leading-[1.1] tracking-tight">
                <span className="bg-[#D4FFB2] px-6 py-2 rounded-t-[28px] rounded-br-[28px] inline-block mb-2">
                  {data.titleHighlight}
                </span>{' '}
                <br />
                {data.titleMain}
              </h2>
              <p className="text-[#4B5563] text-[18px] md:text-[20px] max-w-lg">
                {data.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#8CFF5E] text-[32px] md:text-[32px] font-bold">
                {data.featureTitle}
              </h3>
              <ul className="space-y-5 list-disc list-inside">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="text-[#111827] text-[18px] md:text-[18px] font-medium">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side Cards Grid */}

          <div>
            <div className="flex flex-wrap gap-14 mt-12 ml-20">
              <div className="w-[300px] h-[200px]"></div>

              <div className="w-[300px] h-[200px] relative">
                <img src={data.images[0]} alt="" className="w-full h-full object-contain" />
                <h1
                  className=" text-[28px] text-[#111827] px-8"
                  style={{ position: 'relative', top: '-130px' }}
                >
                  Self-Hosted
                </h1>
              </div>

              {/* Card 3: Full Source Code */}
              <div className="w-[300px] h-[200px] relative">
                <img src={data.images[1]} alt="" className="w-full h-full object-contain" />
                <h1
                  className=" text-[26px] text-white px-8 leading-8"
                  style={{ position: 'relative', top: '-130px' }}
                >
                  Full Source Code <br /> Ownership
                </h1>
              </div>

              {/* Card 4: Scalable Infrastructure */}
              <div className="w-[300px] h-[200px] relative">
                <img src={data.images[2]} alt="" className="w-full h-full object-contain" />
                <h1
                  className=" text-[26px] text-[#111827] px-8 leading-8"
                  style={{ position: 'relative', top: '-130px' }}
                >
                  Scalable <br /> Infrastructure
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
