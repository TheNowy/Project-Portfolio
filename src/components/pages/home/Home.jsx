import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import scss from "./Home.module.scss";

const Home = () => {
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
          <div className={scss.home_content}>
            <div className={scss.home_image}></div>

            <div className={`${scss.home_title} ${headerScroll ? scss.active : ""}`}>
              <h3 className={`${scss.h3} ${headerScroll ? scss.active : ""}`}>
                Hi! I Am Toktosunov Zhusup <span className="span2">(Nowy)</span>{" "}
                <span className={scss.fullstack}>
                  <a href="https://www.google.com/search?q=fullstack+is&sxsrf=APwXEdeH7BGmAgzdOE2nCNENHr0qvAJZ7w%3A1683709672459&ei=6F5bZPjNG5WTwPAPgOKQmAI&ved=0ahUKEwj44bmns-r-AhWVCRAIHQAxBCMQ4dUDCA8&uact=5&oq=fullstack+is&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQDRCABDIGCAAQFhAeMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjoKCAAQigUQsAMQQzoMCAAQigUQsAMQChBDOgUIABCABDoICAAQgAQQywE6CggAEIAEEBQQhwI6CAguEIAEEMsBOgoIABCABBAKEMsBSgQIQRgAUPIFWN4QYIUSaAFwAXgAgAG4AYgB-wOSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
                    FullStack
                  </a>
                </span>
                <br />
                And I
                <span className={scss.text_animation}>
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
            <div className={scss.box_container}>
              <div className={scss.box_title}>
                <div className={scss.photo}>
                  <img
                    src="https://i.pinimg.com/originals/8b/90/3e/8b903e622251c9a3b959cb28ffdb86c1.jpg"
                    alt=""
                  />
                </div>
                <div className={scss.title}>
                  <h3>About Me</h3>
                  <p>
                    16 years old, Passionate and dedicated
                    <span>Full Stack Developer</span> <br />
                  </p>
                  <p>
                    with limited experience but a strong skill set in <br />
                  </p>
                  <p>
                    <span>
                      React, NodeJS, JavaScript, MySQL, HTML, CSS, SASS
                    </span>
                    ,and <span>SCSS</span>.<br />
                  </p>
                  <p>
                    A collaborative team player with excellent
                    <span>Soft Skills</span>, <br />
                  </p>
                  <p>
                    I excel in communication and problem-solving. <br />
                  </p>
                  <p>
                    Eager to learn and adapt quickly to new technologies, I am
                    committed to delivering innovative solutions. <br />
                  </p>
                  <p>
                    Seeking opportunities to contribute effectively to
                    development projects and grow as a
                    <span>Full Stack Developer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={scss.projects_carus}>
              <div className={scss.carus_main}>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
              </div>
            </div>
            <div className={scss.box_container}>
              <div className={scss.box_title}>
                <div className={scss.title}>
                  <h3>Projects</h3>
                  <p>
                    I develop the user interface, Web page development, I create
                    <span>UX element interactions</span>, <br />
                  </p>
                  <p>
                    <span>Design and mockups</span> of products for companies.
                    <br />
                  </p>
                </div>
                <div className={scss.photo}>
                  <img
                    src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/kac1/3ce5VQwcL"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={scss.project_container}>
              <div className={scss.box_project}>
                <div className={scss.project_img}>
                  <img
                    className={scss.left_photo}
                    src="https://cdn.dribbble.com/users/1346196/screenshots/6176280/attachments/1324203/web_mockup.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={scss.box_project}>
                <div className={scss.project_img}>
                  <img
                    className={scss.right_photo}
                    src="https://assets.justinmind.com/wp-content/uploads/2020/08/travel-ecommerce-app-mockup.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
