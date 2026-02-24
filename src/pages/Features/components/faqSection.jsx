import React, { useState } from 'react';

const FAQSection = ({ data }) => {
  // மொபைலில் முதல் கேள்வி திறந்தே இருக்க வேண்டுமானால் 0 வைக்கலாம், இல்லையெனில் -1
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-gray-100 py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans text-black overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Responsive Font Sizes */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[40px] md:text-[60px] font-bold mb-4 tracking-tight leading-none">FAQ</h2>
          <p className="text-gray-500 text-[16px] md:text-lg font-medium px-4">
            Everything you need to know about getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="relative space-y-4">
          
          {data.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`relative z-10 transition-all duration-300 rounded-[25px] md:rounded-[35px] border ${
                  isOpen ? "bg-[#D4FFB2] border-[#8CFF5E] shadow-md" : "bg-white border-transparent shadow-sm"
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 md:px-10 py-6 md:py-9 flex justify-between items-center text-left gap-4"
                >
                  <span className="text-[18px] md:text-[24px] font-semibold leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Circle Icon with Arrow - Responsive size */}
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-[#8CFF5E] rotate-180 shadow-inner" : "bg-[#8CFF5E] shadow-sm"
                  }`}>
                    <svg width="12" height="7" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[14px]">
                      <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer Area - Smooth Transition fix */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100 pb-6 md:pb-9" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 md:px-10 text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;