import React from "react";
import scss from "./Conctacts.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <form className={scss.form}>
              <input
                className={scss.input}
                type="text"
                placeholder="Your fucking name"
                required
              />

              <input
                className={scss.input}
                type="text"
                placeholder="Payment sum $"
                required
              />

              <textarea
                className={scss.message}
                placeholder="Why you wan't me?"
                required ></textarea>

              <button className={scss.button}>Fuck ME</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
