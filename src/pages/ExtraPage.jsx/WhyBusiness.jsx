import React from "react";

const WhyBusinesses = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Green CTA */}
        <div className="bg-[#9CEE69] rounded-3xl p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div>
            <h2 className="text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-semibold text-black">
              Why Businesses Love Xmoveon
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-black/80">
              <li>● 100% platform ownership — no recurring costs</li>
              <li>● Total control over hosting and data</li>
              <li>● Developer-friendly structure with documentation</li>
              <li>● Fast setup with white-label branding</li>
            </ul>
          </div>

          <div className="flex gap-12">
            <button className="bg-black text-white px-2 py-3 md:px-4 md:py-4 lg:px-6 lg:py-6 rounded-lg text-sm hover:opacity-90 ">
              Start Free Trial →
            </button>
            <button className="bg-white text-black  px-2 md:px-4 lg:px-6  rounded-lg text-sm hover:bg-gray-100">
              Schedule a Demo →
            </button>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default WhyBusinesses;
