import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { debounce } from "lodash";
import { ArrowUpIcon } from "../../assets/Icon/FunctionIcon";
const ScrollToTop = () => {
  const GoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();

  const [hasScrollDown, setHasScrollDown] = useState(false);
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (scrollYProgress.current > 0.1) {
        setHasScrollDown(true);
      } else {
        setHasScrollDown(false);
      }
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);
  return (
    <>
      <motion.div
        className="ScrollToTop"
        onClick={GoTop}
        initial={{ opacity: 0 }}
        animate={hasScrollDown ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.15 }}
      >
        <ArrowUpIcon />
      </motion.div>
    </>
  );
};

export default ScrollToTop;
