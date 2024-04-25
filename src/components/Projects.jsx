import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ml-10 mr-10 overflow-hidden">
        <div className="container mx-auto">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className="mt-1 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl rounded-lg p-4"
            style={{
              color: "#BEBAE0",
              background: "#160A33",
            //   boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
           Explore Our Projects
                     </h2>

          {/* Subtitle */}
          {/* <p className="mt-4 text-3xl font-bold text-white leading-relaxed text-gray-600">
            We will Help you Build{" "}
            <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
              Business{" "}
            </span>{" "}
            &#x25AA;
          </p> */}
        </div>

          <div className="w-full flex flex-wrap justify-center -mx-4 mt-12">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12  space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-[#160a33] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-[#160a33] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-[#160a33] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-[#160a33] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-[#160a33] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-[#bebae0] dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-[#160a33] mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-[#160a33] dark:text-[#160a33] mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              className="text-[#160a33] dark:text-dark-6 hover:border-[white] hover:bg-[#160a33] inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
