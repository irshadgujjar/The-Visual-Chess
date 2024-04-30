import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/MeetOurTeam.css"; 

export default function CardSlider() {
  const [slidesToShow, setSlidesToShow] = useState();

  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides to show based on screen width
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
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
          zIndex: "1", 
          left: "0",
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
        What our client say ?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          People who made it{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
            successful{" "}
          </span>{" "}
          &#x25AA;
        </p>
      </div>

      <Slider {...settings}>
      <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#160a33]">
            <p className="relative px-6 py-1 text-lg italic text-center text-[#bebae0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-8 h-8"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#bebae0] dark:text-gray-50">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight text-[#160a33]">
              Distinctio Animi
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#160a33]">
            <p className="relative px-6 py-1 text-lg italic text-center text-[#bebae0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-8 h-8"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#bebae0] dark:text-gray-50">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight text-[#160a33]">
              Distinctio Animi
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#160a33]">
            <p className="relative px-6 py-1 text-lg italic text-center text-[#bebae0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-8 h-8"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#bebae0] dark:text-gray-50">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight text-[#160a33]">
              Distinctio Animi
            </p>
          </div>
        </div>


      <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#160a33]">
            <p className="relative px-6 py-1 text-lg italic text-center text-[#bebae0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-8 h-8"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#bebae0] dark:text-gray-50">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight text-[#160a33]">
              Distinctio Animi
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
