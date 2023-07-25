import styles from "./lessons.module.css";
import ProfileSidebar from "../Profile/ProfileSidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";
import Bookmark from "../../components/Bookmark";

const Lessons = () => {
  const lessons = useSelector((state) => state.lessons.lessons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        {lessons.map((item) => (
          <Bookmark item={item} />
        ))}
      </div>
    </main>
  );
};

export default Lessons;
