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
                Hi! I Am Toktosunov Jhusup <span className="span2">(Zhusup)</span>{" "}
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
                    typeSpeed={50}
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
              <div className="photo">
                <img
                  src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/SkZU/ztXxZ5k2S"
                  alt=""
                />
              </div>
              <div className="title">
                <h3>About Me</h3>
                <p>
                  16 years old, Passionate and dedicated <span>Full Stack Developer</span>{" "}
                  <br />
                </p>
                <p>
                  with limited experience but a strong skill set in <span>React</span>,{" "}
                  <br />
                </p>
                <p>
                <span>NodeJS, JavaScript, MySQL, HTML, CSS, SASS</span>,and <span>SCSS</span>. A <br />
                </p>
                <p>
                  collaborative team player with excellent <span>Soft Skills</span>, I excel{" "}
                  <br />
                </p>
                <p>
                  in communication and problem-solving. Eager to learn and adapt{" "}
                  <br />
                </p>
                <p>
                  quickly to new technologies, I am committed to delivering{" "}
                  <br />
                </p>
                <p>
                  innovative solutions. Seeking opportunities to contribute{" "}
                  <br />
                </p>
                <p>
                  effectively to development projects and grow as a <span>Full Stack
                  Developer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box_container">
            <div className="box_title">
              <div className="title">
                <h3>Project</h3>
                <p>
                I develop the user interface, Web page development, I create <span>UX element</span>{" "}
                  <br />
                </p>
                <p>
                interactions, <span>Design and mockups</span> of products for companies.{" "}
                  <br />
                </p>
              </div>
              <div className="photo">
                <img
                  src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/kac1/3ce5VQwcL"
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
