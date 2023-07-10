import React from 'react';
import { Link } from 'react-router-dom';
import styles from './profileSidebar.module.css'

const ProfileSidebar = () => {
    return (
        <div className={styles.wrapper}>
        <header>
          <div>
            <img
              src="https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/AB.daaac963f1a169895bc1022dc918118a.jpg/s/70x70/a/177331/sc/131"
              alt=""
            />
          </div>
          <div>
            <Link to={"/profile"}>Mintuev Мagomed</Link>
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
          <Link to={"/"}> Азкары </Link>
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
          <Link to={"/"}> Выход </Link>
        </div>
      </div>
    );
};

export default ProfileSidebar;