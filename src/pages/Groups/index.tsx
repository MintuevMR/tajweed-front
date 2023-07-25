import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar";
import GroupInput from "./groupInput";
import styles from "./groups.module.css";

const index = () => {
  return (
    <div className={styles.root}>
      <ProfileSidebar />
      <GroupInput />
    </div>
  );
};

export default index;
