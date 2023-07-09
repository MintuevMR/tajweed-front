import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        <img
          src="https://ru.hostings.info/upload/images/2021/12/e11044b915dc39afc3004430606bd6d1.jpg"
          alt=""
        />
      </div>
    </main>
  );
};

export default NotFound;
