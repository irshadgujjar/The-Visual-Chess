import React, { useState } from "react";
import Logo from "../assets/logo.png";

export default function Letter() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative z-10 overflow-hidden justify-center mr-12 ml-12 pb-8 lg:pb-12">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            Newsletter
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
          <span className="relative inline-block ">
            <svg
              viewBox="0 0 52 24"
              fill="#bebae0"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#bebae0] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-[#bebae0]">The</span>
          </span>{" "}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-[#bebae0] md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="px-4 lg:flex lg:flex-row lg:items-center mt-4">
        <div
          className="relative isolate overflow-hidden shadow-2xl sm:rounded-3xl sm:px-8 lg:flex lg:gap-x-10 lg:px-16 border border-gray-600 w-full"
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
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#bebae0] sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>

            <form className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
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
          <div className="max-w-md flex justify-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left ">
            <img className="relative w-[22rem] " src={Logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
