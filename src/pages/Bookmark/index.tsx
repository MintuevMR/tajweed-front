import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar/index";
import styles from "./bookmark.module.css"
const bookmarks = () => {
  return (
      <main>
        <ProfileSidebar />
        <div className={styles.content}>
        index

        </div>
      </main>
  );
};

export default bookmarks;
