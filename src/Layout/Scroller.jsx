import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "../style/Index/Index.css";
const Scroller = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <motion.div className="Scroller" style={{ scaleX }} />;
};

export default Scroller;
