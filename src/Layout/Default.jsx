import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import { motion, useScroll } from "framer-motion";

const Default = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navigation />
      <motion.div
        className="Scroller"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="Container P-Top">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Default;
