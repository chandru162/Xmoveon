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
      description: "Prescription uploads, medicine delivery, order history, and health tracking."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-24 px-1 lg:px-0">
      <div className="w-full max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8">
        <div className="bg-white rounded-[42px] p-4 md:p-8 lg:p-12">

          {/* Header - Stays exact for PC/Laptops */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 lg:mx-12">
            <div className='relative'>
              <h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] font-medium text-black">
                All-in- <span className='bg-[#E4FFD4]'>One Service <br className="hidden lg:block" /> Platform</span>
              </h2>
            </div>

            <div className="max-w-sm lg:text-left">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Choose from multiple service categories and launch your <br className="hidden lg:block" /> super app.
              </p>
            </div>
          </div>

          {/* Service Grid - Responsive Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 lg:mx-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#F4F4F480]
                  rounded-[24px]
                  p-6
                  md:p-8
                  lg:p-10
                  min-h-[220px]
                  flex
                  flex-col
                  transition-all
                  hover:bg-[#f0f0f0]
                  hover:shadow-sm
                  group
                "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#e4ffd4] p-3 rounded-[12px] flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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