import React from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";

const Profile = () => {

  const token = useSelector ((state) => state.application.token);
  
  function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload)
}


const user = parseJwt(token)

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
            <label htmlFor="">Имя</label>
            <input type="text" placeholder={user.firstName} />
            <label htmlFor="">Фамилия</label>
            <input type="text" placeholder={user.lastName} />
            <label htmlFor="">Город</label>
            <input type="text" placeholder="Город проживания" />
            <label htmlFor="">Страна</label>
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
