import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Welcome from "./pages/Welcome.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
