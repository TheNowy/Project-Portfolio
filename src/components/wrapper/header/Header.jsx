import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header = () => {
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
    <nav>
      <header
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }>
        <NavLink to="/" className={scss.logo}>
          Logo
        </NavLink>
        <div className={scss.header_wrap}>
          <NavLink to="/" className={`${scss.link} ${scss.activeLink}`}>
            Home
          </NavLink>
          <NavLink to="/author" className={`${scss.link} ${scss.activeLink}`}>
            About
          </NavLink>
          <NavLink to="/contacts" className={`${scss.link} ${scss.activeLink}`}>
            Contact
          </NavLink>
          <NavLink
            to="https://github.com/NowyTeam"
            className={`${scss.link} ${scss.activeLink}`}>
            GitHub
          </NavLink>
        </div>
      </header>
    </nav>
  );
};
