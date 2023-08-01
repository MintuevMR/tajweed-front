import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";
import UsersFetch from "./UsersFetch";

const AllUsers: React.FC = () => {
  return (
    <main>
      <ProfileSidebar />
      <UsersFetch />
    </main>
  );
};

export default AllUsers;
