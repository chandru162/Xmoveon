import React from "react";

const Section3 = ({ data }) => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-16 lg:px-20 xl:px-24">
      <div className="max-w-[1440px] mx-auto">

        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-16 md:mb-24">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6 text-center lg:text-left">

            <h3
              className="
              text-[26px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[52px]
              font-semibold
              leading-[1.15]
              "
            >

             <span className=" inline-block ">
                {data.mainTitleHighlight1}
              </span>

              <span className="bg-[#E4FFD4] inline-block ">
                {data.mainTitleHighlight2}
              </span>

            </h3>

              
            {/* FEATURES LIST */}
            <div className="space-y-6 md:space-y-8">

              {data.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">

                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#E4FFD4] shrink-0">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-base sm:text-[22px] font-semibold text-black">
                      {item.title}
                    </h4>

                    <p className="text-[14px] sm:text-[15px] text-[#6B7280] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full lg:w-1/2 ">

            <h3
              className="
              mt-6 lg:mt-0
              text-center lg:text-end
              text-[#9CEE69]
              text-[26px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[52px]
              font-semibold
              leading-[1.15]
              "
            >
              Why Choose Us?
            </h3>

            <p className="text-[#6B7280] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-lg mt-6 lg:ml-auto text-center lg:text-left">
              {data.topDescription}
            </p>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end overflow-hidden mt-4">

              <img
                src={data.showcaseImage}
                alt="Showcase"
                className="
                w-full
                max-w-[420px]
                sm:max-w-[520px]
                md:max-w-[600px]
                lg:max-w-[520px]
                xl:max-w-[540px]
                h-auto
                object-cover
                transition-transform
                duration-500
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Section3;