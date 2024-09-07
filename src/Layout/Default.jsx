import React from "react";

import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
const Default = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navigation />
      <motion.div
        className="Scroller"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="P-Top">
        <Outlet />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Default;
