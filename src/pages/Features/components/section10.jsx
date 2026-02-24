import React from 'react';

const Section10 = ({ data }) => {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        
        {/* Left Side: Title and Intro */}
        <div className="flex-1 space-y-6 md:space-y-8 md:mb-20 lg:mb-40 w-full text-left">
          <h2 className="text-[34px] sm:text-[48px] md:text-[60px] text-[#111827] leading-[1.1] tracking-tight">
            {data.title1} <br />
            <span className="bg-[#D4FFB2] px-4 md:px-6 py-1 rounded-t-[20px] md:rounded-t-[25px] rounded-br-[20px] md:rounded-br-[25px] inline-block mt-2">
              {data.title2}
            </span>
          </h2>

          <p className="text-[#4B5563] text-[16px] md:text-[20px] max-w-md leading-relaxed">
            {data.description ||
              "We don't just deliver software — we help you launch successfully."}
          </p>
        </div>

        {/* Right Side: Service Feature List */}
        <div className="flex-1 w-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {data.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#ecedf0] p-5 md:p-6 rounded-[22px] md:rounded-[25px] flex items-center gap-4 md:gap-6 hover:bg-[#d7d9db] transition-all cursor-default group w-full lg:max-w-[500px] border border-transparent hover:border-gray-300"
              >
                {/* Icon Placeholder */}
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-xl md:text-2xl grayscale group-hover:grayscale-0 transition-all">
                  {service.icon}
                </div>

                {/* Service Label */}
                <span className="text-[16px] md:text-[21px] font-semibold text-[#111827] leading-tight">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section10;