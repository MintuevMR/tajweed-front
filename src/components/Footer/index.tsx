import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={logo} alt="Logo" className={styles.footerLogo} />
        <div className={styles.footerText}>Центр обучения КОРАНА</div>
        <div className={styles.footerLogoText}>Tajvid</div>

      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="420"
        viewBox="0 0 1512 420"
        fill="none"
      >
        <path
          d="M0 420L1512.5 418.898V233.5L0 -3.05176e-05V420Z"
          fill="url(#paint0_linear_304_80)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_304_80"
            x1="-469"
            y1="390.788"
            x2="2158.05"
            y2="-445.652"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#164804" />
            <stop offset="0.609375" stop-color="#269907" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
