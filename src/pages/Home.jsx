import React from "react";
import HeroSection from "../components/Herosection";
import WhatWeDo from "../components/WhatWeDo";
import History from "../components/History.jsx";
import Reviews from "../components/Reviews.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import LatestWork from "../components/LatestWork.jsx";
import MeetOurTeam from "../components/MeetOurTeam.jsx";
import Team from "../components/Team.jsx";
import Timeline from "../components/Timeline.jsx";
import Testimonials from'./Testimonials.jsx';
import Faqs from "../components/Faqs.jsx";
import Marquee from "../components/Marquee.jsx";
import Contact from "../components/Contact.jsx";
import Blogs from "../components/Blogs.jsx";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      {/* <History /> */}
      <Reviews />
      {/* <Blogs /> */}
      {/* <LatestWork /> */}
      <Timeline/>
      <MeetOurTeam />
      {/* <Team /> */}
      <NewsLetter />
      {/* <Marquee /> */}
      <Testimonials/>
      <Faqs />
      <Contact />
    </>
  );
}
