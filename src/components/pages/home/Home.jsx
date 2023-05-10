import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.scss";

const home = () => {
  return (
    <>
      <div className="page_wrapper">
        <div className="container">
          <div className="home_content">
            <div className="home_image"></div>

            <div className="home_title">
              <h3>
                Hi! I Am Jhusup Toktosunov{" "}
                <span className="fullstack">
                  <a href="https://www.google.com/search?q=fullstack+is&sxsrf=APwXEdeH7BGmAgzdOE2nCNENHr0qvAJZ7w%3A1683709672459&ei=6F5bZPjNG5WTwPAPgOKQmAI&ved=0ahUKEwj44bmns-r-AhWVCRAIHQAxBCMQ4dUDCA8&uact=5&oq=fullstack+is&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQDRCABDIGCAAQFhAeMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjoKCAAQigUQsAMQQzoMCAAQigUQsAMQChBDOgUIABCABDoICAAQgAQQywE6CggAEIAEEBQQhwI6CAguEIAEEMsBOgoIABCABBAKEMsBSgQIQRgAUPIFWN4QYIUSaAFwAXgAgAG4AYgB-wOSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
                    FullStack
                  </a>
                </span>{" "}
                <br />
                And I
                <span className="text_animation">
                  <Typewriter
                    words={[" develop", " design", " create"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
                user-friendly products.
              </h3>
            </div>
          </div>
          <div className="box_container">
            <div className="box_title">
              <div className="title">
                <h3>Hello World</h3>
              </div>
              <div className="photo">
                <img
                  src="https://media3.giphy.com/media/ijsYTyxaMzZh6/giphy.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
