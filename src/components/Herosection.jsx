import React, { useState } from "react";
import Logo from "../assets/Visual.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import "../styles/HeroSection.css";

export default function Head() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section>
      <div className="px-8 lg:flex lg:flex-row lg:items-center mt-4">
        <div className="relative isolate overflow-hidden shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 border border-gray-600 w-full" style={{ background: "#0a0417" }}>
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="relative rounded-lg shadow-lg overflow-hidden sm:flex sm:items-center">
            <div className="p-12 sm:w-1/2">
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-2" style={{ color: "#BEBAE0", background: "#160A33", border: "1px solid rgba(255, 255, 255, 0.1)", whiteSpace: "nowrap" }}>WELCOME TO</h2>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-6 sm:text-4xl">The Visual Chess</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
              <div className="flex items-center justify-center mt-6 ml-2 lg:justify-start">
                <div className="flex gap-x-4">
                  <a href="#" className="icon-box bg-[#160a33]" title="LinkedIn">
                    <FaLinkedin className="icon" style={{ color: "#bebae0" }} />
                  </a>
                  <a href="#" className="icon-box bg-[#160a33]" title="Facebook">
                    <FaFacebook className="icon" style={{ color: "#bebae0" }} />
                  </a>
                  <a href="#" className="icon-box bg-[#160a33]" title="Instagram">
                    <FaInstagram className="icon" style={{ color: "#bebae0" }} />
                  </a>
                  <a href="#" className="icon-box bg-[#160a33]" title="WhatsApp">
                    <FaWhatsapp className="icon" style={{ color: "#bebae0" }} />
                  </a>
                  <a href="#" className="icon-box bg-[#160a33]" title="Contact">
                    <FaPhone className="icon" style={{ color: "#bebae0" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ml-3 flex justify-center items-center">
              <img src={Logo} alt="Logo" className="h-auto lg:max-w-none max-w-full hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
