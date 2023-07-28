import styles from "./usersList.module.css";
import React, { useState } from "react";
import GroupsModal from "../Groups/GroupModal";
import { useDispatch, useSelector } from "react-redux";
import { addUserInGroup } from "../../redux/slices/groupsSlice";

const Users = ({ user, loading, groups }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");

  const gr = useSelector((state) => state.groups.groups)
  console.log('gr', gr);


  

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectGroup = (groupId) => {
    setSelectedGroup(groupId);
    handleCloseModal();
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

console.log();


const hasUserInGroup = groups.some((group) => group.users.includes(user._id));


  return (
    <div className={styles.card_user} key={user._id}>
      <p className={styles.user_name}>
        Имя: {user.firstName} <br /> Фамилия: {user.lastName}
      </p>
      <div className={styles.btn_userClick}>
        <button
        style={hasUserInGroup ? {backgroundColor: "gray"} : null}
          disabled={hasUserInGroup}
          onClick={handleOpenModal}
          className={styles.user_btnClick}
        >
          +
        </button>
        <button className={styles.user_btnDelClick}>x</button>
      </div>
      {showModal && (
        <GroupsModal
          user={user}
          groups={groups}
          onClose={handleCloseModal}
          onSelectGroup={handleSelectGroup}
        />
      )}
    </div>
  );
};
export default Users;
