import React from "react";
import "../styles/History.css";
import Logo from "../assets/logo.png";
import { Star } from "lucide-react";
export default function History() {
  return (
    <section className="relative z-10 mt-20 overflow-hidden justify-center mr-12 ml-12 pb-12 lg:pb-[90px] ">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            NewsLetter
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
                  <newsletter-circle cx="1" cy="1" r=".7" />
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

      {/* <!-- Subscribe --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto border-md">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="max-w-md">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Subscribe</h2>
      <p class="mt-3 text-gray-600 dark:text-neutral-400">
        Subscribe and start making the most of every engagement.
      </p>
    </div>

    <form>
      <div class="w-full sm:max-w-lg md:ms-auto">
        <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div class="w-full">
            <label for="hero-input" class="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email"></input>
          </div>
          <a class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Subscribe
          </a>
        </div>
        <p class="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>
{/* <!-- End Subscribe --> */}
    </section>
  );
}
