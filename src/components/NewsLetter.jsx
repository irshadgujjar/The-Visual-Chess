import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Star } from "lucide-react";

export default function NewsLetter() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mx-auto mt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2
          className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
          style={{
            color: "#BEBAE0",
            background: "#160A33",
            // boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Don't be Shy say Hi !!
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          Stay informed with the latest industry trends, insights, and tips{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
            {" "}
            &#x25AA;{" "}
          </span>{" "}
        </p>
      </div>

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

        <div className="relative rounded-lg shadow-lg overflow-hidden sm:flex sm:items-center">
          <div className="p-6 sm:w-1/2">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ color: "#BEBAE0" }}
            >
              Stay Updated with Our Weekly Newsletter
            </h2>
            <p className="text-white mb-4">
              Join thousands of professionals receiving exclusive content, tips,
              and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                className="flex-grow h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 h-12 px-6 rounded-md font-semibold transition duration-300 ease-in-out"
                style={{
                  background: isHovered ? "#BEBAE0" : "#160A33",
                  color: isHovered ? "#160A33" : "#BEBAE0",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="p-8 text-center text-white">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto mb-8"
              style={{ width: "100%", maxWidth: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
