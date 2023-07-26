import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./profileSidebar.module.css";
import teacherImg from "../../../assets/man.svg";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../../redux/slices/userSlices";

const ProfileSidebar = () => {
  const user = useSelector((state) => state.user.user);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(userInfo());
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <div>
          <img
            width={50}
            src={
              !user?.avatar
                ? teacherImg
                : `http://localhost:3000${user?.avatar}`
            }
            alt=""
          />
        </div>
        <div>
          <Link to={"/profile"}>{`${user?.lastName} ${user?.firstName}.`}</Link>
        </div>
      </header>
      <Link to={"/lessons"}>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            school
          </span>
          Обучение
        </div>
      </Link>
      <Link to={"/quran"}>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            menu_book
          </span>
          Коран
        </div>
      </Link>
      <Link to={"/azkary"}>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            auto_stories
          </span>
          Азкары
        </div>
      </Link>
      <Link to={"/bookmarks"}>
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          Мои закладки
        </div>
      </Link>
      {user && (
        <div>
          <Link to={"/students"}>
            <div className={styles.menuItem}>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                group
              </span>
              Все студенты
            </div>
          </Link>
          <Link to={"/groups"}>
            <div className={styles.menuItem}>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                groups
              </span>
              Группы
            </div>
          </Link>
        </div>
      )}
      <Link
        to={"/"}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        <div className={styles.menuItem}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            logout
          </span>
          Выход
        </div>
      </Link>
    </div>
  );
};

export default ProfileSidebar;
