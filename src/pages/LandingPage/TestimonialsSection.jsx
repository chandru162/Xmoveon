import React, { useState } from "react";
import Button from "../../components/ui/Button";

const testimonials = [
  {
    image: "/assets/Towny.png",
    quote: `TaxiAppz helped us build a platform that’s lightning fast,
highly localized, and perfect for the Indian food delivery market.
The experience exceeded expectations.`,
    author: "Towny Product Team",
  },
  {
    image: "/assets/Towny.png",
    quote: `The team delivered our on-demand app faster than we imagined.
Customization and performance were absolutely top-class.`,
    author: "Startup Founder – Bengaluru",
  },
  {
    image: "/assets/Towny.png",
    quote: `From idea to launch, everything was smooth and transparent.
Support and scalability were the biggest wins for us.`,
    author: "Enterprise Client – India",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const next = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* OUTER CARD */}
        <div className="border border-[#e5e5e5] rounded-[40px] p-6 sm:p-8 lg:p-12">

          {/* HEADER */}
          <div className="mb-10 lg:mb-14">
            <h3 className="text-[26px] sm:text-[32px] lg:text-[48px] font-medium">
              <span className="bg-[#E4FFD4] px-2 rounded-md">Real Voices</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-3">
              People who built their business on this platform.
            </p>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* LEFT IMAGE CARD */}
            <div className="bg-[#F5D90A] rounded-[32px] w-full lg:w-[380px] h-[260px] lg:h-[380px] flex items-end p-6">
              <div>
                <img
                  src={current.image}
                  alt=""
                  className="max-w-[200px]"
                />
                <p className="mt-4 text-sm font-medium">
                  {current.author}
                </p>
              </div>
            </div>

            {/* RIGHT TESTIMONIAL BUBBLE */}
            <div className="flex-1 bg-[#9CEE69] rounded-[32px] p-6 sm:p-8 lg:p-10 relative">
              <span className="inline-flex items-center gap-2 text-xs bg-white px-3 py-1 rounded-full mb-4">
                🟢 Client Testimonial
              </span>

              <p className="text-sm sm:text-base leading-relaxed mb-6">
                “{current.quote}”
              </p>

              <p className="font-medium text-sm">
                — {current.author}
              </p>
            </div>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-end items-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 flex items-center justify-center border rounded-full disabled:opacity-40"
            >
              ←
            </button>

            <span className="text-sm font-medium">
              {index + 1} / {total}
            </span>

            <button
              onClick={next}
              disabled={index === total - 1}
              className="w-10 h-10 flex items-center justify-center border rounded-full disabled:opacity-40"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;