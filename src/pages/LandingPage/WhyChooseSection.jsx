import React, { useState } from 'react';



const WhyChooseSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e?.target?.value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: "/images/img_hearts.svg",
      title: "One-time purchase, lifetime ownership"
    },
    {
      icon: "/images/img_brand_airtable.svg", 
      title: "White-label & customizable"
    },
    {
      icon: "/images/img_camera_selfie.svg",
      title: "Self-hosted"
    },
    {
      icon: "/images/img_frame_19_light_green_700_54x54.svg",
      title: "Built for service marketplaces"
    },
    {
      icon: "/images/img_frame_19_62x62.svg",
      title: "Scalable & flexible architecture"
    },
    {
      icon: "/images/img_frame_19_54x54.svg",
      title: "No vendor lock-in"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="bg-white rounded-[44px] ms-4 lg:ms-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side - Why Choose */}
            <div className="lg:w-1/2">
              {/* Header */}
              <div className="relative mb-10 lg:mb-14">
                <div className="relative mb-4">
                  <img 
                    src="/images/img_highlight_text_light_green_100_01_86x416.png" 
                    alt=""
                    className="w-full max-w-[320px] lg:max-w-[380px] rounded-[22px]"
                  />
                </div>
                <div className="relative mx-8 md:mx-16 lg:mx-4 xl:mx-4">
                  <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-black leading-[1.2] mb-4">
                   <span className='bg-[#E4FFD4] '>Why Choose </span>Xmoveon
                  </h2>
                  <img 
                    src="/images/img_group_1000001747.svg" 
                    alt=""
                    className="absolute  top-8 right-4 md:top-14 md:right-80 lg:top-28 xl:top-24 lg:right-24 w-[90px] lg:w-[110px] h-auto"
                  />
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-6 lg:space-y-7 mx-4 lg:mx-8 md:mx-16">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center md:gap-2 lg:gap-5">
                    <div className="bg-[#e4ffd4] rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={benefit?.icon} 
                        alt=""
                        className="w-7 h-7"
                      />
                    </div>
                    <span className="text-[17px] sm:text-[18px] text-[#333333] font-normal leading-[1.5]">
                      {benefit?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-1/2 mx-8 lg:mx-16 mt-12 lg:mt-12">
              <div className="bg-[#f8f8f8] rounded-[32px] p-8 sm:p-10 lg:p-12 ">
                <div className="text-center mb-10">
                  <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-black leading-[1.3]">
                    Ready to launch your platform
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData?.fullName}
                      onChange={handleInputChange('fullName')}
                      className="w-full px-7 py-4 text-[16px] font-normal text-black placeholder:text-[#999999] bg-white border border-[#d0d0d0] rounded-[32px] focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData?.phoneNumber}
                      onChange={handleInputChange('phoneNumber')}
                      className="w-full px-7 py-4 text-[16px] font-normal text-black placeholder:text-[#999999] bg-white border border-[#d0d0d0] rounded-[32px] focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData?.email}
                      onChange={handleInputChange('email')}
                      className="w-full px-7 py-4 text-[16px] font-normal text-black placeholder:text-[#999999] bg-white border border-[#d0d0d0] rounded-[32px] focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/20 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Message"
                      value={formData?.message}
                      onChange={handleInputChange('message')}
                      rows="4"
                      className="w-full px-7 py-4 text-[16px] font-normal text-black placeholder:text-[#999999] bg-white border border-[#d0d0d0] rounded-[32px] focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/20 transition-all resize-none"
                    />
                  </div>

                  <div className="flex justify-center pt-2">
                    <button 
                      type="submit"
                      className="inline-flex items-center gap-3 px-12 py-4 text-[16px] font-semibold text-black bg-[#9cee69] rounded-[32px] hover:bg-[#8dd858] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9cee69] focus:ring-offset-2"
                    >
                      Submit
                      <img src="/images/img_iconoirarrowtr_black_900.svg" alt="" className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;