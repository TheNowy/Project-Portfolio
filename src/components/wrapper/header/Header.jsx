import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../wrapper/header/DropDownMenu/DropDown";
import QuickDrop from "../../wrapper/header/QuickMenu/Quick";
import scss from "./Header.module.scss";

export const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [openProfile, closeProfile] = useState(false);
  const [openProfile2, closeProfile2] = useState(false);

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

  return (
    <nav className={scss.nav}>
      <header
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }>
        <NavLink to="/" className={scss.logo}>
          Jhusup<span>.</span>
        </NavLink>
        <div className={scss.header_wrap}>
          <NavLink to="/" className={`${scss.link}`} style={activeLink}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
            Contact
          </NavLink>
          <NavLink className={`${scss.resume}`} onClick={() => closeProfile2((prev) => !prev)}>
            Resume
          </NavLink>
          <NavLink
            to="https://github.com/NowyTeam"
            className={`${scss.gitlink} ${scss.activeLink}`}>
            GitHub
          </NavLink>
          <div
            className={scss.burger_menu}
            onClick={() => closeProfile((prev) => !prev)}>
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
