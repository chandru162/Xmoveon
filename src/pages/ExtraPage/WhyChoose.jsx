import { CodeIcon, HeartIcon, HomeIcon, LogoutIcon, PackageIcon, ProfileIcon } from "@/svg/svgIcons";
import React from "react";

const features = [
  {
    icon: <HeartIcon/>,
    title: "Commission-based revenue",
    desc: "Earn from every completed transaction.",
  },
  {
    icon: <PackageIcon/>,
    title: "Platform or booking fees",
    desc: "Apply flat or percentage-based charges.",
  },
  {
    icon: <ProfileIcon/>,
    title: "Custom pricing rules",
    desc: "Total admin control over monetization logic.",
  },
  {  
      icon: <CodeIcon/>,
      title: "Built for service marketplaces" ,
      desc:"booking, scheduling, messaging, and payments."
  },
  { 
    
    icon: <HomeIcon/>,
    title: "Scalable & flexible architecture" ,
    desc:"modern stack designed to grow with your business."


  },
  { 
      
    icon: <LogoutIcon/>, 
    title: "No vendor lock-in" ,
    desc:"you decide how to deploy and evolve your platform."


  }
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#fafafa] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">
        {/* Title */}
        <h3 className="text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold  mb-10">
          Why Choose <span className="">Xmoveon</span>
        </h3>

        {/* Cards */}
        <div className="  grid
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                        lg:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className=" bg-[#F4F4F480]
                          rounded-[20px]
                          p-5
                          sm:p-4
                          lg:p-6
                          flex
                          flex-col
                          gap-4
                          hover:shadow-md
                          transition"
            >
              {/* Icon */}
             <div className="flex items-start gap-3">
                            <div>{item?.icon}</div>
                            <h3 className="text-lg sm:text-lg font-semibold text-text-secondary">
                              {item?.title}
                            </h3>
                          </div>
              <p className="text-sm sm:text-[16px] text-[#5f5f5f] leading-relaxed">
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
