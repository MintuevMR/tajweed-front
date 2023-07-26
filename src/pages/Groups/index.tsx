import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar";
import GroupFetch from "./GroupFetch";
import styles from "./groups.module.css";

const index = () => {
  return (
    <div className={styles.root}>
      <ProfileSidebar />
      <div className={styles.group_div}>
        <GroupFetch />
      </div>
    </div>
  );
};

export default index;
