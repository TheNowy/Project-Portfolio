import React, { useEffect, useState } from "react";
import scss from "./DropDown.module.scss";
import { NavLink } from "react-router-dom";
import { animate, motion, AnimatePresence } from "framer-motion";

const DropDown = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const Menu = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.1 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,      
      transition: { duration: 0.1 },
    }
  };

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px #6d2aff" : "none",
    };
  };

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
    <motion.div
      key="dropdown"
      variants={Menu}
      initial="initial"
      animate="animate"
      exit="exit"
      className={
        headerScroll
          ? `${scss.DropDownMenu} ${scss.active}`
          : `${scss.DropDownMenu}`
      }>
      <ul className={`${scss.gap_4}`}>
        <NavLink to="/" className={`${scss.link}`} style={activeLink}>
          Home
        </NavLink>
        {/* <NavLink to="/blog" className={`${scss.link}`} style={activeLink}>
          Blog
        </NavLink> */}
        <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
          Contact
        </NavLink>
        <NavLink
          to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX"
          className={`${scss.link}`}>
          Quick View
        </NavLink>
        {/* <NavLink to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX" className={`${scss.link}`}>
          Download
        </NavLink> */}
        <NavLink
          to="https://github.com/NowyTeam"
          className={`${scss.gitlink} ${scss.activeLink}`}>
          GitHub
        </NavLink>
      </ul>
    </motion.div>
  );
};

export default DropDown;
