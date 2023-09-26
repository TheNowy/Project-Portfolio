import React, { useEffect, useState } from "react";
import scss from "./Quick.module.scss";
import { NavLink } from "react-router-dom";

const Quick = () => {
  const [headerScroll2, setHeaderScroll2] = useState(false);

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
    <div className={scss.wrapper_adpt}>
      <div
        className={
          headerScroll2
            ? `${scss.wrapper_adpt_hlp} ${scss.active}`
            : `${scss.wrapper_adpt_hlp}`
        }>
        <div className={scss.wrapper}>
          <div className={scss.wrapper_box}>
            <NavLink
              to="https://cloud.mail.ru/public/MaXo/vZTgfh65W"
              className={`${scss.link}`}>
              Quick View
            </NavLink>
            <hr />
            <NavLink
              to="https://cloud.mail.ru/public/MaXo/vZTgfh65W"
              className={`${scss.link}`}>
              Download
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quick;
