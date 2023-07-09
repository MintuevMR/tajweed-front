import React from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import styles from "./profile.module.css";

const Profile = () => {
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
          <form className={styles.form} >
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Город проживания" />
            <input type="text" placeholder="Страна" />
            <button className={styles.button}>Сохранить</button>
          </form>
          <div>
            <img
              src="https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/AB.daaac963f1a169895bc1022dc918118a.jpg/s/70x70/a/177331/sc/131"
              alt=""
            />
            <div>сменить аватар</div>
            <div>удалить</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
