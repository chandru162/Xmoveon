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
    <section className="w-full py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="flex flex-row justify-start">
            <h3 className=" text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold  rounded-full">
             <span className="bg-[#E4FFD4]"> Panels & </span> <br /> Dashboards
            </h3>
            <img 
                   src="/images2/features/img_group_1000001743.svg" 
                   alt="Driver Earnings" 
                   className="w-[61px] sm:w-[75px] md:w-[92px] lg:w-[106px] xl:w-[122px] h-[24px] sm:h-[29px] md:h-[36px] lg:h-[42px] xl:h-[48px] mt-20 mx-4"
              />
            </div>

            {/* Image */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="/public/assets/desk.jpg"
                alt="Dashboard"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {panels.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-md bg-[#F4F4F480] w-[80%] 
                }`}
              >
                <h3 className="font-semibold  mb-1">
                  {item.title}
                </h3>
                <p className="text-sm  leading-relaxed">
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
