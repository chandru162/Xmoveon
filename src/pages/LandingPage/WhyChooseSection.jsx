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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 md:text-center text-left lg:text-left">
            <h3
              className="
                text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[52px]
                font-semibold
                leading-[1.15]
                text-text-primary
              "
            >
              <span className="inline-block bg-[#E4FFD4] rounded-md px-2">
                Why Choose
              </span> {""}
              
              <span className="inline-block mt-1">Xmoveon</span>
            </h3>

            {/* BENEFITS */}
            <div className="mt-8 space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    sm:items-center
                    gap-3
                    lg:justify-start
                    text-left
                    max-w-[360px]
                    mx-auto
                    lg:mx-0
                  "
                >
                  <div className="w-11 h-11 rounded-[10px] bg-[#E4FFD4] flex items-center justify-center flex-shrink-0">
                    <img src={benefit.icon} alt="" className="w-5 h-5" />
                  </div>

                  <p className="text-sm sm:text-base font-medium leading-snug mt-2">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F8F8F8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] font-semibold text-center mb-8">
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
                    className="
                      w-full
                      px-6
                      py-4
                      rounded-full
                      border
                      border-[#d0d0d0]
                      focus:outline-none
                      focus:border-[#9CEE69]
                      focus:ring-2
                      focus:ring-[#9CEE69]/30
                    "
                  />
                ))}

                <textarea
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  className="
                    w-full
                    px-6
                    py-4
                    rounded-[22px]
                    border
                    border-[#d0d0d0]
                    resize-none
                    focus:outline-none
                    focus:border-[#9CEE69]
                    focus:ring-2
                    focus:ring-[#9CEE69]/30
                  "
                />

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="
                      flex
                      items-center
                      gap-3
                      px-10
                      py-4
                      bg-[#9CEE69]
                      rounded-full
                      font-semibold
                      hover:bg-[#8DD858]
                      transition
                    "
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