import React from "react";
import "../styles/LatestWork.css";
export default function LatestWork() {
  return (
    <section class="container border-b border-gray-500 mt-4 mb-8" id="blogs">
    <div class="blogs-content ml-5 mr-7">
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
         OUR LATEST WORK
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We will Help you Build{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>Business </span>{" "}
          &#x25AA;
        </p>
        <p className="mt-4 text-base text-white leading-relaxed text-gray-600">
          In today's competitive landscape, your business needs more than just a website or a logo. 
        </p>
      </div>
       
        <div class="blogs">
            <div class="blog"style={{background:"#160a33"}}>
                <img src="https://propelrr.com/wp-content/uploads/2023/02/answering-what-is-ux-ui-design-and-a-blueprint-for-projects.webp" alt=""></img>
                <div class="blog-text">
                    <h4 className="text" style={{color:"#BEBAE0"}}>
                        How to Create Your Own Website
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
               <div class="blog"style={{background:"#160a33"}}>
            <img src="https://propelrr.com/wp-content/uploads/2023/02/answering-what-is-ux-ui-design-and-a-blueprint-for-projects.webp" alt=""></img>
               <div class="blog-text">
                     <h4 className="text" style={{color:"#BEBAE0"}}>
                        How to Become an Expert in Web Design
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
               <div class="blog"style={{background:"#160a33"}}>
            <img src="https://propelrr.com/wp-content/uploads/2023/02/answering-what-is-ux-ui-design-and-a-blueprint-for-projects.webp" alt=""></img>
               <div class="blog-text">
                     <h4 className="text" style={{color:"#BEBAE0"}}>
                        Become a Web Designer in 10 Days
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
