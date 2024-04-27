import React from "react";
import "../styles/Timeline.css";
import { FaBriefcase } from "react-icons/fa";
export default function Team() {
  return (
    <section
      className="container about overflow-hidden display flex-center"
      id="about"
    >
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
          OUR HISTORY
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold mb-10 text-white leading-relaxed text-gray-600">
          People who made it{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
            successful{" "}
          </span>{" "}
          &#x25AA;
        </p>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div className="tl-icon " style={{ color: "#160a33" }}>
            <FaBriefcase />
          </div>
          <p class="tl-duration">2010 - present</p>
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
    </section>
  );
}
