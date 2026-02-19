import React, { useState } from "react";
import Button from "../../components/ui/Button";

const testimonials = [
  {
    image: "/assets/Towny.png",
    quote: `TaxiAppz helped us build a platform that is lightning fast,
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

  const next = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const current = testimonials[index];

  return (
    <section className="w-full bg-white py-16">
      <div className="lg:max-w-[1340px] md:max-w-[1020px] max-w-[840px] mx-auto px-6">
        <div className="border rounded-[38px] p-8 relative">

          {/* Header */}
          <h3 className="text-[36px] lg:text-[48px] font-medium mx-0  lg:mx-12 md:mx-2 xl:mx-4">
            <span className="bg-[#E4FFD4] px-0">Real Voices</span>
          </h3>
          <p className="text-gray-500 mt-4 mx-0  lg:mx-12 md:mx-2 xl:mx-4 ">
            People who built their business on this platform.
          </p>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12 mt-12 items-centermx-0  lg:mx-12 md:mx-8 xl:mx-16" >
            {/* Image */}
            <img
              src={current.image}
              alt=""
              className="w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] rounded-xl"
            />

            {/* Testimonial */}
            <div className="flex-1 bg-[#8CF25D] rounded-[28px] p-10 relative">
              <p className="text-sm leading-relaxed mb-6">
                “{current.quote}”
              </p>
              <p className="font-medium">— {current.author}</p>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-4 mt-8  sm:me-4 md:me-6 lg:me-8 xl:me-12 ">
            <Button
              text="<"
              padding="10px 18px"
              className="border"
              onClick={prev}
              disabled={index === 0}
            />
            <span className="text-sm font-medium">
              {index + 1}/{total}
            </span>
            <Button
              text=">"
              padding="10px 18px"
              className="border"
              onClick={next}
              disabled={index === total - 1}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
