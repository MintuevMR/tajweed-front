import React from "react";
import styles from "./lessons.module.css";
import { Link } from "react-router-dom";
import ProfileSidebar from "../Profile/ProfileSidebar";

const Lessons = () => {
  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>Алфавит</Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>Огласовки</Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>Формы соединения букв</Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>Мадда</Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>Сукун</Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons/alphabet"}>
              Танвин
            </Link>
          </div>
        </div>
        <div className={styles.card}>
        <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={"/lessons"}>Ташдид</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Lessons;
