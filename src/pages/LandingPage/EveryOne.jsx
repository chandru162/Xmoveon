import React from "react";

const cards = [
  {
    tag: "Customers",
    title: "Food arrives fast and fresh",
    desc: "They order from multiple restaurants in one app and track deliveries in real time.",
    img: "/assets/everyone.png",
  },
  {
    tag: "Restaurants",
    title: "Reach hungry customers without building apps",
    desc: "They manage menus, track orders, and watch sales grow through your platform.",
    img: "/assets/everytwo.png",
  },
  {
    tag: "Drivers",
    title: "Earn more with smart routing",
    desc: "They see clear earnings, control schedules, and deliver efficiently every day.",
    img: "/assets/everythree.png",
  },
  {
    tag: "Admins",
    title: "Build revenue from commissions",
    desc: "You manage everything from one dashboard and grow your business sustainably.",
    img: "/assets/everyfour.png",
  },
];

const EveryoneWins = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10 lg:mb-16">
          <div className="text-center sm:text-left">
            <h2
              className="
                text-[26px]
                sm:text-[32px]
                lg:text-[48px]
                font-medium
                leading-tight
                text-text-primary
              "
            >
              Everyone wins{" "}
              <span className="bg-[#E4FFD4] px-2 py-1 rounded-md">
                here
              </span>
            </h2> <br />

            <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-md mx-auto sm:mx-0">
              Each player in the ecosystem gets what they need to succeed.
            </p>
          </div>

          <span className="hidden sm:block text-[#9CEE69] font-semibold text-[20px] lg:text-[36px]">
            Why
          </span>
        </div>

        {/* CARDS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
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
                transition
                flex
                flex-col
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    h-[160px]
                    sm:h-[170px]
                    object-cover
                  "
                />
                <span
                  className="
                    absolute
                    top-3
                    left-3
                    bg-white
                    text-xs
                    font-medium
                    px-3
                    py-1
                    rounded-full
                    shadow
                  "
                >
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="text-[15px] lg:text-[16px] font-semibold text-text-primary">
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