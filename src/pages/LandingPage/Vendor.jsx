import React from "react";

const vendorFeatures = [
    {
      icon: '',
      title: 'Menus',
      description: 'Update items, prices, and availability instantly across the platform.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '',
      title: 'Orders',
      description: 'Manage incoming orders smoothly, even during peak hours.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '',
      title: 'Sales',
      description: 'Understand performance and identify best-selling items.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '',
      title: 'Promotions & Visibility',
      description: 'Boost reach with offers and featured listings.',
      bgColor: 'bg-background-gray'
    }
  ];

const VendorsSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
        <div>
          <div className="flex flex-row justify-between">
             <span className="text-[23px] sm:text-[28px] md:text-[35px] lg:text-[48px] xl:text-[48px] font-semibold leading-3xl text-primary-background font-[Inter] mx-6 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 ">
                        Drivers
                      </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
              Your restaurant{" "}
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">
                grows on
              </span>{" "}
              this platform
            </h2>
            </div>
          
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Restaurants can manage menus, handle orders, and reach more
              customers without building their own app. Built-in insights
              help improve sales and daily operations.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 space-y-4">
              {vendorFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item. description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
                alt="Restaurant interior"
                className="w-full h-72 sm:h-80 lg:h-[420px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VendorsSection;







