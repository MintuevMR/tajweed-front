import ProfileSidebar from "../../components/ProfileSidebar/index";
import styles from "./bookmark.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookmark } from "../../redux/slices/userSlices";
import { AppDispatch, RootState } from "@/redux/store/store";

const Bookmarks: React.FC = () => {
  const bookmarks = useSelector(
    (state: RootState) => state.user.user.bookmarks
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleBookmark = (moduleId: string) => {
    dispatch(bookmark(moduleId));
  };

  return (
    <main>
      <ProfileSidebar />
      <div className="content">
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
                  bookmarks && Array.isArray(bookmarks) && bookmarks.length > 0
                    ? styles.iconsActive
                    : ""
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
