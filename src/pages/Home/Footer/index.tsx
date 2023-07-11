import React from "react";
import styles from "./footer.module.css";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
      <footer className={styles.footerTop}>
        <div className={styles.footerContent}>
          <img src={logo} alt="Logo" className={styles.footerLogo} />
          <div className={styles.footerText}>Центр обучения КОРАНА</div>
          <div className={styles.footerLogoText}>Tajweed</div>
        </div>
      </footer>
  );
};

export default Footer;
