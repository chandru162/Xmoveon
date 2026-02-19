import React from 'react';

const ServicePlatformSection = () => {
  const services = [
    {
      icon: "/images/img_frame_19.svg",
      title: "Taxi Booking",
      description: "Real-time tracking, auto dispatching, driver app, and admin dashboard."
    },
    {
      icon: "/images/img_frame_19_light_green_700.svg",
      title: "Food Delivery",
      description: "Ordering, tracking, menu management, and seamless payments integration."
    },
    {
      icon: "/images/img_box.svg",
      title: "Courier Delivery",
      description: "Package sending, route optimization, delivery proof, and tracking."
    },
    {
      icon: "/images/img_frame_19_light_green_700_62x62.svg",
      title: "Grocery Delivery",
      description: "Category grouping, inventory management, scheduling, and instant checkout."
    },
    {
      icon: "/images/img_frame_19_62x62.svg",
      title: "Home Services",
      description: "Book handy services, repair plumbing, AC maintenance and more on demand."
    },
    {
      icon: "/images/img_report_medical.svg",
      title: "Pharmacy",
      description: "Prescription uploads,  medicine delivery,  order history, and health tracking."
    }
  ];

  return (
    <section className="w-full bg-white  py-56  lg:py-24 px-4 lg:px-0">
      <div className="w-full max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8">

        <div className="bg-white rounded-[42px] p-4 md:p-8 lg:p-12 ">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10 mx-0 lg:mx-8 xl:mx-12  ">
              <div className='relative '> 
                    {/* Title Text */}
                    <h2 className="relative  text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] font-medium text-black ">
                      All-in- <span className=' bg-[#E4FFD4]'>One Service <br />
                      Platform </span>
                    </h2>
              </div>

                  {/* Right description */}
                  <p className="text-sm sm:text-base text-text-secondary max-w-sm p-5  px-4 md:px-8 lg:px-16 xl:px-24">
                    Choose from multiple service categories and launch your <br/> super app.
                  </p>
           
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 xl:gap-16 mx-4 xl:mx-16 md:mx-8 md:gap-8 lg:mx-12 pt-4 lg:pt-2 xl:pt-1 md:pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#F4F4F480]
                  rounded-[20px]
                  p-6
                  lg:p-8
                  xl:p-10
                  h-[250px]
                  w-[200px]
                  md:w-[270px]
                  lg:w-[340px]
                  lg:h-[190px]
                  xl:h-[160px]
                  xl:w-[340px]
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                "
              >
                <div className="flex items-center gap-5">
                  <div className="bg-[#e4ffd4] rounded-[12px] text-[#5C9B35] ">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-7 h-7  "
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-black  ">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-black leading-relaxed pt-2 md:pt-4 lg:pt-4 xl:pt-6">
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
