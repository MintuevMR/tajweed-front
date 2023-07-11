import React from "react";
import styles from "./header.module.css";
import socialIcons from "../../../assets/icons.png";
import logo from "../../../assets/logo.png";


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
            <div className={styles.logoText}>Tajvid</div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>Азкары</li>
              <li onClick={handleScroll}>Контакты</li>
              <li onClick={handleScrollUp}>О нас</li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            <button className={styles.loginButton}>Войти</button>
            <button className={styles.registerButton}>Регистрация</button>
          </div>
          {/* <svg
          className={styles.plashkaSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="1512"
          height="774"
          viewBox="0 0 1512 774"
          fill="none"
        >
          <path d="M0 -1L1512 0V582L0 774V-1Z" fill="url(#paint0_linear_4_9)" />
          <defs>
            <linearGradient
              id="paint0_linear_4_9"
              x1="-147"
              y1="-19.5"
              x2="1512"
              y2="702"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#164804" />
              <stop offset="1" stopColor="#269907" />
            </linearGradient>
          </defs>
        </svg> */}
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