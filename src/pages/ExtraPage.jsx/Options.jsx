import React from "react";

const benefits = [
  {
    icon: "/images/img_hearts.svg",
    title: "Commission-based revenue",
    desc: "Earn from every completed transaction.",
  },
  {
    icon: "/images/img_brand_airtable.svg",
    title: "Platform or booking fees",
    desc: "Apply flat or percentage-based charges.",
  },
  {
    icon: "/images/img_camera_selfie.svg",
    title: "Custom pricing rules",
    desc: "Total admin control over monetization logic.",
  },
];

const Options = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-10 text-center lg:text-left">
          <h3 className="text-[22px] sm:text-[32px] lg:text-[48px] font-semibold ">
            <span className="inline-block bg-[#E4FFD4]  rounded-md">
              Monetization
            </span>{" "}
            Options
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#FAFAFA]
                rounded-2xl
                p-6
                flex
                flex-col
                gap-3
                hover:shadow-md
                transition
              "
            >
              {/* ICON */}
              <div className="w-10 h-10 bg-[#E4FFD4] rounded-xl flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
              </div>

              {/* CONTENT */}
              <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                {item.title}
              </h4>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Options;