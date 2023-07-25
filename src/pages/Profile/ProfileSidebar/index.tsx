import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './profileSidebar.module.css'
import teacherImg from "../../../assets/man.svg";
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../../redux/slices/userSlices';

const ProfileSidebar = () => {
  const user = useSelector((state) => state.user.user)
  const dispath = useDispatch();

  useEffect(() =>{
    dispath(userInfo())
  }, [])

  return (
        <div className={styles.wrapper}>
        <header>
          <div>
            <img width={50}
              src={!user?.avatar ? teacherImg : `http://localhost:3000${user?.avatar}`}
              alt=""
            />
          </div>
          <div>
            <Link to={"/profile"}>{`${user?.lastName} ${user?.firstName}.`}</Link>
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
          <Link to={"/quran"}> Коран </Link>
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
          <Link to={"/bookmarks"}> Мои закладки </Link>
        </div>
        {user && (
        <div>
          <div className={styles.menuItem}>
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              group
            </span>
            <Link to={"/students"}> Все студенты </Link>
          </div>
          <div className={styles.menuItem}>
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              groups
            </span>
            <Link to={"/groups"}> Группы </Link>
          </div>
        </div>
      )}
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