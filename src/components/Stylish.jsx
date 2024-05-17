import React from "react";
import "../styles/Stylish.css";
import Software from "../assets/Software.gif";
import UI from "../assets/UI.gif";
import Mobile from "../assets/Mobile.gif";
import STAFF from "../assets/STAFF .gif";

export default function Stylish() {
  return (
    <>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            Services
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
      <section className="services mt-10 flex justify-center flex-wrap">
        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4 ">
          <div className="profile-pic">
            <img src={UI}></img>
          </div>

          <div className="bottom">
            <div className="content">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="profile-pic">
            <img src={Software}></img>
          </div>
          <div className="bottom">
            <div className="content ">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls{" "}
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="profile-pic">
            <img src={STAFF}></img>
          </div>

          <div className="bottom">
            <div className="content ">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls{" "}
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}
        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="profile-pic">
            <img src={Mobile}></img>
          </div>

          <div className="bottom">
            <div className="content ">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls{" "}
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="profile-pic">
            <img src={UI}></img>
          </div>

          <div className="bottom">
            <div className="content ">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls{" "}
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="services-card mr-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="profile-pic">
            <img src={UI}></img>
          </div>

          <div className="bottom">
            <div className="content ">
              <span className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicinFcls
                consectetur adipisicinFcls{" "}
              </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Web Development</button>
            </div>
          </div>
        </div>
        {/* End of service block */}
      </section>
    </>
  );
}
