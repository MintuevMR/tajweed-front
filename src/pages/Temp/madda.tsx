import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LessonsItem, fetchLessons } from "../../redux/slices/lessonSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./temp.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Button } from "antd";

function Madda() {
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
          if (item.name === "Мадда")
            return (
              <div className={styles.s}>
                <div className={styles.lessonsTitle}>{item.title}</div>
                <h4 className={styles.lessonsDesc}> {item.description}</h4>
                <div className={styles.TextDesc}>
                  <div className={styles.lessonsText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit sapiente distinctio aliquid, soluta corrupti rem
                    voluptas saepe! Error natus maiores, at debitis consequatur
                    enim quam ipsam placeat nulla sit a?
                  </div>
                </div>
                <div className={styles.prevNext}>
                  <div className={styles.prevNext}>
                    <Link to={"/lessons/forms"}>
                      <Button type="default" color="#389e0d">
                        Следующий урок
                      </Button>
                    </Link>
                    <Link to={"/lessons/sukun"}>
                      <Button type="default"> Следующий урок</Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </main>
  );
}

export default Madda;
