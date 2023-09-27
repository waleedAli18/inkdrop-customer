"use client";

import React, { useState, useEffect } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const updateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / windowHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressBarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${scrollProgress}%`,
    height: "6px",
    backgroundColor: "#892fc0",
    zIndex: 1 * 999999999999,
    borderTopRightRadius: scrollProgress === 100 ? 0 : 25,
    borderBottomRightRadius: scrollProgress === 100 ? 0 : 25,
  };

  return <div className="progressBar" style={progressBarStyle}></div>;
};

export default ScrollProgressBar;
