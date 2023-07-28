import React, { useEffect } from "react";
import ProfileSidebar from "../../components/Profile/ProfileSidebar/index";
import styles from "./bookmark.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookmark } from "../../redux/slices/userSlices";

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.user.user.bookmarks);
  const dispatch = useDispatch();

  const handleBookmark = (moduleId) => {
    dispatch(bookmark(moduleId));
  };

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        {bookmarks && Array.isArray(bookmarks) && bookmarks.length === 0 ? (
          <div className={styles.emptyMessage}>Нет закладок</div>
        ) : (
          bookmarks &&
          Array.isArray(bookmarks) &&
          bookmarks.map((item) => (
            <div className={styles.card} key={item._id}>
              <span
                onClick={() => handleBookmark(item._id)}
                className={`${styles.icons} icons material-symbols-outlined ${
                  bookmarks && Array.isArray(bookmarks) && bookmarks.length > 0 ? styles.iconsActive : ""
                }`}
              >
                bookmarks
              </span>
              <div>
                <Link to={item.ref}>{item.name}</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Bookmarks;
