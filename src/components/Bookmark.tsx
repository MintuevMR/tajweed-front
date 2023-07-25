import React from "react";
import styles from "../pages/Lessons/lessons.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookmark } from "../redux/slices/userSlices";

const Bookmark = ({item}) => {
  const bookmarks = useSelector((state) => state.user.user.bookmarks);
  const dispatch = useDispatch();

  const handleBookmark = (moduleId) => {
    dispatch(bookmark(moduleId));
  };

  const isBookmarked = bookmarks?.some((bookmark) => bookmark._id === item._id);


  return (
    <div className={styles.card} key={item._id}>
      <span
        onClick={() => handleBookmark(item._id)}
        className={isBookmarked ? `${styles.iconsActive} icons material-symbols-outlined` : `${styles.icons} icons material-symbols-outlined`}
      >
        bookmarks
      </span>
      <div>
        <Link to={item.ref}>{item.name}</Link>
      </div>
    </div>
  );
};

export default Bookmark;
