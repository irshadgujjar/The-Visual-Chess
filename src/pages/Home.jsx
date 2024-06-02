import React from "react";
import HeroSection from "../components/Herosection";
import WhatWeDo from "../components/WhatWeDo";
import History from "../components/History.jsx";
import Reviews from "../components/Reviews.jsx";
import Steps from "../components/Steps.jsx";
import LatestWork from "../components/LatestWork.jsx";
import MeetOurTeam from "../components/MeetOurTeam.jsx";
import Timeline from "../components/Timeline.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Faqs from "../components/Faqs.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Contact from "../components/Contact.jsx";
import Mobile from "../components/Mobile.jsx";
import Stylish from "../components/Stylish.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <WhatWeDo /> */}
      {/* <History /> */}
      <Reviews />
      <Stylish />
      <Steps />
      <LatestWork />
      <Mobile />
      <MeetOurTeam />
      {/* <Timeline/>    */}
      <Testimonials />
      <Faqs />
      <NewsLetter />
      <Contact />
    </>
  );
}
