import { useEffect, useState } from 'react';

const testimonials = [
  {
    image: '/assets/Maskgroup.png',
    quote:
      'The team delivered our on-demand app faster than we imagined. Customization and performance were absolutely top-class.',
    author: 'Startup Founder – Bengaluru',
  },
  {
    image: '/assets/Maskgroup.png',
    quote:
      'TaxiAppz helped us build a platform that’s lightning fast, highly localized, and perfect for the Indian market.',
    author: 'Towny Product Team',
  },
  {
    image: '/assets/Maskgroup.png',
    quote:
      'From idea to launch, everything was smooth and transparent. Support and scalability were the biggest wins.',
    author: 'Enterprise Client – India',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header - Fixed Overlap for Mobile */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-black leading-tight">
            <span
              className="bg-[#E4FFD4] px-4 py-1"
              style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
            >
              Real Voices
            </span>
          </h2>
          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-[280px] leading-relaxed">
            People who built their business on this platform.
          </p>
        </div>

        {/* Content Layout - Responsive Flex */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={current.image}
              alt="Client"
              className="w-full max-w-[500px] h-auto rounded-3xl object-cover shadow-sm"
            />
          </div>

          {/* Testimonial Card Container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <GreenCard
              quote={current.quote}
              author={current.author}
              className="w-full max-w-[560px] h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GreenCard({ quote, author, className = '', ...props }) {
  return (
    <div className={`relative w-full max-w-[561px] mx-auto ${className}`} {...props}>
      {/* SVG Container - Responsive sizing */}
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

      {/* Content Overlay - Optimized for mobile text containment */}
      <div className="absolute inset-0 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-start overflow-hidden">
        {/* Testimonial Badge */}
        <div className="self-start border border-black/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] leading-tight sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 mt-4">
          CLIENT TESTIMONIAL
        </div>

        {/* Quote Text - Better mobile containment */}
        <p className="text-black text-xs sm:text-sm md:text-base lg:text-md font-medium leading-snug sm:leading-relaxed line-clamp-4 sm:line-clamp-3 md:line-clamp-none">
          “{quote}”
        </p>

        {/* Author - Contained */}
        <p className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-medium truncate">
          — {author}
        </p>
      </div>
    </div>
  );
}
