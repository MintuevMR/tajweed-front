import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar";
import UsersFetch from "./UsersFetch";
import styles from "./usersList.module.css";

const index = () => {
  return (
    <main>
      <ProfileSidebar />
      <UsersFetch />
    </main>
  );
};

export default index;
