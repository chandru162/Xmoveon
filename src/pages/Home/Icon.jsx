import React from "react";
import {  PackageIcon , ProfileIcon  , CodeIcon , AddDocumentIcon , LocalisationIcon, ClockBoxIcon} from "../../svg/svgIcons";
const Icon = () => {
  const services = [

     {
      icon: <PackageIcon/>,
      title: "Global Ready",
      description:
        <p className="mt-4">Multi-language and multi-currency support with flexible regional configuration.</p>,
    },

    {
      icon: <ProfileIcon/>,
      title: "  High-Performance Architecture",
      description:
        "Built with modern, scalable technology for fast, reliable performance.",
    },
     {
      icon: <LocalisationIcon/>,
      title: " Full Source Code Ownership",
      description:
        "Complete access and control for unlimited customization and future expansion.",
    },

    {
      icon: <CodeIcon/>,
      title: "Enterprise-Grade Reliability",
      description:
        "Secure cloud infrastructure with 99.9% uptime and high availability.",
    },

    {
      icon: <AddDocumentIcon/>,
      title: " Fully White-Label & Customizable",
      description:
        "Personalize branding, design elements, and workflows to match your business.",
    },

    {
      icon: <ClockBoxIcon/>,
      title: " Dedicated Setup & Support",
      description:
        "Deployment assistance included, with optional maintenance and ongoing enhancements.",
    },

   
  ];


  return (
       <section className="w-full bg-white py-12 sm:py-16 lg:py-4 overflow-hidden">
                  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">

                    {/* MAIN CARD */}
                    <div className="bg-white lg:rounded-[42px] py-8 sm:py-10 lg:py-14">

                      {/* SERVICES GRID */}
                       <div
                          className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            xl:grid-cols-3
                            gap-6
                            lg:gap-10
                          "
                    >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="
                          bg-[#F4F4F480]
                          rounded-[20px]
                          p-5
                          sm:p-6
                          lg:p-8
                          flex
                          flex-col
                          gap-4
                          hover:shadow-md
                          transition
                        "
                      >
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0  bg-[#E4FFD4] rounded-[10px] w-14 h-14 flex items-center justify-center ">
                                <div className=" text-[#56E000] ">
                                  {service.icon}
                                </div>
                            </div>

                          <h4 className="text-base sm:text-lg font-semibold text-black">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-sm sm:text-[16px] text-[#5f5f5f] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>


                    </div>
                  </div>
                </section>
  );
};

export default Icon;
