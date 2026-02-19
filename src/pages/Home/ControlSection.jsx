import React from "react";

const features = [
  "Commission management",
  "Restaurant onboarding",
  "System analytics",
  "Settings control",
  "Revenue tracking",
  "Dispute resolution",
];

const AdminControl = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Control Section */}
        <div className="text-center max-w-4xl mx-auto">
          <span className=" font-semibold text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] text-[#9CEE69] ">
            Control
          </span>

          <h2 className="mt-3 font-semibold text-[16px] sm:text-[20px] md:text-[28px] lg:text-[26px] xl:text-[40px] mx-4 lg:mx-0 xl:mx-0">
            The admin panel that
            <span className="bg-[#E4FFD4] px-3 py-1 rounded-lg">
              runs everything
            </span>
          </h2>

          <p className="mt-4 text-sm text-gray-600 mx-4 lg:mx-0 xl:mx-0">
            You manage the entire ecosystem from one dashboard. Onboard
            restaurants, set commission rates, monitor performance, and
            grow your business seamlessly.
          </p>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 overflow-x-auto">
            {features.map((item, index) => (
              <span
                key={index}
                className={`text-xs px-4 py-2 rounded-full border cursor-pointer ${
                  index === 0
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Manage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#9CEE69] font-medium text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] mx-4 md:mx-8 xl:mx-14 lg:mx-12">
              Manage
            </span>

            <h3 className="mt-3 text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold mx-4 md:mx-8 xl:mx-16 lg:mx-12">
              Set
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">
                commission
              </span>
              rates <br />per restaurant
            </h3>

            <p className="mt-2 text-sm text-gray-600 max-w-md mx-4 md:mx-8 xl:mx-16 lg:mx-12">
              Configure custom commission structures for each restaurant,
              cuisine, or individual vendor. Changes take effect
              immediately across the platform.
            </p>
            <div className="flex flex-row m-2">
            <button className=" flex items-center gap-3 bg-black text-white px-6 py-2 md:px-6 md:py-2 lg:px-8  xl:px-8 xl:py-2 rounded-full text-sm hover:opacity-90 mx-4 md:mx-8 xl:mx-12 lg:mx-12">
              Access
            </button>
            
             <img 
                            src="/images2/features/img_group_1000001743.svg" 
                            alt="Driver Earnings" 
                            className="w-[61px] sm:w-[75px] md:w-[92px] lg:w-[96px] xl:w-[100px] h-[24px] sm:h-[29px] md:h-[36px] lg:h-[42px] xl:h-[56px] "
                          />

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="/public/assets/coin.jpg"
                alt="Commission"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdminControl;
