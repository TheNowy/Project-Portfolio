import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

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
      <Helmet>
        <title>Nowy - Portfolio</title>
      </Helmet>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div
            className={`${scss.home_content} ${
              headerScroll ? scss.active : ""
            }`}>
            <div
              className={`${scss.home_title} ${
                headerScroll ? scss.active : ""
              }`}>
              <div className={scss.column_text}>
                <h3 className={`${scss.h3} ${headerScroll ? scss.active : ""}`}>
                  Hi! I Am Zhusup <span className={scss.span2}>(Nowy)</span>{" "}
                  <span className={scss.fullstack}>
                    <a href="https://www.google.com/search?q=fullstack+is&sxsrf=APwXEdeH7BGmAgzdOE2nCNENHr0qvAJZ7w%3A1683709672459&ei=6F5bZPjNG5WTwPAPgOKQmAI&ved=0ahUKEwj44bmns-r-AhWVCRAIHQAxBCMQ4dUDCA8&uact=5&oq=fullstack+is&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQDRCABDIGCAAQFhAeMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjoKCAAQigUQsAMQQzoMCAAQigUQsAMQChBDOgUIABCABDoICAAQgAQQywE6CggAEIAEEBQQhwI6CAguEIAEEMsBOgoIABCABBAKEMsBSgQIQRgAUPIFWN4QYIUSaAFwAXgAgAG4AYgB-wOSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
                      FullStack
                    </a>
                  </span>
                  <br />I AM A
                  <span className={scss.text_animation}>
                    <Typewriter
                      words={[" DevXer", " Frontend Developer", " Freelancer"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={10}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h3>
                {/* <p className={`${scss.p} ${headerScroll ? scss.active : ""}`}>
                <span className={scss.text_animation_parag}>
                  <Typewriter
                    words={["As a skilled Front-End developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Next.js and Web development"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={10}
                    deleteSpeed={10000000000000}
                    delaySpeed={100}
                  />
                </span>
              </p> */}
              </div>
              <Tilt>
                <img
                  className={scss.home_img}
                  src="../../../68747470733a2f2f6170692e7a616877617a65696e2e78797a2f75706c6f61642f69636f6e2e706e67.png"
                  alt=""
                />
              </Tilt>
            </div>
            <div
              className={`${scss.box_container} ${
                headerScroll ? scss.active : ""
              }`}>
              <div className={scss.box_title}>
                <div className={scss.photo}>
                  <img src="/../../../..//kurapica.jpg" alt="" />
                </div>
                <div
                  className={`${scss.title} ${
                    headerScroll ? scss.active : ""
                  }`}>
                  <h3>About Me</h3>
                  <p>
                    16 years old, Passionate and dedicated
                    <span> Full Stack Developer</span> <br />
                  </p>
                  <p>
                    with limited experience but a strong skill set in <br />
                  </p>
                  <p>
                    <span>
                      React, NodeJS, JavaScript, MySQL, HTML, CSS, SASS
                    </span>
                    ,and <span> SCSS</span>.<br />
                  </p>
                  <p>
                    A collaborative team player with excellent
                    <span> Soft Skills</span>, <br />
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
                    <span> Full Stack Developer</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${scss.projects_carus} ${
                headerScroll ? scss.active : ""
              }`}>
              <div className={scss.carus_main}>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
                <h1 className={scss.Title_Anim}>Projects</h1>
              </div>
            </div>
            <div
              className={`${scss.box_container} ${
                headerScroll ? scss.active : ""
              }`}>
              <div className={scss.box_title}>
                <div
                  className={`${scss.title} ${
                    headerScroll ? scss.active : ""
                  }`}>
                  <h3>NowyTeam</h3>
                  <p>
                    The site was developed for <span>Kwork</span> and was
                    abandoned,
                    <br />
                    but in the future I will rewrite this Web-site on{" "}
                    <span>TypeScript</span>
                    <br />
                  </p>
                  <p>
                    <span>The site will be updated,</span> follow the news in my
                    GitHub.
                    <br />
                  </p>
                </div>
                <div className={scss.photo}>
                  <img src="/../../../../project_1.png" alt="" />
                </div>
              </div>
            </div>
            <div className={scss.project_container}>
              <div className={scss.box_project}>
                <div className={scss.project_img}>
                  <img
                    className={scss.left_photo}
                    src="/../../../../project_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={scss.box_project}>
                <div className={scss.project_img}>
                  <img
                    className={scss.right_photo}
                    src="/../../../../project_2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={scss.skill_wrapper}>
              <div className={scss.skill_bd}>
                <div className={scss.skill_box}>
                  <h1>React</h1>
                </div>
                <div className={scss.skill_box}>
                  <h1>TypeScript</h1>
                </div>
                <div className={scss.skill_box}>
                  <h1>JavaScript</h1>
                </div>
                <div className={scss.skill_box}>
                  <h1>NodeJS</h1>
                </div>
                <div className={scss.skill_box}>
                  <h1>MongoDB</h1>
                </div>
                <div className={scss.skill_box}>
                  <h1>SCSS & SASS</h1>
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
