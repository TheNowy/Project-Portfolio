import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"


export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_cont">
          <div className="main_cont">
            <div className="info">
            <Link to="/" className="logo_text">Nowy</Link>
           <p>
              Поднимите свою карьеру, доход и жизнь на новый уровень. WEDEVX
              помогло более 432 студентам получить первую работу в
              технологической сфере, станьте следующим и измените свою жизнь уже
              сегодня!
            </p>
            <h3 className="protected">Авторское право © 2023 DevX | Работает на Nowy</h3>
          </div>
          <div className="prices">
          <Link to="/" className="price_logo">Цены</Link>
          <Link to="/" className="price">Эконом</Link>
          <Link to="/" className="price">Стандарт</Link>
          <Link to="/" className="price">Среднее</Link>
          <Link to="/" className="price">Богатое</Link>
          </div>
          <div className="nowy_dev">
            <h1>Nowy-DevX</h1>
          <Link to="/" className="nowyab">Цены</Link>
          <Link to="/" className="nowyab">О нас</Link>
          <Link to="/" className="nowyab">Часто задаваемые вопросы</Link> 
          </div>
          <div className="meet_us">
          <Link to="/" className="contactLogo">Связаться с нами</Link>
          <Link to="/" className="contactUS">hello@devxschool.com</Link>
          <Link to="/" className="contactUS">312-667-9735</Link>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
