import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LessonsItem, fetchLessons } from "../../redux/slices/lessonSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./temp.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Button } from "antd";

function Tashdid() {
  const lessons = useSelector((state: RootState) => state.lessons.lessons);

  const dispatch = useDispatch<AppDispatch>();

  console.log(lessons);

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className="content">
        {lessons.map((item: LessonsItem) => {
          if (item.name === "Ташдид")
            return (
              <div className={styles.s}>
                <div className={styles.lessonsTitle}>{item.title}</div>
                <h4 className={styles.lessonsDesc}> {item.description}</h4>
                <div className={styles.TextDesc}>
                  <div className={styles.lessonsText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores rerum enim quia cum omnis! Impedit temporibus
                    cumque quod perferendis vero culpa. Expedita eos natus
                    reprehenderit debitis modi recusandae doloribus cum!
                  </div>
                </div>

                <div className={styles.prevNext}>
                  <Link to={"/lessons/tanvin"}>
                    <Button type="default" color="#389e0d">
                      Предыдущий урок
                    </Button>
                  </Link>
                  <Link to={"/lessons"}>
                    <Button type="default"> Выйти</Button>
                  </Link>
                </div>
              </div>
            );
        })}
      </div>
    </main>
  );
}

export default Tashdid;
