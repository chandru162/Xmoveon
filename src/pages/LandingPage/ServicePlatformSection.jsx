import React from "react";

const ServicePlatformSection = () => {
  const services = [
    {
      icon: "/images/img_frame_19.svg",
      title: "Taxi Booking",
      description:
        "Real-time tracking, auto dispatching, driver app, and admin dashboard.",
    },
    {
      icon: "/images/img_frame_19_light_green_700.svg",
      title: "Food Delivery",
      description:
        "Ordering, tracking, menu management, and seamless payments integration.",
    },
    {
      icon: "/images/img_box.svg",
      title: "Courier Delivery",
      description:
        "Package sending, route optimization, delivery proof, and tracking.",
    },
    {
      icon: "/images/img_frame_19_light_green_700_62x62.svg",
      title: "Grocery Delivery",
      description:
        "Category grouping, inventory management, scheduling, and instant checkout.",
    },
    {
      icon: "/images/img_frame_19_62x62.svg",
      title: "Home Services",
      description:
        "Book handy services, repair plumbing, AC maintenance and more on demand.",
    },
    {
      icon: "/images/img_report_medical.svg",
      title: "Pharmacy",
      description:
        "Prescription uploads, medicine delivery, order history, and health tracking.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* MAIN CARD */}
        <div className="bg-white lg:rounded-[42px] py-8 sm:py-10 lg:py-14">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 mb-10">
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
              All-in-
              

              <span
                className="
                  inline-block
                  bg-[#E4FFD4]
                  rounded-md               
                  whitespace-nowrap
                "
              >
              One Service  
              </span> <br />

             <span
                className="
                  inline-block
                  bg-[#E4FFD4]
                  rounded-md               
                  whitespace-nowrap
                "
              >Platform</span>
</h3>

            <p className="text-sm sm:text-base text-text-secondary max-w-md">
              Choose from multiple service categories and launch your customized
              super app.
            </p>
          </div>

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

                <p className="text-sm sm:text-[15px] text-black leading-relaxed">
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

export default ServicePlatformSection;