import styles from "./lessons.module.css";
import { Link } from "react-router-dom";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";

import { bookmark } from "../../redux/slices/userSlices";
import { AppDispatch, RootState } from "../../redux/store/store";

const Lessons = () => {
  const lessons = useSelector((state) => state.lessons.lessons);
  const bookmarks = useSelector((state) => state.user.user.bookmarks);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  const handleBookmark = (moduleId) => {
    dispatch(bookmark(moduleId));
  };

  return (
    <main>
    <ProfileSidebar />
    <div className={styles.content}>
      {lessons.map((item) => {
        const isBookmarked = bookmarks?.some((bookmark) => bookmark._id === item._id);
        
        return (
          <div className={styles.card} key={item._id}>
            <span
              onClick={() => handleBookmark(item._id)}
              className={`${styles.icons} icons material-symbols-outlined ${
                isBookmarked ? styles.iconsActive : ""
              }`}
            >
              bookmarks
            </span>
            <div>
              <Link to={`${item.ref}`}>{item.name}</Link>
            </div>
          </div>
        );
      })}
    </div>
  </main>

  );
};

export default Lessons;
