import React from 'react';

// ✅ Vite logic: Public assets are best accessed via absolute paths string
const Card1 = '/assets/Card3.png';
const Card2 = '/assets/Card2.png';
const Card3 = '/assets/Card3.png';

// ✅ Icons
import { QatarFlag, USAFlag, IndiaFlag } from '../../svg/svgIcons';

const ContactSection = () => {
  const locations = [
    {
      country: 'Middle East',
      flag: <QatarFlag className="w-5 h-5" />,
      address: 'No 45, Al diwaniya street, Old airport, Doha, Qatar',
      phone: '+97455971077',
      bgImage: Card1,
      textClass: 'text-black',
    },
    {
      country: 'USA',
      flag: <USAFlag className="w-5 h-5" />,
      address: '17193 Castello Circle, San Diego CA 92127, USA',
      phone: '', 
      bgImage: Card2,
      textClass: 'text-white',
    },
    {
      country: 'India',
      flag: <IndiaFlag className="w-5 h-5" />,
      address: '54 LMS Street, Papanaickenpalayam, Coimbatore - 641037',
      phone: '', 
      bgImage: Card3,
      textClass: 'text-black',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 md:py-20 px-4 sm:px-10 lg:px-20 xl:px-40 font-sans overflow-x-hidden">
      
      {/* ================= HEADER ================= */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-[38px] md:text-[50px] font-bold text-gray-900 leading-tight mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          If you have any questions, please feel free to ask us.
        </p>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="relative overflow-hidden bg-[#111111] rounded-[30px] md:rounded-[45px] p-6 md:p-16 text-white mb-16 md:mb-24 shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-4 md:text-2xl">We're Here to Help</h2>
          <p className="mb-10 max-w-xl text-[15px] md:text-base leading-relaxed text-gray-400">
            Whether you have questions, need support, or just want to share your
            feedback, feel free to reach out to us. We usually respond within 24 hours.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] focus:bg-white/20 transition-all text-sm w-full backdrop-blur-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] focus:bg-white/20 transition-all text-sm w-full backdrop-blur-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] focus:bg-white/20 transition-all text-sm w-full backdrop-blur-sm"
              />
              <input
                type="text"
                placeholder="Message"
                className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] focus:bg-white/20 transition-all text-sm w-full backdrop-blur-sm"
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#9CEE69] text-black font-bold py-4 px-12 rounded-full hover:scale-105 active:scale-95 transition-all text-[16px] shadow-lg shadow-[#9cee69]/20"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#9CEE69]/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* ================= GLOBAL PRESENCE ================= */}
      <div className="bg-[#f8fff4] p-6 md:p-12 lg:p-16 rounded-[40px] md:rounded-[60px] border border-[#e8f5e1]">
        <h2 className="text-[28px] md:text-[34px] font-bold text-center mb-10 md:mb-14 text-gray-900">
          Our Global Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {locations.map((loc, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${loc.bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
              }}
              className={`p-8 md:p-10 rounded-[35px] h-[200px] md:h-[222px] w-full md:w-[350px] relative flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${loc.textClass}`}
            >
              {/* Overlay for Contrast */}
              <div className={`absolute inset-0 ${loc.country === 'USA' ? 'bg-black/20' : 'bg-white/10'} pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-white/90 backdrop-blur-md rounded-lg shadow-sm md:mt-3">
                    {loc.flag}
                  </div>
                  <h3 className="text-md font-extrabold tracking-4">{loc.country}</h3>
                </div>

                <p className="text-[14px] leading-relaxed font-semibold opacity-90">
                  {loc.address}
                </p>

                {loc.phone && (
                  <p className="font-bold mt-0 text-[13px] flex items-center gap-2">
                    {loc.phone}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;