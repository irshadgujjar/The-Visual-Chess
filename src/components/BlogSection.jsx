import React from "react";
import "../styles/BlogSection.css";
import Software from "../assets/Software.gif";
import UI from "../assets/UI.gif";
import Mobile from "../assets/Mobile.gif";

export default function BlogSection() {
  return (    
    <div className="relative z-10 overflow-hidden justify-center px-4 pb-12 dark:bg-dark lg:pb-[90px]">
   
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
           Latest Blogs
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto">
          <span className="relative inline-block ">
            <svg
              viewBox="0 0 52 24"
              fill="#bebae0"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <Card
          imgSrc={Software}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />
        <Card
          imgSrc={UI}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />
        <Card
          imgSrc={Mobile}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />

        <Card
          imgSrc={Software}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />
        <Card
          imgSrc={Mobile}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />
        <Card
          imgSrc={Software}
          title="Announcing a free plan for small teams"
          description="At Wake, our mission has always been focused on bringing openness."
        />
      </div>
    </div>
   </div>
  );
}

function Card({ imgSrc, title, description, authorImg, authorName }) {
  return (
    <div className="blog-cardContainer">
      <div className="blog-card">
        <img src={imgSrc} alt={title} className="rounded-t-xl" />
        <a
          className="group flex flex-col h-full 0 rounded-xl p-5 border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40"
          href="#"
        >
          <div className="my-6">
            <h3 className="text-xl font-semibold text-[#bebae0] ">{title}</h3>
            <p className="mt-5 text-white">{description}</p>
          </div>
        </a>
      </div>
    </div>
   
  );
}
