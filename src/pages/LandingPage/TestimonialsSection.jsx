import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/assets/Maskgroup.png",
    quote:
      "The team delivered our on-demand app faster than we imagined. Customization and performance were absolutely top-class.",
    author: "Startup Founder – Bengaluru",
  },
  {
    image: "/assets/Maskgroup.png",
    quote:
      "TaxiAppz helped us build a platform that’s lightning fast, highly localized, and perfect for the Indian market.",
    author: "Towny Product Team",
  },
  {
    image: "/assets/Maskgroup.png",
    quote:
      "From idea to launch, everything was smooth and transparent. Support and scalability were the biggest wins.",
    author: "Enterprise Client – India",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">

        {/* HEADER */}
        <div className="mb-10 lg:mb-16 text-center md:text-left lg:text-left">
         <h3
              className="
                text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[52px]
                font-semibold
                leading-[1.15]
                text-text-primary
              "
            >
              Real 

              <span
                className="
                  inline-block
                  bg-[#E4FFD4]
                  rounded-md
                  px-3
                  py-1
                  mt-2
                  whitespace-nowrap
                "
              >
               Voices
              </span>
            </h3>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl  lg:mx-0">
            People who built their business on this platform.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={current.image}
              alt="Client"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[360px]
                md:max-w-[420px]
                lg:max-w-[500px]
                h-auto
                rounded-3xl
                object-cover
                shadow-sm
              "
            />
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <GreenCard
              quote={current.quote}
              author={current.author}
              className="w-full max-w-[560px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GreenCard({ quote, author, className = "", ...props }) {
  return (
    <div className={`relative w-full ${className}`} {...props}>
      {/* SVG BACKGROUND */}
      <svg
        viewBox="0 0 561 316"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 56.1486V17.8844C0 8.00711 8.00711 0 17.8844 0H201.233C216.738 0 229.308 12.5693 229.308 28.0743C229.308 43.5793 241.877 56.1486 257.382 56.1486H297.335H529.7C546.586 56.1486 560.275 69.8372 560.275 86.723V264.726C560.275 281.612 546.586 295.3 529.7 295.3H307.525C301.898 295.3 297.335 299.862 297.335 305.49C297.335 311.118 292.773 315.68 287.145 315.68H30.5744C13.6887 315.68 0 301.991 0 285.106V56.1486Z"
          fill="#9CEE69"
        />
      </svg>

      {/* CONTENT */}
      <div className="absolute inset-0 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-start">
        <span className="self-start border border-black/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-3 mt-4">
          Client Testimonial
        </span>

        <p className="text-black text-xs sm:text-sm md:text-base lg:text-[17px] font-medium leading-relaxed">
          “{quote}”
        </p>

        <p className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-semibold truncate">
          — {author}
        </p>
      </div>
    </div>
  );
}