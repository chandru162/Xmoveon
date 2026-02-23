import { useState } from 'react';

const DemoPopup = ({ showDemo, setShowDemo }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {showDemo && (
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
                <h2 className="mb-4 text-xl font-semibold text-lime-400">Try Our Demo</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    pattern="^[A-Za-z ]+$"
                    className="w-full rounded-md border border-lime-400/40 bg-transparent px-4 py-2 text-sm text-white outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    pattern="^[0-9]{10}$"
                    maxLength="10"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none"
                  />

                  <textarea
                    placeholder="Message"
                    required
                    minLength={10}
                    rows="3"
                    className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-white outline-none resize-none"
                  />

                  <div className="flex items-center gap-2 bg-white px-3 py-2">
                    <input type="checkbox" required />
                    <span className="text-xs text-black">I'm not a robot</span>
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
                <h3 className="text-lime-400 font-semibold">Submitted Successfully</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DemoPopup;
