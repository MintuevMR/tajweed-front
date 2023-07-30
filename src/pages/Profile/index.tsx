import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./profile.module.scss";
import { notification } from "antd";
import teacherImg from "../../assets/man.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  userChangeAvatar,
  userChangeInfo,
  userInfo,
} from "../../redux/slices/userSlices";
import { RootState } from "../../redux/store/store";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const error = useSelector((state: RootState) => state.user.error);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const [avatarFile, setAvatarFile] = useState<File | null>(null); // Состояние для выбранного файла
  const formData: FormData = new FormData();

  const handleChangeUserInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userChangeInfo({ firstName, lastName }));
    setFirstName("");
    setLastName("");
  };

  const handleChangeFile = (file: RcFile): RcFile | boolean => {
    setAvatarFile(file as File);
    return file;
  };

  const uploadProps: UploadProps = {
    beforeUpload: handleChangeFile,
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        setTimeout(() => {
          onSuccess("success", new XMLHttpRequest());
        }, 1000);
      } catch (error) {
        onError(error);
      }
    },
    showUploadList: false, // Убираем отображение списка загруженных файлов
  };

  const handleChangeAva = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (avatarFile) {
      const formData: FormData = new FormData();
      formData.append("image", avatarFile);
      dispatch(userChangeAvatar(formData));
    } else {
      notification.error({
        message: "Ошибка",
        description: "Пожалуйста, выберите файл для загрузки.",
        duration: 3,
      });
    }
  };

  useEffect(() => {
    dispatch(userInfo());
    if (error) {
      notification.error({
        message: "Ошибка",
        description: error,
        duration: 3,
      });
    }
  }, [error]); //

  // const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files[0];
  //   formData.append("image", file);
  // };

  return (
    <main>
      <ProfileSidebar />
      <div className="content">
        <div className={styles.profileChange}>
          <div>
            <h1>Мой профиль</h1>
            <p>В этом разделе вы можете редактировать свои данные </p>
          </div>
          <div>
            <div className={styles.avatar}>
              <img
                width={100}
                src={
                  !user?.avatar
                    ? teacherImg
                    : `http://localhost:3000${user?.avatar}`
                }
              />
              <div className={styles.avatarButtons}>
              <Upload {...uploadProps} showUploadList={true}>
                <Button icon={<UploadOutlined />}>Выберите фото</Button>
              </Upload>
              <Button onClick={handleChangeAva}>Отправить</Button>
              </div>
 
            </div>
          </div>
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
        </div>
      </div>
    </main>
  );
};

export default Profile;
