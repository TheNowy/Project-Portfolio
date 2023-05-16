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
                placeholder="Nickname"
                required
              />

              <input
                className={scss.input}
                type="text"
                placeholder="Password"
                required
              />

              <textarea
                className={scss.message}
                placeholder="Message"
                required ></textarea>

              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
