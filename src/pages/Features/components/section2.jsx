import React from "react";

const Section2 = ({ data }) => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20  overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 xl:px-24">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-16 lg:mb-24">

          {/* LEFT CONTENT */}
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
              <span className="bg-[#E4FFD4] inline-block rounded-md px-1">
                {data.titleHighlight1}
              </span>

              <br className="hidden md:block" />

              <span className="bg-[#E4FFD4] inline-block rounded-md px-1">
                {data.titleHighlight2}
              </span>

              <br />

              {data.titleMain}
            </h3>

            <p className="text-sm sm:text-base max-w-lg leading-relaxed text-[#5f5f5f] mx-auto lg:mx-0">
              {data.description}
            </p>

          </div>

          {/* RIGHT FEATURES LIST */}
          <div className="flex-1 space-y-6 lg:pt-4">

            <h3 className="text-[#9CEE69] font-semibold text-[22px] sm:text-[28px] lg:text-[40px]">
              {data.featureTitle}
            </h3>

            <ul className="space-y-4">
              {data.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#111827]"
                >
                  <span className="text-black mt-[6px]">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">

          {[
            "Self-Hosted",
            "Full-Source Code Ownership",
            "Scalable Infrastructure",
          ].map((title, index) => (
            <div
              key={index}
              className="
              w-full
              bg-[#F9FFF5]
              rounded-xl
              py-8
              px-6
              flex
              flex-col
              items-center
              justify-center
              text-center
              transition
              hover:shadow-md
              hover:-translate-y-1
              duration-300
              "
            >

              {/* STARS */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map((item) => (
                  <svg
                    key={item}
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="#56E000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8711 0L20.1578 11.5845L31.7423 15.8711L20.1578 20.1578L15.8711 31.7423L11.5845 20.1578L0 15.8711L11.5845 11.5845L15.8711 0Z" />
                  </svg>
                ))}
              </div>

              {/* TITLE */}
              <h4 className="text-[18px] sm:text-[20px] font-semibold text-black">
                {title}
              </h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Section2;