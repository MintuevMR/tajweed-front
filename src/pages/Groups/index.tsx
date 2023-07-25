import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar";
import GroupFetch from "./GroupFetch";
import styles from "./groups.module.css";

const index = () => {
  return (
    <div className={styles.root}>
      <ProfileSidebar />
      <GroupFetch />
    </div>
  );
};

export default index;
