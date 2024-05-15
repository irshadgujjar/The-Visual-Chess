import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();

  // Determine if Navbar and Footer should be rendered based on the current route
  const shouldRenderNavbarAndFooter = location.pathname !== "/";

  return (
    <>
      {shouldRenderNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {shouldRenderNavbarAndFooter && <Footer />}
    </>
  );
}
