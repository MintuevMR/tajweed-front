import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LessonsItem, fetchLessons } from "../../redux/slices/lessonSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./temp.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Button } from "antd";

function Tanvin() {
  const lessons = useSelector((state: RootState) => state.lessons.lessons);

  const dispatch = useDispatch<AppDispatch>();

  console.log(lessons);

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  return (
    <div className={styles.votingMain}>
      <ProfileSidebar />
      {lessons.map((item: LessonsItem) => {
        if (item.name === "Танвин")
          return (
            <div className={styles.s}>
              <div className={styles.lessonsTitle}>{item.title}</div>
              <h4 className={styles.lessonsDesc}> {item.description}</h4>
              <div className={styles.TextDesc}>
                <div className={styles.lessonsText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores aspernatur, laboriosam dolorum itaque sequi
                  dignissimos dolore suscipit minima ullam, iure voluptatum
                  nihil deserunt magni cumque ea incidunt. Rerum, nobis
                  similique.
                </div>
              </div>
              <div className={styles.prevNext}>
                <Link to={"/lessons/sukun"}>
                  <Button type="default" color="#389e0d">
                    Предыдущий урок
                  </Button>
                </Link>
                <Link to={"/lessons/tashdid"}>
                  <Button type="default"> Следующий урок</Button>
                </Link>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default Tanvin;
