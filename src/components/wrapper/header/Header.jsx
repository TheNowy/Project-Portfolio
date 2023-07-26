import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../wrapper/header/DropDownMenu/DropDown";
import QuickDrop from "../../wrapper/header/QuickMenu/Quick";
import scss from "./Header.module.scss";

export const Header = () => {
  const [headerScroll3, setHeaderScroll3] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [openProfile, closeProfile] = useState(false);
  const [openProfile2, closeProfile2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px blue" : "none",
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
    -window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 0 && window.scrollY < 10) {
          setHeaderScroll3(true);
        } else if (window.scrollY >= 10) {
          setHeaderScroll3(false);
        }
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={scss.nav}>
      {/* <header className={scss.beta}>
        <h1>Beta-Test</h1>
      </header> */}
      <header
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }>
        <NavLink to="/" className={scss.logo}>
          Zhusup<span>.</span>
        </NavLink>
        <div className={scss.header_wrap}>
          <NavLink
            to="/"
            className={
              headerScroll3
                ? `${scss.link} ${scss.activeLinks}`
                : `${scss.link}`
            }
            style={activeLink}>
            Home
          </NavLink>
          {/* <NavLink
            to="/blog"
            className={
              headerScroll3
                ? `${scss.link} ${scss.activeLinks}`
                : `${scss.link}`
            }
            style={activeLink}>
            Blog
          </NavLink> */}
          <NavLink
            to="/contacts"
            className={
              headerScroll3
                ? `${scss.link} ${scss.activeLinks}`
                : `${scss.link}`
            }
            style={activeLink}>
            Contact
          </NavLink>
          <NavLink
            to="https://github.com/NowyTeam"
            className={
              headerScroll ? `${scss.gitlink} ${scss.active}` : `${scss.gitlink}`
            }>
            GitHub
          </NavLink>
          <NavLink
            className={
              headerScroll ? `${scss.resume} ${scss.active}` : `${scss.resume}`
            }
            onClick={() => closeProfile2((prev) => !prev)}>
            Resume
          </NavLink>
          <div
            className={`${scss.burger_menu} ${isOpen ? scss.open : ""}`}
            onClick={() => {
              closeProfile((prev) => !prev);
              toggleMenu();
            }}>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {openProfile && <DropDownMenu />}
      {openProfile2 && <QuickDrop />}
    </nav>
  );
};
