import React from "react";

export default function Team() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2
        className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
        style={{
          color: "#BEBAE0",
          background: "#160A33",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        MEET OUR TEAM
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
        We will Help you Build{" "}
        <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>Business </span>{" "}
        &#x25AA;
      </p>
      <p className="mt-4 text-base text-white leading-relaxed text-gray-600">
        In today's competitive landscape, your business needs more than just a
        website or a logo. It needs a comprehensive digital strategy that
        encompasses everything from captivating content to seamless user
        experiences. At our agency, we specialize in a range of services
        designed to elevate your brand and drive results.
      </p>

      <div className="max-w-lg p-4 mt-20 shadow-md dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
