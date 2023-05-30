import React from "react";
import scss from "./Blog.module.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className={scss.page_wrapper}>
      <div className={scss.container}>
        <div className={scss.home_content}>
          <div className={scss.blog_title}>
            <div className={scss.title}>
              <h3>Zhusup Toktosunov | Personal Blog</h3>
              <p>
                Welcome to my personal blog. Here I share my stories and ideas
                with the world. I am very passionate about programming and
                design. Currently, I am a Computer Science student at WEDEVX
              </p>
            </div>

            <Link to="/contacts">
              <button className={scss.btn}>
                Get In Touch <span>→</span>
              </button>
            </Link>
          </div>

          <div className={scss.blog_img}>
            <img
              src="https://s.abcnews.com/images/Business/elon-musk-file-gty-jef-220711_1657563938913_hpMain_4x3_992.jpg"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
