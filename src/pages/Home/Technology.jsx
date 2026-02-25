import React from 'react';

const Technology = ({ data }) => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto text-center md:text-left">
        {/* Tech Logos Grid - Mobile First Column Logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 place-items-center md:place-items-start">
          {data.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 transition-transform hover:scale-110 duration-300 bg-white/50 md:bg-transparent p-4 md:p-0 rounded-2xl w-full md:w-auto justify-center md:justify-start md:cursor-pointer"
            >
              {/* Tech Icon / Logo */}
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center  hover:grayscale-0 transition-all">
                {tech.logo}
              </div>

              {/* Tech Name */}
              <span className="text-[18px] md:text-[24px] lg:text-[26px] font-bold text-[#111827]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;