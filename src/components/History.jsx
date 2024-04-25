import React, { useState } from "react";
import "../styles/History.css"; 

const History = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="process-wrapper overflow-hidden">
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
         HOW WE WORK
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
        Drive Website Traffic{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
            successful{" "}
          </span>{" "}
          &#x25AA;
        </p>
      </div>
      <br />
      <div id="progress-bar-container">
        <ul>
          <li
            className={`step step01 ${activeStep === 1 ? "active" : ""}`}
            onClick={() => handleStepClick(1)}
          >
            <div className="step-inner">Coustamizable</div>
          </li>
          <li
            className={`step step02 ${activeStep === 2 ? "active" : ""}`}
            onClick={() => handleStepClick(2)}
          >
            <div className="step-inner">Enthusiastic</div>
          </li>
          <li
            className={`step step03 ${activeStep === 3 ? "active" : ""}`}
            onClick={() => handleStepClick(3)}
          >
            <div className="step-inner">Creative</div>
          </li>
          <li
            className={`step step04 ${activeStep === 4 ? "active" : ""}`}
            onClick={() => handleStepClick(4)}
          >
            <div className="step-inner">Affeactive</div>
          </li>
          <li
            className={`step step05 ${activeStep === 5 ? "active" : ""}`}
            onClick={() => handleStepClick(5)}
          >
            <div className="step-inner">Responive</div>
          </li>
        </ul>

        <div id="line">
          <div
            id="line-progress"
            style={{ width: `${(activeStep - 1) * 25}%` }}
          ></div>
        </div>
      </div>

      <div id="progress-content-section">
        <div
          className={`section-content discovery ${
            activeStep === 1 ? "active" : ""
          }`}
        >
          
          <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We are here to help You for Your Business Solutions{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
          Solutions{" "}
          </span>{" "}
          &#x25AA;
        </p>
        </div>

        <div
          className={`section-content strategy ${
            activeStep === 2 ? "active" : ""
          }`}
        >
         
          <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We are here to help You for Your Business Solutions{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
          Solutions{" "}
          </span>{" "}
          &#x25AA;
        </p>
        </div>

        <div
          className={`section-content creative ${
            activeStep === 3 ? "active" : ""
          }`}
        >
      
          <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We are here to help You for Your Business Solutions{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
          Solutions{" "}
          </span>{" "}
          &#x25AA;
        </p>
        </div>

        <div
          className={`section-content production ${
            activeStep === 4 ? "active" : ""
          }`}
        >

          <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We are here to help You for Your Business Solutions{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
          Solutions{" "}
          </span>{" "}
          &#x25AA;
        </p>
        </div>

        <div
          className={`section-content analysis ${
            activeStep === 5 ? "active" : ""
          }`}
        >
         
          <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
          We are here to help You for Your Business Solutions{" "}
          <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
          Solutions{" "}
          </span>{" "}
          &#x25AA;
        </p>
        </div>
      </div>
    </div>
  );
};

export default History;
