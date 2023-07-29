import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar/index";
import styles from "./azkary.module.css"
import { Link } from "react-router-dom";

const Azkary = () => {
  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        <div className={styles.content_link}>
          <Link to="/azkary/morning">Утренние азкары</Link>
        </div>
        <div className={styles.content_link}>
          <Link to="/azkary/evening">Вечерние азкары</Link>
        </div>
      </div>
    </main>
  );
};

export default Azkary;
