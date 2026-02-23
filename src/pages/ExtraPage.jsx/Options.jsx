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
      icon: "/images/img_camera_selfie.",
      title: "Custom pricing rules",
      desc: "Total admin control over monetization logic.",

    },
   
  ];

const Options = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-10">
          <h3 className="inline-block b text-[24px]  md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold rounded-full">
            <span className="bg-[#E4FFD4]"> Monetization </span>  Options
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefits, index) => (
            <div
              key={index}
              className="bg-[#fafafa] rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              

              {/* Content */}
              <h3 className="font-semibold text-gray-900 mb-2">
                {benefits.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefits.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Options;
