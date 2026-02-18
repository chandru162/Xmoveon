import React from "react";

const cards = [
  {
    tag: "Customers",
    title: "Food arrives fast and fresh",
    desc: "They order from multiple restaurants in one app and track deliveries in real time.",
    img: "/public/assets/phone.jpg",
  },
  {
    tag: "Restaurants",
    title: "Reach hungry customers without building apps",
    desc: "They manage menus, track orders, and watch sales grow through your platform.",
    img: "/public/assets/receive.jpg",
  },
  {
    tag: "Drivers",
    title: "Earn more with smart routing",
    desc: "They see clear earnings, control schedules, and deliver efficiently every day.",
    img: "/public/assets/people.jpg",
  },
  {
    tag: "Admins",
    title: "Build revenue from commissions",
    desc: "You manage everything from one dashboard and grow your business sustainably.",
    img: "/public/assets/desk.jpg",
  },
];

const EveryoneWins = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 mt-72 md:mt-0 xl:mt-0 lg:mt-0">
          <div>
            <h3 className="inline-block bg-[#E4FFD4] text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold px-4 py-1 rounded-full mx-0 md:mx-2 lg:mx-8 xl:mx-12">
              Everyone win 
            </h3><span className="text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold">here</span>
            <p className="mt-3  max-w-md mx-4 md:mx-6 lg:mx-12 xl:mx-16">
              Each player in the ecosystem gets what they need to succeed.
            </p>
          </div>
          <span className="hidden sm:block text-[#9CEE69] font-semibold text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] me-12 mb-16 ">
            Why
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-16">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <span className="absolute top-3 left-3 bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EveryoneWins;
