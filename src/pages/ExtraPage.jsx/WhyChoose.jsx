import React from "react";

const features = [
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
  {  
      icon: "/images/img_frame_19_light_green_700_54x54.svg",
      title: "Built for service marketplaces" ,
      desc:"booking, scheduling, messaging, and payments."
  },
  { 
    
    icon: "/images/img_frame_19_62x62.svg",
    title: "Scalable & flexible architecture" ,
    desc:"modern stack designed to grow with your business."


  },
  { 
      
    icon: "/images/img_frame_19_54x54.svg", 
    title: "No vendor lock-in" ,
    desc:"you decide how to deploy and evolve your platform."


  }
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#fafafa] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h3 className="text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold t mb-10">
          Why Choose <span className="">Xmoveon</span>
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#E4FFD4] text-[#5C9B35] mb-4 text-lg">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
              </div>

              {/* Content */}
              <h3 className="font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm  leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
