import React, { useState } from 'react';

const FAQSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full  py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans text-black overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[36px] md:text-[54px] font-bold mb-3 tracking-tight leading-none">
            FAQ
          </h2>
          <p className="text-gray-500 text-[15px] md:text-lg font-medium">
            Everything you need to know about getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {data.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`transition-all duration-300 rounded-[20px] md:rounded-[25px] border ${
                  isOpen
                    ? 'bg-[#E4FFD4] border-[#8CFF5E] shadow-sm'
                    : 'bg-white border-transparent shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-5 md:px-8 py-4 md:py-6 flex justify-between items-center text-left gap-4"
                >
                  <span className="text-[17px] md:text-[21px] font-semibold leading-tight">
                    {faq.question}
                  </span>

                  {/* Icon - Adjusted size */}
                  <div
                    className={`flex-shrink-0 w-5 h-5 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#8CFF5E] rotate-180' : 'bg-[#8CFF5E]'
                    }`}
                  >
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Area - Tightened Padding */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-5 md:pb-7' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-8 text-[15px] md:text-[17px] text-gray-700 leading-snug">
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
