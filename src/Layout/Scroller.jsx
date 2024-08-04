import React from "react";
import { motion, useScroll } from "framer-motion";

import "../style/Index/Index.css";
const Scroller = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="Scroller" style={{ scaleX: scrollYProgress }} />
  );
};

export default Scroller;
