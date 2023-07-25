import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import styles from "./profile.module.css";
import teacherImg from "../../assets/man.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  userChangeAvatar,
  userChangeInfo,
  userInfo,
} from "../../redux/slices/userSlices";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const handleChangeUserInfo = (e) => {
    e.preventDefault();
    dispatch(userChangeInfo({ firstName, lastName }));
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  const formData = new FormData();

  const handleChangeAva = (e) => {
    e.preventDefault();
    dispatch(userChangeAvatar(formData));
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    formData.append("image", file);
  };

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        <div>
          <h1>Мой профиль</h1>
          <p>
            В этом разделе вы можете <br />
            редактировать свои данные{" "}
          </p>
        </div>
        <div className={styles.profileChange}>
          <form className={styles.form} onSubmit={handleChangeUserInfo}>
            <label htmlFor="">Имя</label>
            <input
              type="text"
              placeholder={user?.firstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="">Фамилия</label>
            <input
              type="text"
              placeholder={user?.lastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="">Город</label>
            <input type="text" readOnly placeholder="Грозный" />
            <label htmlFor="">Страна</label>
            <input type="text" readOnly placeholder="Россия" />
            <button className={styles.button}>Сохранить</button>
          </form>
          <div>
            <img
              width={100}
              src={
                !user?.avatar
                  ? teacherImg
                  : `http://localhost:3000${user?.avatar}`
              }
            />
            <div>
              <input type="file" onChange={handleChangeFile} />
              <button onClick={handleChangeAva}>отправить </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
