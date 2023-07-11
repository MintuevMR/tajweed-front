import React from "react";
import styles from "./header.module.css";
import socialIcons from "../../../assets/icons.png";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 2300, behavior: "smooth" });
  };
  const handleScroll = () => {
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  return (
    <div className={styles.headerTop}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <div className={styles.logoText}>Tajweed</div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {/* <li>Азкары</li> */}
              <li onClick={handleScroll}>Контакты</li>
              <li onClick={handleScrollUp}>О нас</li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            <button className={styles.loginButton}> <Link to = '/login'>Войти</Link> </button>
            <button className={styles.registerButton}><Link to = '/register'>Регистрация</Link></button>
          </div>
        </header>
        <div className={styles.slogan}>
          Не будь чужим для КОРАНА
          <div>Зарегистрируйся и научись читать Коран у себя дома</div>
          <button> Начать сейчас</button>
          <img src={socialIcons} alt="icons" />
        </div>
      </div>
    </div>
  );
};


export default Header;