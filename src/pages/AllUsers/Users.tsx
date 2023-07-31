import styles from "./usersList.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserInGroup,
  deleteUserInGroup,
} from "../../redux/slices/groupsSlice";
import {
  UserAddOutlined,
  UserDeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import teacherImg from "@/assets/man.svg";

interface UserProps {
  user: users;
  loading: boolean;
  groups: groups[];
}

type UserItem = {
  _id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  __v: number;
};

const Users: React.FC<UserProps> = ({ user, loading, groups }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddUserInGroup = (groupId: string) => {
    dispatch(addUserInGroup({ groupId, userId: user._id }));
    handleCloseModal();
  };

  const handleDeleteUserInGroup = (groupId: string) => {
    dispatch(deleteUserInGroup({ groupId, userId: user._id }));
    handleCloseModal();
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const hasUserInGroup = groups.some((group) =>
    group.users.find((el: UserItem) => el._id === user._id)
  );

  return (
    <div className={styles.card_user} key={user._id}>
      <div>
        <img
          src={user.avatar ? `http://localhost:3000${user.avatar}` : teacherImg}
          width={50}
          height={50}
        />
      </div>
      <span>
        Имя: {user.firstName} <br /> Фамилия: {user.lastName}
      </span>
      <div className={styles.btn_userClick}>
        <Button icon={<EditOutlined />} onClick={handleOpenModal} />
      </div>
      {showModal && (
        <div>
          <Modal
            title="Добавление или удаление из группы"
            open={true}
            onOk={handleCloseModal}
            onCancel={handleCloseModal}
          >
            <div>
              {groups?.map((group) => (
                <li key={group._id}>
                  <Button
                    icon={<UserAddOutlined />}
                    onClick={() => handleAddUserInGroup(group._id)}
                    disabled={hasUserInGroup}
                  />
                  Добавить в {group.groups}
                </li>
              ))}
            </div>
            <div>
              {groups
                ?.filter((group) =>
                  group.users.some((item) => item._id === user._id)
                )
                .map((group) => (
                  <li key={group._id}>
                    <Button
                      onClick={() => handleDeleteUserInGroup(group._id)}
                      icon={<UserDeleteOutlined />}
                    />
                    Удалить из {group.groups}
                  </li>
                ))}
            </div>
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
