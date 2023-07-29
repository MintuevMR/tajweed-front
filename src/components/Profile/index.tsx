import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "../ProfileSidebar";
import styles from "./profile.module.css";
import { notification } from "antd";
import teacherImg from "../../assets/man.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  userChangeAvatar,
  userChangeInfo,
  userInfo,
} from "../../redux/slices/userSlices";
import { RootState } from "../../redux/store/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const error = useSelector((state: RootState) => state.user.error);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeUserInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userChangeInfo({ firstName, lastName }));
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {

    dispatch(userInfo());

    if (error) {
      notification.error({
        message: 'Ошибка',
        description: error,
        duration: 3,
      });
    }
  }, [error]); //

  const formData: FormData = new FormData();

  const handleChangeAva = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(userChangeAvatar(formData));
  };

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
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
