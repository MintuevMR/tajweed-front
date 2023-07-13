import styles from "./lessons.module.css";
import { Link } from "react-router-dom";
import ProfileSidebar from "../Profile/ProfileSidebar";
import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";
import { AppDispatch, RootState } from "../../redux/store/store";

const Lessons = () => {

  const lessons = useSelector((state: RootState) => state.lessons.lessons)

  const dispatch = useDispatch<AppDispatch>();

 
  useEffect(()=> {
    dispatch(fetchLessons())
  }, [])

  return (
    <main>
      <ProfileSidebar />
      {/* <div className={styles.content}>
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
      </div> */}
      <div className={styles.content}>
        {lessons.map((item) => {
          return (
            <div className={styles.card}>
          <span className={`${styles.icons} icons material-symbols-outlined`}>
            bookmarks
          </span>
          <div>
            <Link to={`${item.ref}`}>{item.name}</Link>
          </div>
        </div>
          )
        })}
      </div>
    </main>
  );
};

export default Lessons;

