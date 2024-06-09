import React, { useEffect, useRef } from "react";

const SmoothScroll = () => {
  const lastDeltaY = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const scrollY = window.scrollY;
      const targetY = scrollY + event.deltaY;
      smoothScrollTo(targetY);
      lastDeltaY.current = event.deltaY;
    };

    const smoothScrollTo = (targetY) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const overshoot = lastDeltaY.current * 0.3;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 800; // уменьшим длительность анимации для более быстрого скролла
        const run = easeOut(
          timeElapsed,
          startY,
          distance + overshoot,
          duration
        );
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      const easeOut = (t, b, c, d) => {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
      };

      requestAnimationFrame(animation);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
