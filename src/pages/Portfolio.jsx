import react from "react";
import AboutPortfolio from "../components/AboutPortfolio";
import Feature from "../components/Feature.jsx";
import Working from "../components/Working.jsx";
import Design from "../components/Design.jsx";
import Projects from "../components/Projects.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Contact from "../components/Contact.jsx";
export default function Portfolio() {
  return (
    <>
      <AboutPortfolio />
      <Feature />
      {/* <Working/> */}
      <Projects />
      <Design />
      <NewsLetter />
      <Contact />
    </>
  );
}
