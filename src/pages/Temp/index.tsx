import React, { useEffect } from "react";
import styles from "./temp.module.css";
import ProfileSidebar from "../Profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessonSlice";

const Temp = () => {

 const lessons = useSelector((state) => state.lessons.lessons)

  const dispatch = useDispatch();

  

  useEffect(()=> {
    dispatch(fetchLessons())
  }, [])
 

  

   
   
 
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
      <div className={styles.content }>
      
        <div className={styles.alphabet} dir="rtl">
          {alphabet.map((huruf, index) => {
            return (
              <span
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
          <button>Предыдущий урок</button>
          <button>Следующий урок</button> 
        </div>
      </div>
    </main>
  );
};

export default Temp;
