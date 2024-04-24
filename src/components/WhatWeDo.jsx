import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  DollarSign,
  Zap,
  Moon,
  Filter,
  Edit,
  Globe,
  Camera,
  CheckCircle,
} from "react-feather";

const services = [
  {
    icon: DollarSign,
    title: "COPYWRITING",
    description:
      "Craft compelling content tailored to your brand's voice and audience, enhancing your online presence and driving engagement.",
  },
  {
    icon: Zap,
    title: "WEB DESIGN",
    description:
      "Create visually stunning and user-friendly websites that captivate visitors and convert leads into loyal customers.",
  },
  {
    icon: Moon,
    title: "UI/UX DESIGN",
    description:
      "Design intuitive and seamless user interfaces to optimize user experience and satisfaction, resulting in increased conversions.",
  },
  {
    icon: Filter,
    title: "CLOUD SYSTEM",
    description:
      "Implement scalable and secure cloud infrastructure solutions to streamline processes and ensure seamless data accessibility.",
  },
  {
    icon: Edit,
    title: "CREATIVE DESIGN",
    description:
      "Deliver innovative and eye-catching design solutions that elevate your brand identity and leave a lasting impression.",
  },
  {
    icon: Globe,
    title: "BRAND IDENTITY",
    description:
      "Develop cohesive brand strategies and visuals that resonate with your target market, fostering brand loyalty and recognition.",
  },
  {
    icon: Camera,
    title: "PHOTOGRAPHY",
    description:
      "Capture captivating moments that tell your brand's story, evoking emotion and creating a memorable experience for your audience.",
  },
  {
    icon: CheckCircle,
    title: "SOCIAL MEDIA",
    description:
      "Implement tailored social media strategies to effectively connect with your audience, build meaningful relationships, and drive brand awareness.",
  },
];

export default function WhatWeDo() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom options
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-b border-gray-500 mt-4 mb-4">
      <div className="mx-auto max-w-xl text-center">
        <h2
          className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
          style={{
            color: "#BEBAE0",
            background: "#160A33",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          WHAT WE DO
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We will Help you Build{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>Business </span>{" "}
          &#x25AA;
        </p>
        <p className="mt-4 text-base text-white leading-relaxed text-gray-600">
          In today's competitive landscape, your business needs more than just a
          website or a logo. It needs a comprehensive
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 mt-4 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-lg shadow-lg hover:shadow-xl"
            style={{
              background: "#160a33",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.5)",
            }}
            data-aos="fade-down-right" // Apply fade-up animation to each card
            data-aos-delay={100 * index} // Add delay to stagger animations
          >
            <div
              className="mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-6 overflow-hidden transition duration-300 transform hover:scale-110"
              style={{ background: "#BEBAE0" }}
            >
              <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full">
                <service.icon
                  className="h-8 w-8 text-gray-700 hover:text-gray-400"
                  style={{ color: "#160a33" }}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold" style={{ color: "#BEBAE0" }}>
              {service.title}
            </h3>
            <p className="mt-4 text-sm text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
