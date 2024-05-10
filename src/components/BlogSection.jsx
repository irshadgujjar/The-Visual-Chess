import React from "react";

export default function BlogSection() {
  return (
    // <div class="ml-12 mr-12 font-[sans-serif]">
    //   <div class="max-w-7xl mx-auto">
    //     <div class="text-center">
    //       <h2 class="text-3xl mt-9 font-extrabold text-[#bebae0] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#bebae0] after:rounded-full">
    //         LATEST BLOGS
    //       </h2>
    //     </div>
    //     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
    //       {/* First Blog  */}
    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/Imagination.webp"
    //           alt="Blog Post 1"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             10 FEB 2023 | BY JOHN DOE
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             A Guide to Igniting Your Imagination
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Second Blog  */}
    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/hacks-watch.webp"
    //           alt="Blog Post 2"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             7 JUN 2023 | BY MARK ADAIR
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             Hacks to Supercharge Your Day
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Third Blog  */}
    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/prediction.webp"
    //           alt="Blog Post 3"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             5 OCT 2023 | BY SIMON KONECKI
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             Trends and Predictions
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Fourth Blog  */}

    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/Imagination.webp"
    //           alt="Blog Post 1"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             10 FEB 2023 | BY JOHN DOE
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             A Guide to Igniting Your Imagination
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Fifth Blog  */}

    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/Imagination.webp"
    //           alt="Blog Post 1"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             10 FEB 2023 | BY JOHN DOE
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             A Guide to Igniting Your Imagination
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Sixth Blog  */}

    //       <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
    //         <img
    //           src="https://readymadeui.com/Imagination.webp"
    //           alt="Blog Post 1"
    //           class="w-full h-96 object-cover"
    //         />
    //         <div class="p-6 absolute bottom-0 left-0 right-0 bg-[#bebae0]">
    //           <span class="text-sm block text-gray-600 mb-2">
    //             10 FEB 2023 | BY JOHN DOE
    //           </span>
    //           <h3 class="text-xl font-bold text-[#333]">
    //             A Guide to Igniting Your Imagination
    //           </h3>
    //           <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
    //             <p class="text-gray-600 text-sm">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               accumsan, nunc et tempus blandit, metus mi consectetur felis
    //               turpis vitae ligula.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            Brand new
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
 

  {/* <!-- Grid --> */}
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card -->

    <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}

  {/* <!-- Card --> */}
  {/* <div class="mt-12 text-center">
    <a class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-[#bebae0] bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-[#bebae0] dark:text-blue-500 dark:hover:bg-neutral-800" href="#">
      Read more
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  </div> */}
 
 <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    {/* <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card -->

    <!-- Card --> */}
    <a class="group flex flex-col h-full border border-[#bebae0] hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-[#bebae0] dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description"></img>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>

</div>
  );
}
