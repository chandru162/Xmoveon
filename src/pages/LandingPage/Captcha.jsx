import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaBox = () => {

  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
    console.log("Captcha token:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify captcha");
      return;
    }

    alert("Form submitted successfully!");

    // reset captcha after submit
    recaptchaRef.current.reset();
    setCaptchaValue(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LeFhoUsAAAAAMZPHR_aY7swKiJfJIVQ_rZNSHcq"
        onChange={handleCaptcha}
      />

      <button
        type="submit"
        className="bg-black text-white px-5 py-2 rounded-md"
      >
        Submit
      </button>

    </form>
  );
};

export default CaptchaBox;