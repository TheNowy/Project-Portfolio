import React from "react";
import scss from "./Quick.module.scss";
import { NavLink } from "react-router-dom";

const Quick = () => {

  return (
    <div className={`${scss.flex} ${scss.flex_col} ${scss.DropDownMenu}`}>
      <ul className={`${scss.flex} ${scss.flex_col} ${scss.gap_4}`}>
        <NavLink to="/" className={`${scss.link}`}>
          Quick View
        </NavLink>
        <NavLink to="/contacts" className={`${scss.link}`}>
          Download
        </NavLink>
      </ul>
    </div>
  );
};

export default Quick;
