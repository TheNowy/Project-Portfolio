import React from "react";
import scss from "./Conctacts.module.scss";

const Contacts = () => {
  const handleSubmit = () => {
  };

  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.gif_image}>
              <h1>Contact</h1>
            </div>
            <form className={scss.form} onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name:
                <input id="name" className={scss.input} type="text" required />
              </label>
              <label htmlFor="email">
                Email:
                <input id="email" className={scss.input} type="email" required />
              </label>
              <label htmlFor="comment">
                Comment:
                <textarea id="comment" className={scss.message} required></textarea>
              </label>

              <button type="submit" className={scss.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

