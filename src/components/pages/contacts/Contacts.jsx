import React from "react";
import scss from "./Conctacts.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <form className={scss.form}>
              <label htmlFor="...">
                Name:
                <input
                  className={scss.input}
                  type="text"
                  required
                />
              </label>
              <label htmlFor="...">
                Email:
                <input
                  className={scss.input}
                  type="text"
                  required
                />
              </label>
              <label htmlFor="...">
                Comment:
                <textarea
                  className={scss.message}
                  required></textarea>
              </label>
              <button className={scss.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
