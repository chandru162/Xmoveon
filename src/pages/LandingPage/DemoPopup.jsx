import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const DemoPopup = ({ showDemo = false, setShowDemo = () => {} }) => {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [captchaValue, setCaptchaValue] = useState(null);

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
          name,
          email,
          phone,
          message,
          captcha: captchaValue,
        }),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Something went wrong");
    }
  };

  if (!showDemo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 sm:px-4 mt-20 lg:mt-12 xl:mt-20">
      <div className="relative w-full max-w-md rounded-[20px] bg-gradient-to-b from-[#0b0b0b] to-[#141414] p-4 sm:p-6 lg:p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setShowDemo(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black font-bold"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="mb-4 text-xl font-semibold text-lime-400">
              Try Our Demo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

                  {/* FULL NAME */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    pattern="^[A-Za-z ]+$"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-lime-400/40 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-400 outline-none caret-white focus:border-lime-400"
                  />

                  {/* PHONE */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9+ -]/g, "");
                    }}
                    className="w-full rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-400 outline-none caret-white focus:border-lime-400"
                  />

                    {/* EMAIL */}
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-400 outline-none caret-white focus:border-lime-400"
                    />

                    {/* MESSAGE */}
                    <textarea
                      placeholder="Message"
                      required
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-md border border-white/30 bg-transparent px-5 py-1 text-sm text-white placeholder-gray-400 outline-none caret-white resize-none focus:border-lime-400"
                    />

                    {/* CAPTCHA */}
                    <div className="flex justify-start pt-2">
                      <div className="scale-[0.85] origin-left">
                        <ReCAPTCHA
                          sitekey="6LdnhIEsAAAAAIcO8fNeedq6ICqHZPU9ksvOHZjw"
                          onChange={handleCaptcha}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mx-auto flex rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black hover:scale-105 transition"
                    >
                      Submit ↗
                    </button>

            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-lime-400 font-semibold">
              Submitted Successfully
            </h3>
            <button
              onClick={() => setShowDemo(false)}
              className="mt-4 rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoPopup;