import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";

export const Footer = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <div>
      <footer>
        <div
          className={`${scss.footer_cont} ${headerScroll ? scss.active : ""}`}>
          <h1>© 2024 Nowy</h1>
        </div>
      </footer>
    </div>
  );
};
