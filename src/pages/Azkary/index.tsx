import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar/index";
import styles from "./azkary.module.css"
import { Link } from "react-router-dom";

const Azkary = () => {
  return (
    <div className={styles.main}>
      <ProfileSidebar />
      <div className={styles.content}>
        <div className={styles.content_link}>
          <Link to="/azkary/morning">Утренние азкары</Link>
        </div>
        <div className={styles.content_link}>
          <Link to="/azkary/evening">Вечерние азкары</Link>
        </div>
      </div>
    </div>
  );
};

export default Azkary;
