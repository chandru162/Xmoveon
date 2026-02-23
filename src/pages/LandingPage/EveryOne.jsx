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
    <section className="w-full bg-white py-14 sm:py-18 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex justify-between items-start mb-10 lg:mb-16">
          <div>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[48px] font-medium leading-tight">
              <span className="bg-[#E4FFD4] px-2 py-1 rounded-md">
                Everyone wins
              </span>{" "}
              here
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-md">
              Each player in the ecosystem gets what they need to succeed.
            </p>
          </div>

          <span className="hidden sm:block text-[#9CEE69] font-semibold text-[20px] lg:text-[36px]">
            Why
          </span>
        </div>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 sm:gap-6 lg:gap-8
          "
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[22px]
                overflow-hidden
                shadow-sm
                hover:shadow-md
                transition-all
              "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[170px] object-cover"
                />
                <span
                  className="
                    absolute top-3 left-3
                    bg-white
                    text-xs font-medium
                    px-3 py-1
                    rounded-full
                    shadow
                  "
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[15px] lg:text-[16px] font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
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