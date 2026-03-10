import React, { useState } from "react";

const FAQSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2
            className="
              text-[26px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[52px]
              font-semibold
              leading-[1.15]
            "
          >
            FAQ
          </h2>

          <p className="mt-2 text-sm sm:text-base">
            Everything you need to know about getting started.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {data.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[22px] transition-all duration-300 ${
                  isOpen ? "bg-[#E4FFD4]" : "bg-[#F5F5F5]"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[18px] font-medium">
                    {faq.question}
                  </span>

                  {/* ARROW ICON */}
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-full bg-[#9CEE69] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div className="px-6 pb-5 text-[16px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;