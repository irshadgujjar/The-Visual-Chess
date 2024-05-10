import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/MeetOurTeam.css"; // Your custom styles

export default function CardSlider() {
  const [slidesToShow, setSlidesToShow] = useState();

  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides to show based on screen width
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 480) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize to set initial number of slides to show
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#bebae0",
          borderRadius: "50%",
          padding: "10px",
          zIndex: "1", // Ensure arrow is above the slider
          left: "0", // Align arrow to the left
          transform: "translate(-5%, -50%)", // Center arrow vertically and horizontally
        }}
        onClick={onClick}
      />
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#bebae0",
          borderRadius: "50%",
          padding: "10px",
          zIndex: "1",
          right: "0",
          transform: "translate(-5%, -50%)", // Center arrow vertically and horizontally
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="slider-container overflow-hidden">
      {/* <div className="mx-auto max-w-xl text-center">
        <h2
          className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
          style={{
            color: "#BEBAE0",
            background: "#160A33",
            
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          MEET OUR TEAM
        </h2>

       
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          People who made it{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
            successful{" "}
          </span>{" "}
          &#x25AA;
        </p>
      </div> */}

<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            Our Team
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

      <Slider {...settings}>
        <div className="slider-item">
          <div className="cardContainer">
            <div className="card">
              <p className="city">PINK CITY</p>

              <svg
                className="weather"
                viewBox="0 0 100 100"
                width="100%" // Make the image fill its container
                height="100%" // Make the image fill its container
              >
                <image
                  id="image0"
                  width="100"
                  height="100"
                  x="0"
                  y="0"
                  href="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                ></image>
              </svg>
              <p className="temp">32°</p>
              <div className="minmaxContainer">
                <div className="min">
                  <p className="minHeading">Min</p>
                  <p className="minTemp">30°</p>
                </div>
                <div className="max">
                  <p className="maxHeading">Max</p>
                  <p className="maxTemp">32°</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="cardContainer">
            <div className="card">
              <p className="city">PINK CITY</p>

              <svg
                className="weather"
                viewBox="0 0 100 100"
                width="100%" // Make the image fill its container
                height="100%" // Make the image fill its container
              >
                <image
                  id="image0"
                  width="100"
                  height="100"
                  x="0"
                  y="0"
                  href="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                ></image>
              </svg>
              <p className="temp">32°</p>
              <div className="minmaxContainer">
                <div className="min">
                  <p className="minHeading">Min</p>
                  <p className="minTemp">30°</p>
                </div>
                <div className="max">
                  <p className="maxHeading">Max</p>
                  <p className="maxTemp">32°</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="cardContainer">
            <div className="card">
              <p className="city">PINK CITY</p>

              <svg
                className="weather"
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
              >
                <image
                  id="image0"
                  width="100"
                  height="100"
                  x="0"
                  y="0"
                  href="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                ></image>
              </svg>
              <p className="temp">32°</p>
              <div className="minmaxContainer">
                <div className="min">
                  <p className="minHeading">Min</p>
                  <p className="minTemp">30°</p>
                </div>
                <div className="max">
                  <p className="maxHeading">Max</p>
                  <p className="maxTemp">32°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="cardContainer">
            <div className="card">
              <p className="city">PINK CITY</p>

              <svg
                className="weather"
                viewBox="0 0 100 100"
                width="100%" // Make the image fill its container
                height="100%" // Make the image fill its container
              >
                <image
                  id="image0"
                  width="100"
                  height="100"
                  x="0"
                  y="0"
                  href="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                ></image>
              </svg>
              <p className="temp">32°</p>
              <div className="minmaxContainer">
                <div className="min">
                  <p className="minHeading">Min</p>
                  <p className="minTemp">30°</p>
                </div>
                <div className="max">
                  <p className="maxHeading">Max</p>
                  <p className="maxTemp">32°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
