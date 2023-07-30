import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  LessonsItem,
  LessonsState,
  fetchLessons,
} from "../../redux/slices/lessonSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./temp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Button } from "antd";

function Voting() {
  const lessons = useSelector((state: RootState) => state.lessons.lessons);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);
  return (
    <main>
      <ProfileSidebar />
      <div className="content">
        {lessons.map((item: LessonsItem) => {
          if (item.name === "Огласовки")
            return (
              <div className={styles.s}>
                <div className={styles.lessonsTitle}>{item.title}</div>
                <h4 className={styles.lessonsDesc}> {item.description}</h4>
                <div className={styles.TextDesc}>
                  <div className={styles.lessonsText}>{item.text}</div>
                </div>
                <div className={styles.prevNext}>
                  <Link to={"/lessons/alphabet"}>
                    <Button type="default" color="#389e0d">
                      Предыдущий урок
                    </Button>
                  </Link>
                  <Link to={"/lessons/forms"}>
                    <Button type="default"> Следующий урок</Button>
                  </Link>
                </div>
              </div>
            );
        })}
      </div>
    </main>
  );
}

export default Voting;
