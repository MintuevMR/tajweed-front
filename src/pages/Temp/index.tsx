import React, { useEffect } from "react";
import styles from "./temp.module.css";
import ProfileSidebar from "../../components/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Temp = () => {
  const lessons = useSelector((state: RootState) => state.lessons.lessons);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  const alphabet = [
    "ا",
    "ب",
    "ت",
    "ﺙ",
    "ﺝ",
    "ﺡ",
    "ﺥ",
    "ﺩ",
    "ﺫ",
    "ﻝ",
    "ﺯ",
    "ﺱ",
    "ﺵ",
    "ﺹ",
    "ﺽ",
    "ﻁ",
    "ﻅ",
    "ﻉ",
    "ﻍ",
    "ف",
    "ﻕ",
    "ﻙ",
    "ﺭ",
    "ﻡ",
    "ﻥ",
    "ﻩ",
    "ﻭ",
    "ﻱ",
    "لا",
    "ء",
  ];

  return (
    <main>
      <ProfileSidebar />
      <div className='content'>
        <div className={styles.alphabet} dir="rtl">
          {alphabet.map((huruf, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  const audio = new Audio(
                    `https://fileproxy.umma.team/audio/tadzhvid/rules/4-20/${
                      index + 1
                    }.mp3`
                  );
                  audio.play();
                }}
              >
                {huruf}
              </span>
            );
          })}
        </div>

        <div className={styles.prevNext}>
          <Link to={"/lessons"}>
            <Button type="default" color="#389e0d">
              Предыдущий урок
            </Button>
          </Link>
          <Link to={"/lessons/voting"}>
            <Button type="default"> Следующий урок</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Temp;
