import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  HeartIcon,
  PackageIcon,
  ProfileIcon,
  CodeIcon,
  HomeIcon,
  LogoutIcon,
} from "../../svg/svgIcons";

const WhyChooseSection = () => {

  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify captcha");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/mail/send-demo-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
          captcha: captchaValue,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const benefits = [
    { icon: <HeartIcon />, title: "One-time purchase, lifetime ownership" },
    { icon: <PackageIcon />, title: "White-label & customizable" },
    { icon: <ProfileIcon />, title: "Self-hosted" },
    { icon: <CodeIcon />, title: "Built for Enterprise Marketplaces" },
    { icon: <HomeIcon />, title: "Scalable & flexible architecture" },
    { icon: <LogoutIcon />, title: "No vendor lock-in" },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-24 font-poppins">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-left">

            <h3 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold leading-[1.15]">
              <span className="inline-block bg-[#E4FFD4] rounded-md px-2 md:px-0 lg:px-0">
                Why Choose
              </span>{" "}
              <span className="inline-block mt-1 lg:px-0">Xmoveon</span>
            </h3>

            <div className="mt-8 space-y-4 sm:space-y-5">

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-3 max-w-[360px] mx-12 md:mx-8 xl:mx-4 lg:mx-4"
                >

                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-2">
                    <div className="bg-[#E4FFD4] rounded-[10px] mt-2">
                      {benefit.icon}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold leading-snug mt-3">
                    {benefit.title}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2">

            <div className="bg-[#F8F8F8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12">

              {!submitted ? (
                <>
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
                        required
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
                      required
                    />

                    <div className="flex justify-start">
                      <div className="scale-[0.85] origin-left">
                        <ReCAPTCHA
                          sitekey="6LdnhIEsAAAAAIcO8fNeedq6ICqHZPU9ksvOHZjw"
                          onChange={handleCaptcha}
                        />
                      </div>
                    </div>

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
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-[22px] font-semibold text-green-600">
                    Submitted Successfully
                  </h3>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;