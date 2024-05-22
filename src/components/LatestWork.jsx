import React from "react";
import { FaBriefcase } from "react-icons/fa";
export default function LatestWork() {
  return (
    <section className="flex items-center justify-center flex display-center">
      <div className=" text-white py-8 ">
        <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
              History
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
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 mr-12">
          <div class="mb-6 ms-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300 "></div>

          <div class="timeline">
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration ">2010 - present</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                Web Developer
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration">2008 - 2011</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                Software Engineer
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration">2016 - 2017</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                C++ Programmer
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration">2009 - 2013</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                Business Degree
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration">2013 - 2016</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                Computer Science Degree
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="timeline-item">
              <div className="tl-icon " style={{ color: "#160a33" }}>
                <FaBriefcase />
              </div>
              <p class="tl-duration">2017 - present</p>
              <h5 className="text" style={{ color: "#bebae0" }}>
                3d Animation
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
