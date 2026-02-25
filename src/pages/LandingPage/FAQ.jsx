import { useState } from "react";

const faqs = [
  {
    q: "How long does onboarding take ?",
    a: "Most restaurants are live within 48 hours. We handle verification and setup so you can focus on growth. Your admin panel gives you full control over the process.",
  },
  {
    q: "Can restaurants set their own prices ?",
    a: "Yes—restaurants can set their own prices, except where limited by laws such as taxes, price controls, or minimum wage regulations in their country or region.",
  },
  {
    q: "What payment methods are supported?",
    a: "Most businesses typically support cash, credit cards, debit cards, and often digital payments like mobile wallets or online transfers, though options may vary by location.",
  },
  {
    q: "How do drivers get paid?",
    a: "Drivers are typically paid through direct bank deposit or digital transfer based on completed deliveries, hours worked, or a per-trip rate, depending on the company’s payment structure.",
  },
  {
    q: "Can you customize the commission rates ?",
    a: "In most cases, commission rates are set by the platform or service and cannot be customized by individual drivers or restaurants.",
  },
  {
    q: "Still have questions?",
    a: "No. There are no hidden charges or recurring subscription fees.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[52px]
                font-semibold text-black">
            FAQ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Everything you need to know about getting started.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[22px] transition-all duration-300 ${
                  isOpen
                    ? "bg-[#E4FFD4]"
                    : "bg-[#F5F5F5]"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-[16px] font-medium text-black">
                    {item.q}
                  </span>

                  {/* ICON */}
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#9CEE69] text-black text-sm font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.a}
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

export default FAQ;