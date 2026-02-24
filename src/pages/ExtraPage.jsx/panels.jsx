import React from "react";

const panels = [
  {
    title: "Admin Dashboard",
    desc: "Manage users, commissions, approvals, and reports — all in one place.",
  },
  {
    title: "Service Provider Panel",
    desc: "Control services, availability, and earnings seamlessly.",
  },
  {
    title: "Customer Panel",
    desc: "Search, compare, and book services through a modern, intuitive interface.",
  },
];

const Panels = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <h3
                                className="
                                  text-[26px]
                                  sm:text-[32px]
                                  md:text-[40px]
                                  lg:text-[48px]
                                  xl:text-[52px]
                                  font-medium
                                  leading-[1.15]
                                  text-text-primary
                                "
                              >
                              Panels & <br />                            
                               <span
                                  className="
                                    inline-block
                                    bg-[#E4FFD4]
                                    rounded-md
                                    whitespace-nowrap
                                  "
                                > Dashboards   </span>
                              </h3>

              <img
                src="/images2/features/img_group_1000001743.svg"
                alt="Arrow"
                className="w-[56px] sm:w-[72px] lg:w-[96px] mt-6 lg:mt-10"
              />
            </div>

            {/* IMAGE */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/assets/desk.jpg"
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {panels.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#F4F4F480]
                  rounded-[16px]
                  p-5
                  sm:p-6
                  hover:shadow-sm
                  transition
                "
              >
                <h4 className="font-semibold text-base sm:text-lg mb-1 text-black">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Panels;