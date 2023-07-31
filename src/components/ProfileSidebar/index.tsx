import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./profileSidebar.module.scss";
import teacherImg from "@/assets/man.svg";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "@/redux/slices/userSlices";
import { showBarToggle } from "@/redux/slices/appSlices";
import { AppDispatch, RootState } from "@/redux/store/store";

const ProfileSidebar = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const showBar = useSelector((state: RootState) => state.application.showBar);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(userInfo());
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
          {showBar ? (
            <Link
              to={"/profile"}
            >{`${user?.lastName} ${user?.firstName}.`}</Link>
          ) : null}
        </div>
      </header>
      <Link to={"/lessons"}>
        <div className={styles.menuItem}>
          {showBar ? (
            <>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                school
              </span>
              <span>Обучение</span>
            </>
          ) : (
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              school
            </span>
          )}
        </div>
      </Link>
      <Link to={"/quran"}>
        <div className={styles.menuItem}>
          {showBar ? (
            <>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                menu_book
              </span>
              Коран
            </>
          ) : (
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              menu_book
            </span>
          )}
        </div>
      </Link>
      <Link to={"/azkary"}>
        <div className={styles.menuItem}>
          {showBar ? (
            <>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                auto_stories
              </span>
              Азкары
            </>
          ) : (
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              auto_stories
            </span>
          )}
        </div>
      </Link>
      <Link to={"/bookmarks"}>
        <div className={styles.menuItem}>
          {showBar ? (
            <>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                bookmarks
              </span>
              <span>Мои закладки</span>
            </>
          ) : (
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              bookmarks
            </span>
          )}
        </div>
      </Link>
      {user.role === "moder" && (
        <>
          <Link to={"/students"}>
            <div className={styles.menuItem}>
              {showBar ? (
                <>
                  <span
                    className={`${styles.icons} icons material-symbols-outlined`}
                  >
                    group
                  </span>
                  Все студенты
                </>
              ) : (
                <span
                  className={`${styles.icons} icons material-symbols-outlined`}
                >
                  group
                </span>
              )}
            </div>
          </Link>
          <Link to={"/groups"}>
            <div className={styles.menuItem}>
              {showBar ? (
                <>
                  <span
                    className={`${styles.icons} icons material-symbols-outlined`}
                  >
                    groups
                  </span>
                  Группы
                </>
              ) : (
                <span
                  className={`${styles.icons} icons material-symbols-outlined`}
                >
                  groups
                </span>
              )}
            </div>
          </Link>
        </>
      )}
      <Link
        to={"/"}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        <div className={styles.menuItem}>
          {showBar ? (
            <>
              <span
                className={`${styles.icons} icons material-symbols-outlined`}
              >
                logout
              </span>
              Выход
            </>
          ) : (
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              logout
            </span>
          )}
        </div>
      </Link>
      <div
        className={styles.menuItem}
        onClick={() => dispatch(showBarToggle())}
      >
        {showBar ? (
          <div className={styles.lastMenuItem}>
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              format_letter_spacing
            </span>
            <span>Свернуть меню</span>
          </div>
        ) : (
          <div className={styles.lastMenuItem}>
            <span className={`${styles.icons} icons material-symbols-outlined`}>
              format_letter_spacing
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSidebar;
