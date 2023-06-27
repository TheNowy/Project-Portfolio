import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./Conctacts.module.scss";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

const Contacts = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [headerScroll, setHeaderScroll] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nowybackend.up.railway.app/api/messages", {
        username,
        email,
        message,
      });
      setAlertMessage(
        "Сообщение успешно отправлено , ожидайте ответа в течении дня"
      );
      setUsername("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(
        "Ошибка при отправке сообщения, вероятно сервера выключены или находятся в разработке",
        error
      );
      setAlertMessage(
        "Ошибка при отправке сообщения, вероятно сервера выключены или находятся в разработке"
      );
    }
  };

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage("");
    }
  }, [alertMessage]);

  return (
    <>
      <Helmet>
        <title>Nowy - Contacts</title>
      </Helmet>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div
            className={`${scss.home_content} ${
              headerScroll ? scss.active : ""
            }`}>
            <Tilt>
              <div
                className={`${scss.gif_image} ${
                  headerScroll ? scss.active : ""
                }`}>
                <h1 className={scss.h1}>Contact Me</h1>
              </div>
            </Tilt>
            <Tilt>
              <form
                className={`${scss.form} ${headerScroll ? scss.active : ""}`}
                onSubmit={handleSubmit}>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="name">
                  Name
                  <input
                    id="name"
                    className={`${scss.input} ${
                      headerScroll ? scss.active : ""
                    }`}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="email">
                  Email
                  <input
                    id="email"
                    className={`${scss.input} ${
                      headerScroll ? scss.active : ""
                    }`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="comment">
                  Message
                  <textarea
                    id="comment"
                    className={`${scss.message} ${
                      headerScroll ? scss.active : ""
                    }`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required></textarea>
                </label>

                <button type="submit" className={scss.button}>
                  Submit
                </button>
              </form>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
