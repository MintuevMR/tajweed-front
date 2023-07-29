import styles from "./usersList.module.css";
import React, { useState } from "react";
import GroupsModal from "../Groups/GroupModal";
import { useDispatch, useSelector } from "react-redux";
import { addUserInGroup } from "../../redux/slices/groupsSlice";

import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Button,  Modal } from "antd";

const Users = ({ user, loading, groups }) => {
  const [showModal, setShowModal] = useState(false);

//const [selectedGroup, setSelectedGroup] = useState("");
// const gr = useSelector((state) => state.groups.groups);

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleSelectGroup = (groupId) => {
  //   setSelectedGroup(groupId);
  //   handleCloseModal();
  // };

// console.log(groupId);


  const handleAddGroup = (groupId) => {
    dispatch(addUserInGroup({ groupId, userId: user._id }));
     handleCloseModal();
  };

  const handleDeleteUserInGroup = (groupId) => {
    dispatch(DeleteUserInGroup({ groupId, userId: user._id }));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const hasUserInGroup = groups.some((group) =>
    group.users.find((el) => el._id === user._id)
  );

  return (
    <div className={styles.card_user} key={user._id}>
      <span>
        Имя: {user.firstName} <br /> Фамилия: {user.lastName}
      </span>
      <div className={styles.btn_userClick}>
        <Button
          icon={<UserAddOutlined />}
          disabled={hasUserInGroup}
          onClick={handleOpenModal}
          className={styles.user_btnClick}
        />
        <Button
          icon={<UserDeleteOutlined />}
          className={styles.user_btnClick}
        />
      </div>
      {showModal && (
        <div>
          <Modal
            title="Basic Modal"
            open={true}
            onOk={handleCloseModal}
            // onCancel={handleCancel}
          >
            {groups?.map((group) => (
              <li key={group._id} onClick={() => handleAddGroup(group._id)}>
                {group.groups}
              </li>
            ))}
          </Modal>
        </div>

        // <GroupsModal
        //   user={user}
        //   groups={groups}
        //   onClose={handleCloseModal}
        //   onSelectGroup={handleSelectGroup}
        // />
      )}
    </div>
  );
};
export default Users;
