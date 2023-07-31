import React from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import styles from "./notFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <main>
      <ProfileSidebar />
      <div className="content">
        <img
          src="https://ru.hostings.info/upload/images/2021/12/e11044b915dc39afc3004430606bd6d1.jpg"
          alt=""
          className={styles.img}
        />
      </div>
    </main>
  );
};

export default NotFound;
