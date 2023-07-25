import styles from "./lessons.module.css";
import ProfileSidebar from "../Profile/ProfileSidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";
<<<<<<< HEAD
import Bookmark from "../../components/Bookmark";

const Lessons = () => {
  const lessons = useSelector((state) => state.lessons.lessons);
  const dispatch = useDispatch();
=======

import { bookmark } from "../../redux/slices/userSlices";
import { AppDispatch, RootState } from "../../redux/store/store";

const Lessons = () => {
  const lessons = useSelector((state) => state.lessons.lessons);
  const bookmarks = useSelector((state) => state.user.user.bookmarks);

  const dispatch = useDispatch<AppDispatch>();
>>>>>>> 36516ac1d9d989367fbe2b2bc176fec4dc3579ed

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
