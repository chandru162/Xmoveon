import React, { useState } from 'react';

const WhyChooseSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e?.target?.value }));
  };

  const benefits = [
    { icon: "/images/img_hearts.svg", title: "One-time purchase, lifetime ownership" },
    { icon: "/images/img_brand_airtable.svg", title: "White-label & customizable" },
    { icon: "/images/img_camera_selfie.svg", title: "Self-hosted" },
    { icon: "/images/img_frame_19_light_green_700_54x54.svg", title: "Built for service marketplaces" },
    { icon: "/images/img_frame_19_62x62.svg", title: "Scalable & flexible architecture" },
    { icon: "/images/img_frame_19_54x54.svg", title: "No vendor lock-in" }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Benefits */}
          <div className="w-full lg:w-1/2">
            <div className="relative mb-12">
              {/* FIXED: Added leading-[1.4] to prevent overlapping from your screenshot */}
              <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.4] md:leading-[1.3]">
                <span 
                  className="bg-[#E4FFD4] px-2 py-1"
                  style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
                >
                  Why Choose
                </span> 
                <br /> 
                <span className="inline-block mt-2">Xmoveon</span>
              </h2>
              <img 
                src="/images/img_group_1000001747.svg" 
                alt="" 
                className="absolute -top-6 right-0 w-[60px] md:w-[90px] opacity-80"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-[#E4FFD4] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                    <img src={benefit?.icon} alt="" className="w-6 h-6" />
                  </div>
                  <p className="text-base md:text-lg font-medium text-gray-800 leading-snug">
                    {benefit?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              {/* FIXED: Added leading-tight for the form heading overlap fix */}
              <h3 className=" md:text-md font-bold text-black mb-10 text-center leading-tight">
                Ready to launch your platform?
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#9CEE69]/40 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#9CEE69]/40 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#9CEE69]/40 outline-none transition-all"
                />
                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#9CEE69]/40 outline-none transition-all resize-none"
                />
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#9CEE69] hover:bg-[#8CD95A] text-black font-bold text-lg rounded-2xl transition-all shadow-md"
                  >
                    Send Message
                    <img src="/images/img_iconoirarrowtr_black_900.svg" alt="" className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;