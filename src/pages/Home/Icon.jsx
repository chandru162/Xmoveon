import React from "react";


const Icon = () => {
  const services = [

     {
      icon: "/public/assets/planet.png",
      title: "Global Ready",
      description:
        "Multi-language and multi-currency support with flexible regional configuration.",
    },

    {
      icon: "/public/assets/brightness-up-filled.png",
      title: "  High-Performance Architecture",
      description:
        "Built with modern, scalable technology for fast, reliable performance.",
    },
     {
      icon: "/public/assets/code.png",
      title: " Full Source Code Ownership",
      description:
        "Complete access and control for unlimited customization and future expansion.",
    },

    {
      icon: "/public/assets/report-money.png",
      title: "Enterprise-Grade Reliability",
      description:
        "Secure cloud infrastructure with 99.9% uptime and high availability.",
    },

    {
      icon: "/public/assets/edit-circle.png",
      title: " Fully White-Label & Customizable",
      description:
        "Personalize branding, design elements, and workflows to match your business.",
    },

    {
      icon: "/public/assets/headphones.png",
      title: " Dedicated Setup & Support",
      description:
        "Deployment assistance included, with optional maintenance and ongoing enhancements.",
    },

   
  ];


  return (
      <section className="w-full bg-white py-12 sm:py-16 lg:py-0 overflow-hidden">
                  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

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
                              <div className="bg-[#E4FFD4] rounded-[12px] p-3 shrink-0">
                                <img
                                  src={service.icon}
                                  alt={service.title}
                                  className="w-6 h-6"
                                />
                              </div>

                              <h4 className="text-base sm:text-lg font-semibold text-black">
                                {service.title}
                              </h4>
                            </div>

                            <p className="text-sm sm:text-base  text-black leading-relaxed">
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
