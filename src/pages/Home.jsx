import React from "react";
import HeroSection from "../components/Herosection";
import WhatWeDo from "../components/WhatWeDo";
import History from "../components/History.jsx";
import Reviews from "../components/Reviews.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import LatestWork from "../components/LatestWork.jsx";
import MeetOurTeam from "../components/MeetOurTeam.jsx";
import Timeline from "../components/Timeline.jsx";
import Testimonials from'./Testimonials.jsx';
import Faqs from "../components/Faqs.jsx";
import Contact from "../components/Contact.jsx";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <History />
      <Reviews />
      <LatestWork />
      <Timeline/>
      <MeetOurTeam />
      <NewsLetter />
      <Testimonials/>
      <Faqs />
      {/* <Contact /> */}
    </>
  );
}
