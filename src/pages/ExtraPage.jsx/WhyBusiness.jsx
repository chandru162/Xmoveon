import React from "react";

const WhyBusinesses = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GREEN CTA */}
        <div
          className="
            bg-[#9CEE69]
            rounded-[24px]
            sm:rounded-[32px]
            p-6
            sm:p-8
            lg:p-14
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-8
          "
        >
          {/* LEFT CONTENT */}
          <div className="md:text-center lg:text-left">
            <h3
              className="
                                  text-[26px]
                                  sm:text-[32px]
                                  md:text-[40px]
                                  lg:text-[48px]
                                  xl:text-[48px]
                                  font-semibold
                                  leading-[1.15]
                                  text-text-primary
                                "
            >
              <span
                className="
                                    inline-block
                                    rounded-md
                                    whitespace-nowrap
                                  "
              > Why Businesses  Love Xmoveon</span> 

            </h3>
            <ul className="mt-2 space-y-4 text-sm sm:text-base max-w-[350px] md:max-w-full lg:max-w-full xl:max-w-full">
              <li>● 100% platform ownership — no recurring costs</li>
              <li>● Total control over hosting and data</li>
              <li>● Developer-friendly structure with documentation</li>
              <li>● Fast setup with white-label branding</li>
            </ul>
          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-col sm:flex-row gap-4  lg:w-auto justify-center  lg:justify-end">
            <button
              className="
                bg-black
                text-white
                px-6
                py-3
                rounded-lg
                text-sm
                hover:opacity-90
                transition
                w-full
                sm:w-auto
              "
            >
              Start Free Trial →
            </button>

            <button
              className="
                bg-white
                text-black
                px-6
                py-3
                rounded-lg
                text-sm
                hover:bg-gray-100
                transition
                w-full
                sm:w-auto
              "
            >
              Schedule a Demo →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyBusinesses;