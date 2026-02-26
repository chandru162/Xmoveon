import React from "react";

import image1 from '../../../public/assets/Card01.png';
import image2 from '../../../public/assets/Card02.png';
import image3 from '../../../public/assets/Card03.png';


const Proven = () => {
  const data = {
    titleHighlight1: "The numbers speak  ",
    titleHighlight2: "Startups",
    titleMain: " Proven",
    description:
      "Real results from platforms built on this foundation.",   
    images: [image1, image2, image3],
    imgDescription1:"Vendors trust the platform to reach new customers daily.",
    imgDescription2:"Millions of meals delivered through systems like this one.",
    imgDescription3:"Fast enough to keep food hot and customers happy.",

  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-16 md:mb-24">
          
          {/* Left */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[24px] md:text-[36px] lg:text-[48px] xl:text-[52px] font-semibold text-[#111827] leading-[1.1]">
              <span className="text-[#9CEE69] inline-block rounded-sm md:rounded-md  ">
                Proven
              </span> <br />
              <br className="hidden md:block" />
              <span className="bg-[#E4FFD4] inline-block rounded-sm md:rounded-md">
               {data.titleHighlight1}
              </span>
              <br />
             {data.titleHighlight2}
            </h2>

            <p className="text-[#4B5563] bg-[#E4FFD4]  text-[16px] md:text-[19px] max-w-lg leading-relaxed font-medium">
              {data.description}
            </p>
          </div>

          {/* Right */}
        {/*   <div className="flex-1 space-y-6 lg:pt-4">

            <ul className="space-y-4">
              {data.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#111827] text-[16px] md:text-[20px]"
                >
                  <span className="text-[#8CFF5E]">●</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mt-[-70px]">

          {/* Card 1 */}
          <div className="relative w-full aspect-[2/1] group overflow-hidden">
            <img
              src={data.images[0]}
              alt="Self Hosted"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            
          </div>

          {/* Card 2 */}
          <div className="relative w-full aspect-[2/1] group overflow-hidden">
            <img
              src={data.images[1]}
              alt="Source Code"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            
          </div>

          {/* Card 3 */}
          <div className="relative w-full aspect-[2/1] group overflow-hidden">
            <img
              src={data.images[2]}
              alt="Infrastructure"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Proven;