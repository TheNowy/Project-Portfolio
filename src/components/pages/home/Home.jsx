import React from "react";
import Typical from "react-typical";
import "./home.scss";

const home = () => {
  return (
    <div>
      <div className="home_page">
        <div className="text_home">
          <div className="text_wrap">
            <h1>Hi, I'm Jhusup👋🏻</h1>
            <span className="typeau">
              I{" "}
              <span>
                <Typical
                  loop={Infinity}
                  wrapper="d"
                  steps={[
                    "develop",
                    2000,
                    "create",
                    2000,
                    "desing",
                    2000,
                  ]}></Typical>
              </span>
              user-friendly products.
            </span>
          </div>
        </div>
        <div className="wrap_helper">
          <div className="photo_miniab">
            <div className="miniabout">
              <h1>About Me</h1>
              <p className="aboutpar">
                My name is Zhusup Toktosunov. I am a student software developer.
                I believe in design quality and always pay attention to details
                because that's what makes a great product.
              </p>
              <p className="aboutpar">
                I have led a team of students as a Designer and a Lead Developer
                to create TinyDesk - a web application to help you manage your
                bookmarks and boost your productivity.
              </p>
              <p className="aboutpar">
                I am currently pursuing an undergraduate degree in Computer
                Science with a specialization in AI and Data Science at Stony
                Brook University.
              </p>
            </div>
            <div className="photo"></div>
          </div>
        </div>
        <div className="wrap_helper">
          <div className="photo_miniab">
            <div className="photo"></div>
            <div className="miniabout">
              <h1>Project</h1>
              <p className="aboutpar">
                TinyDesk is a web application that lets users manage bookmarks
                and boost their productivity with handy widgets.
              </p>
              <p className="aboutpar">
                The project was supervised by Alex Kuhn (ex-Apple Engineer) and
                was led by me as a Lead Developer and Designer. I was mainly
                responsible for system architecture and user interface design.
              </p>
              <p className="aboutpar">
                It was built with GatsbyJS & Material UI and deployed to Heroku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
