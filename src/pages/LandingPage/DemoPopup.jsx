import { useState } from "react";

const DemoPopup = ({ showDemo = false, setShowDemo = () => {} }) => {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   const res = await fetch("http://localhost:5000/api/mail/send-demo-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
      }
  };



  if (!showDemo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 sm:px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#141414] p-4 sm:p-6 lg:p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setShowDemo(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black font-bold"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="mb-4 text-xl font-semibold text-lime-400 ">
              Try Our Demo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                pattern="^[A-Za-z ]+$"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-lime-400/40 bg-transparent px-4 py-2 text-sm text-white outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                pattern="^[0-9]{10}$"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none"
              />

              <textarea
                placeholder="Message"
                required
                minLength={10}
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none resize-none"
              />

               <div className="flex items-center gap-2 bg-black px-3 py-3 rounded-[14px] w-60 cursor-pointer">
                        <input type="checkbox" className=" cursor-pointer" required />
                        <span className="text-xs  text-white">I'm not a robot</span>
                      </div>
              <button
                type="submit"
                className="mx-auto flex rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black"
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