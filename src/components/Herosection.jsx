import React from "react";
import Logo from "../assets/Visual.png";
import "../styles/HeroSection.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="mx-auto mt-8 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="relative isolate overflow-hidden shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 border border-gray-600 w-full"
        style={{ background: "#0a0417" }}
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <h2
              className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
              style={{
                color: "#BEBAE0",
                background: "#160A33",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                whiteSpace: "nowrap",
              }}
            >
              WELCOME TO
            </h2>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-6 sm:text-4xl">
            The Visual Chess
            <br />
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div className="flex items-center justify-center mt-6 lg:justify-start">
            <div className="flex gap-x-4">
              <a href="#" className="icon-box" title="LinkedIn">
                <FaLinkedin className="icon" style={{ color: "#BEBAE0" }} />
              </a>
              <a href="#" className="icon-box" title="Facebook">
                <FaFacebook className="icon" style={{ color: "#BEBAE0" }} />
              </a>
              <a href="#" className="icon-box" title="Instagram">
                <FaInstagram className="icon" style={{ color: "#BEBAE0" }} />
              </a>
              <a href="#" className="icon-box" title="WhatsApp">
                <FaWhatsapp className="icon" style={{ color: "#BEBAE0" }} />
              </a>
              <a href="#" className="icon-box" title="Contact">
                <FaPhone className="icon" style={{ color: "#BEBAE0" }} />
              </a>
              <a
                className="icon"
                title="ContactNo"
                style={{ color: "#BEBAE0" }}
              >
                +1231234234
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-2 h-80 lg:mt-4 animate-bounce-slow">
          <img
            src={Logo}
            alt="Visual Logo"
            className="hero-image" // Added className for styling
            style={{ maxWidth: "100%", height: "auto" }} // Ensure image responsiveness
          />
        </div>
      </div>
    </div>
  );
}
