import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";
import GroupFetch from "./GroupFetch";
import styles from "./groups.module.css";

const index = () => {
  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        <GroupFetch />
      </div>
    </main>
  );
};

export default index;
