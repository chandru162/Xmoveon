import React from 'react';

/* ✅ Vite image imports */
import Card1 from '../../../public/assets/Card3.png';
import Card2 from '../../../public/assets/Card2.png';
import Card3 from '../../../public/assets/Card3.png';

// ✅ FIX: Use relative path (./) and default import
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
      bgImage: Card2,
      textClass: 'text-white',
    },
    {
      country: 'India',
      flag: <IndiaFlag className="w-5 h-5" />,
      address: '54 LMS Street, Papanaickenpalayam, Coimbatore - 641037',
      bgImage: Card3,
      textClass: 'text-black',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-20 lg:px-40 font-sans">
      {/* ================= HEADER ================= */}
      <div className="mb-12 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
        <p className="text-gray-500 font-medium">
          If you have any questions, please feel free to ask us.
        </p>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="bg-[#111111] rounded-[30px] md:rounded-[35px] p-6 md:p-12 text-white mb-10 md:mb-20 shadow-xl">
        <h2 className="text-xl font-bold mb-3">We're Here to Help</h2>
        <p className="mb-8 md:mb-10 max-w-xl text-sm leading-relaxed text-gray-300">
          We're here to help! Whether you have questions, need support, or just want to share your
          feedback, feel free to reach out to us.
        </p>

        <form className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border border-gray-600 rounded-full px-6 py-3 md:py-3.5 outline-none focus:border-[#8cf07b] transition text-sm w-full"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border border-gray-600 rounded-full px-6 py-3 md:py-3.5 outline-none focus:border-[#8cf07b] transition text-sm w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 rounded-full px-6 py-3 md:py-3.5 outline-none focus:border-[#8cf07b] transition text-sm w-full"
            />

            <input
              type="text"
              placeholder="Message"
              className="bg-transparent border border-gray-600 rounded-full px-6 py-3 md:py-3.5 outline-none focus:border-[#8cf07b] transition text-sm w-full"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#8cf07b] text-black font-bold py-3 px-10 md:px-12 rounded-full hover:scale-105 transition-transform text-sm shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* ================= GLOBAL PRESENCE ================= */}
      <div className="bg-[#f2ffe8] p-8 md:p-16 rounded-[30px] md:rounded-[40px]">
        <h2 className="text-xl font-bold text-center mb-10">Our Global Presence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {locations.map((loc, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${loc.bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              className={`p-6 rounded-[30px] min-h-[200px] md:min-h-[220px] relative flex flex-col justify-center ${loc.textClass} shadow-sm`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-md">{loc.flag}</span>
                  <h3 className="text-md font-bold">{loc.country}</h3>
                </div>

                <p className="text-sm leading-relaxed">{loc.address}</p>

                {loc.phone && <p className="font-semibold mt-2">{loc.phone}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;