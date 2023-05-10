import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px rgb(182, 180, 180)" : "none",
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
    <nav>
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
          <NavLink to="/author" className={`${scss.link}`} style={activeLink}>
            About
          </NavLink>
          <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
            Contact
          </NavLink>
          <NavLink
            to="https://github.com/NowyTeam"
            className={`${scss.gitlink} ${scss.activeLink}`}>
            GitHub
          </NavLink>
        </div>
      </header>
    </nav>
  );
};
