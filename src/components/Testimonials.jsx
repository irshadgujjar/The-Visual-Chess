import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" relative z-10 overflow-hidden justify-center mr-12 ml-12 pb-12 lg:pb-[90px] ">
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-xs font-semibold tracking-wider text-[#160a33] uppercase rounded-full bg-teal-accent-400">
            Testimonials
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
      <div className="container mx-auto px-4 md:px-8">
        <Slider {...settings} className="slick-slider">
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-16 h-16 text-violet-600"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="testimonial-text">
                "Veniam quidem animi ea maxime odit fugiat architecto
                perferendis ipsum perspiciatis iusto, provident qui nam dolorum
                corporis."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <p className="author-name">Leroy Jenkins</p>
                  <p className="author-role">Founder, Company</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#bebae0"
                className="w-16 h-16 text-violet-600"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="testimonial-text">
                "Veniam quidem animi ea maxime odit fugiat architecto
                perferendis ipsum perspiciatis iusto, provident qui nam dolorum
                corporis."
              </p>
              <div className="testimonial-author">
                {/* <img src="https://source.unsplash.com/80x80/?portrait?2" alt="" className="author-avatar" />
                 */}
                <div className="author-info">
                  <p className="author-name">Alice Johnson</p>
                  <p className="author-role">CEO, Company</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

// Custom previous arrow component
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="prev-arrow">
      <FaArrowLeft className="w-6 h-6 text-gray-500" />
    </button>
  );
}

// Custom next arrow component
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="next-arrow">
      <FaArrowRight className="w-6 h-6 text-gray-500" />
    </button>
  );
}
