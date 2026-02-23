import React, { useState } from "react";

const WhyChooseSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    { icon: "/images/img_hearts.svg", title: "One-time purchase, lifetime ownership" },
    { icon: "/images/img_brand_airtable.svg", title: "White-label & customizable" },
    { icon: "/images/img_camera_selfie.svg", title: "Self-hosted" },
    { icon: "/images/img_frame_19_light_green_700_54x54.svg", title: "Built for service marketplaces" },
    { icon: "/images/img_frame_19_62x62.svg", title: "Scalable & flexible architecture" },
    { icon: "/images/img_frame_19_54x54.svg", title: "No vendor lock-in" },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-black leading-tight mb-10">
              <span className="bg-[#E4FFD4] px-2 rounded-md">Why Choose</span>{" "}
              Xmoveon
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e4ffd4] flex items-center justify-center flex-shrink-0">
                    <img src={benefit.icon} alt="" className="w-6 h-6" />
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#333]">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f8f8f8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center mb-8">
                Ready to launch your platform
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { type: "text", placeholder: "Full Name", field: "fullName" },
                  { type: "tel", placeholder: "Phone Number", field: "phoneNumber" },
                  { type: "email", placeholder: "Email", field: "email" },
                ].map((item, i) => (
                  <input
                    key={i}
                    type={item.type}
                    placeholder={item.placeholder}
                    value={formData[item.field]}
                    onChange={handleInputChange(item.field)}
                    className="w-full px-6 py-4 rounded-full border border-[#d0d0d0] focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/30"
                  />
                ))}

                <textarea
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  className="w-full px-6 py-4 rounded-[22px] border border-[#d0d0d0] resize-none focus:outline-none focus:border-[#9cee69] focus:ring-2 focus:ring-[#9cee69]/30"
                />

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-3 px-10 py-4 bg-[#9cee69] rounded-full font-semibold hover:bg-[#8dd858] transition"
                  >
                    Submit
                    <img
                      src="/images/img_iconoirarrowtr_black_900.svg"
                      alt=""
                      className="w-5 h-5"
                    />
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