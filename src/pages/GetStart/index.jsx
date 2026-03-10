import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Images
const Card1 = "/assets/Card3.png";
const Card2 = "/assets/Card2.png";
const Card3 = "/assets/Card3.png";

// Icons
import { QatarFlag, USAFlag, IndiaFlag } from "../../svg/svgIcons";

const ContactSection = () => {

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [captchaValue,setCaptchaValue] = useState(null)

  const handleCaptcha = (value)=>{
    setCaptchaValue(value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!captchaValue){
      alert("Please verify captcha")
      return
    }

    try{

      const res = await fetch("http://localhost:5001/api/mail/send-demo-mail",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          phone,
          message,
          captcha:captchaValue
        })
      })

      const data = await res.json()

      if(res.ok){
        alert("Message sent successfully")

        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
        setCaptchaValue(null)
      }
      else{
        alert(data.message)
      }

    }catch(err){
      console.log(err)
      alert("Something went wrong")
    }
  }

  const locations = [
    {
      country: "Middle East",
      flag: <QatarFlag className="w-7 h-7" />,
      address: "No 45, Al diwaniya street, Old airport, Doha, Qatar",
      phone: "+97455971077",
      bgImage: Card1,
      textClass: "text-black",
    },
    {
      country: "USA",
      flag: <USAFlag className="w-7 h-7" />,
      address: "17193 Castello Circle, San Diego CA 92127, USA",
      phone: "",
      bgImage: Card2,
      textClass: "text-white",
    },
    {
      country: "India",
      flag: <IndiaFlag className="w-7 h-7" />,
      address: "54 LMS Street, Papanaickenpalayam, Coimbatore - 641037",
      phone: "",
      bgImage: Card3,
      textClass: "text-black",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 md:py-20 px-4 sm:px-10 lg:px-20 xl:px-40 font-sans overflow-x-hidden">

      {/* HEADER */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-[38px] md:text-[50px] font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          If you have any questions, please feel free to ask us.
        </p>
      </div>

      {/* CONTACT FORM */}
     <div className="relative overflow-hidden bg-[#111111] rounded-[40px] p-6 md:p-16 text-white mb-20 shadow-2xl">

          <div className="relative z-10">

            <h2 className="text-xl font-bold mb-4 md:text-2xl">
              We're Here to Help
            </h2>

            <p className="mb-10 max-w-xl text-gray-400">
              Whether you have questions, need support, or want to share feedback.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] w-full"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] w-full"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] w-full"
                  required
                />

                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-full px-7 py-4 outline-none focus:border-[#9CEE69] w-full"
                  required
                />

              </div>

              {/* CAPTCHA*/}
              <div className="flex justify-start pt-2">
                <div className="scale-[0.85] origin-left">
                  <ReCAPTCHA
                    sitekey="6LdnhIEsAAAAAIcO8fNeedq6ICqHZPU9ksvOHZjw"
                    onChange={handleCaptcha}
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#9CEE69] text-black font-bold py-4 px-12 rounded-full hover:scale-105 transition"
                >
                  Submit Now
                </button>
              </div>

            </form>

          </div>

    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#9CEE69]/10 blur-[120px] rounded-full" />

  </div>

      {/* GLOBAL PRESENCE */}
      <div className="bg-[#f8fff4] p-12 rounded-[60px] border border-[#e8f5e1]">

        <h2 className="text-[32px] font-bold text-center mb-12 text-gray-900">
          Our Global Presence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {locations.map((loc,index)=>(
            <div
              key={index}
              style={{
                backgroundImage:`url(${loc.bgImage})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
              }}
              className={`p-10 rounded-[10px] h-[190px] relative flex flex-col justify-end ${loc.textClass}`}
            >

              <div className="absolute inset-0 bg-black/10"/>

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1 bg-white rounded-lg">
                    {loc.flag}
                  </div>
                  <h3 className="font-bold">{loc.country}</h3>
                </div>

                <p className="text-[14px] font-semibold">
                  {loc.address}
                </p>

                {loc.phone && (
                  <p className="font-bold text-[13px] mt-1">
                    {loc.phone}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ContactSection;