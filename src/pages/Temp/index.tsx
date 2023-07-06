import React from "react";
import styles from "./temp.module.css";

const Temp = () => {
  const alphabet = [
    "ا",    "ب",    "ت",    "ﺙ",    "ﺝ",    "ﺡ",    "ﺥ",    "ﺩ",    "ﺫ",
    "ﻝ",    "ﺯ",    "ﺱ",    "ﺵ",    "ﺹ",    "ﺽ",    "ﻁ",    "ﻅ",    "ﻉ",
    "ﻍ",    "ف",    "ﻕ",    "ﻙ",    "ﺭ",    "ﻡ",    "ﻥ",    "ﻩ",    "ﻭ",
    "ﻱ",    "لا",    "ء"
    ];

  return (
    <div>
      <div className={styles.alphabet} dir="rtl">
        {alphabet.map((huruf, index) => {
          return (
            <span
              onClick={() => {
                const audio = new Audio(
                  `https://fileproxy.umma.team/audio/tadzhvid/rules/4-20/${index+1}.mp3`
                );
                audio.play(); 
              }}
            >
              {huruf}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Temp;
