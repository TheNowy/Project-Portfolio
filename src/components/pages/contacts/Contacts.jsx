import React, { useState, useEffect } from "react";
import scss from "./Conctacts.module.scss";

const Contacts = () => {
  const handleSubmit = () => {};
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
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={`${scss.home_content} ${headerScroll ? scss.active : ""}`}>
          <div className={`${scss.gif_image} ${headerScroll ? scss.active : ""}`}>
          <h1 className={`${scss.h1} ${headerScroll ? scss.active : ""}`}>
                Contact Me
              </h1>
            </div>
            <form className={`${scss.form} ${headerScroll ? scss.active : ""}`} onSubmit={handleSubmit}>
              <label className = {`${scss.label} ${headerScroll ? scss.active : ""}`} htmlFor="name">
                Name
                <input id="name" className={scss.input} type="text" required />
              </label>
              <label className = {`${scss.label} ${headerScroll ? scss.active : ""}`} htmlFor="email">
                Email
                <input
                  id="email"
                  className={scss.input}
                  type="email"
                  required
                />
              </label>
              <label className = {`${scss.label} ${headerScroll ? scss.active : ""}`} htmlFor="comment">
                Message
                <textarea
                  id="comment"
                  className={scss.message}
                  required></textarea>
              </label>

              <button type="submit" className={scss.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;