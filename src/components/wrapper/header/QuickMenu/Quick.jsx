import React, { useEffect, useState } from "react";
import scss from "./Quick.module.scss";
import { NavLink } from "react-router-dom";

const Quick = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [headerScroll2, setHeaderScroll2] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 0) {
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

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll2(true);
      } else {
        setHeaderScroll2(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={
        headerScroll && headerScroll2
          ? `${scss.DropDownMenu} ${scss.active}`
          : headerScroll
          ? `${scss.DropDownMenu} ${scss.active2}`
          : `${scss.DropDownMenu}`
      }
    >
      <ul className={`${scss.gap_4}`}>
        <NavLink to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX" className={`${scss.link}`}>
          Quick View
        </NavLink>
        <NavLink to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX" className={`${scss.link}`}>
          Download
        </NavLink>
      </ul>
    </div>
  );
};

export default Quick;

