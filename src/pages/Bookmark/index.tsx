import ProfileSidebar from "../Profile/ProfileSidebar/index";
import styles from "./bookmark.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/Bookmark";

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.user.user.bookmarks);

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        {bookmarks && Array.isArray(bookmarks) && bookmarks.length === 0 ? (
          <div className={styles.emptyMessage}>Нет закладок</div>
        ) : (
          bookmarks &&
          Array.isArray(bookmarks) &&
          bookmarks.map((item) => <Card item={item} />)
        )}
      </div>
    </main>
  );
};

export default Bookmarks;
