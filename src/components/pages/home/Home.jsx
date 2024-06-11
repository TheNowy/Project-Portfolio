import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
// import SmoothScroll from "../Scroll-Animation/Scroll";

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

    const setZoom = () => {
      if (window.innerWidth > 500) {
        document.body.style.zoom = "90%";
      } else {
        document.body.style.zoom = "100%";
      }
    };

    changeBackground();
    setZoom();

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
      {/* <SmoothScroll /> */}
      <div className={scss.page_wrapper}>
        <motion.ul
          className="container"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}>
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
                  <h3
                    className={`${scss.h3} ${headerScroll ? scss.active : ""}`}>
                    Hi! I Am Zhusup <span className={scss.span2}>(Nowy)</span>{" "}
                    <span className={scss.fullstack}>
                      <a href="https://www.google.com/search?q=fullstack+is&sxsrf=APwXEdeH7BGmAgzdOE2nCNENHr0qvAJZ7w%3A1683709672459&ei=6F5bZPjNG5WTwPAPgOKQmAI&ved=0ahUKEwj44bmns-r-AhWVCRAIHQAxBCMQ4dUDCA8&uact=5&oq=fullstack+is&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQDRCABDIGCAAQFhAeMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjoKCAAQigUQsAMQQzoMCAAQigUQsAMQChBDOgUIABCABDoICAAQgAQQywE6CggAEIAEEBQQhwI6CAguEIAEEMsBOgoIABCABBAKEMsBSgQIQRgAUPIFWN4QYIUSaAFwAXgAgAG4AYgB-wOSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
                        FullStack
                      </a>
                    </span>
                    <br />I AM A
                    <span className={scss.text_animation}>
                      <Typewriter
                        words={[
                          " DevXer",
                          " Frontender",
                          " Devoloper",
                          " Freelancer",
                        ]}
                        loop={false}
                        typeSpeed={70}
                        deleteSpeed={10}
                        delaySpeed={1300}
                      />
                    </span>
                  </h3>
                </div>
              </div>
              <div
                className={`${scss.box_container} ${
                  headerScroll ? scss.active : ""
                }`}>
                <div className={scss.box_title}>
                  <div className={scss.photo}>
                    <img
                      src="https://media.idownloadblog.com/wp-content/uploads/2020/11/snow-wallpaper-mountain-lake-idownloadblog-unsplash-fynn-ipad.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${scss.title} ${
                      headerScroll ? scss.active : ""
                    }`}>
                    <h3>About Me</h3>
                    <p>
                      17 years old, Passionate and dedicated
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
                <div
                  className={`${scss.carus_main} ${
                    headerScroll ? scss.active : ""
                  }`}>
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
                      <span>The site will be updated,</span> follow the news in
                      my GitHub.
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
              <div className={scss.skill_container}>
                <h3 className={scss.skill_title}>Skills</h3>
                <div className={scss.box_container_twm_skill}>
                  <div className={scss.box_twm_skill}>
                    <h3>FullStack</h3>
                    <p>
                      As a full-stack developer, I have a variety of skills that
                      allow me to handle both the front-end and back-end aspects
                      of web development. These skills allow me to create
                      comprehensive and interactive web applications from start
                      to finish.
                    </p>
                  </div>
                  <div className={scss.box_twm_skill}>
                    <h3>Front-End</h3>
                    <p>
                      Having knowledge in front-end technologies such as
                      JavaScript, React, TypeScript, HTML5, CSS3, SCSS,
                      Tailwind, Bootstrap, Material-UI, Figma. I can create
                      intuitive user interfaces and responsive web designs. I
                      have a keen eye for design aesthetics, which ensures that
                      the user experience is fluid and visually appealing.
                    </p>
                  </div>
                  <div className={scss.box_twm_skill}>
                    <h3>Languages</h3>
                    <p>
                      I am proficient in several programming languages such as
                      JavaScript , TypeScript, and Node JS. This versatility
                      allows me to adapt to different project requirements and
                      choose the best language for each task.
                    </p>
                  </div>
                  <div className={scss.box_twm_skill}>
                    <h3>Database</h3>
                    <p>
                      I have experience with various database systems such as
                      MySQL, MongoDB. I can efficiently design and optimize
                      database schemas, write complex queries, ensure data
                      integrity and security.
                    </p>
                  </div>
                  <div className={scss.box_twm_skill}>
                    <h3>Back-End</h3>
                    <p>
                      I am well versed in back-end technologies such as Node.js,
                      Express, Fastify , RESTful APIs, Prisma, and GraphQL. This
                      knowledge allows me to design and implement server-side
                      logic, manage data storage and retrieval, and create
                      robust APIs to ensure seamless communication between
                      external and internal systems.
                    </p>
                  </div>
                  <div className={scss.box_twm_skill}>
                    <h3>Git</h3>
                    <p>
                      I am able to use Git and other version control tools to
                      effectively manage code repositories. This allows me to
                      collaborate with other developers, easily integrate code,
                      and track changes throughout the development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.ul>
      </div>
    </>
  );
};

export default Home;
