import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";
import UsersFetch from "./UsersFetch";
import styles from "./usersList.module.css";

const AllUsers: React.FC = () => {
  return (
    <main>
      <ProfileSidebar />
      <UsersFetch />
    </main>
  );
};

export default AllUsers;
