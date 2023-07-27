import styles from "./usersList.module.css";
import React, { useState } from "react";

const Users = ({ user, loading }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.card_user} key={user._id}>
      <div className={styles.user_name}>
        Имя: {user.firstName} <br />
        Фамилия: {user.lastName}
      </div>
      {/* <div className={styles.btn_userClick}>
        <button onClick={handleOpenModal} className={styles.user_btnClick}>+</button>
        <button onClick={handleCloseModal} className={styles.user_btnDelClick}>x</button>
      </div> */}
    </div>
  );
};
export default Users;
