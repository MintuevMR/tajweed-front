import React from 'react';
import { Link } from 'react-router-dom';
import styles from './profileSidebar.module.css'
import teacherImg from "../../../assets/man.svg";
import { useSelector } from 'react-redux';

const ProfileSidebar = () => {
  const token = useSelector ((state) => state.application.token);

  console.log(token);
  

  function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload).firstName
}


    return (
        <div className={styles.wrapper}>
        <header>
          <div>
            <img width={50}
              src={teacherImg}
              alt=""
            />
          </div>
          <div>
            <Link to={"/profile"}>{parseJwt(token)}</Link>
          </div>
        </header>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            school
          </span>
          <Link to={"/lessons"}> Обучение </Link>
        </div>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            menu_book
          </span>
          <Link to={"/"}> Коран </Link>
        </div>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            auto_stories
          </span>
          <Link to={"/azkary"}> Азкары </Link>
        </div>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <Link to={"/"}> Мои закладки </Link>
        </div>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
          logout
          </span>
          <Link to={"/"} onClick={() => {
            localStorage.removeItem('token')
            window.location.reload()
          }}> Выход </Link>
        </div>
      </div>
    );
};

export default ProfileSidebar;