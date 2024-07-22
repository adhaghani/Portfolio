import { useState, useEffect } from "react";

const useNearViewport = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) {
        return;
      }

      const elementRect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (elementRect.top <= windowHeight && elementRect.bottom >= 0) {
        setIsVisible(true);
        setHasBeenVisible(true);
      } else if (!hasBeenVisible) {
        setIsVisible(false);
      }
    };

    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, hasBeenVisible]);

  return isVisible;
};

export default useNearViewport;
