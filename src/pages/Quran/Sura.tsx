import React, { useState, useEffect } from "react";
import styles from "./quran.module.scss";
import ProfileSidebar from "../Profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "@/App.scss";

const Sura = () => {
  const [sura, setSura] = useState([]);
  const [suraName, setSuraName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const { number } = useParams();
  const delimiter = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${number}/ar.alafasy`)
      .then((res) => res.json())
      .then((data) => {
        setSura(data.data.ayahs);
        setSuraName(data.data.englishName);
      });
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className="content" dir="rtl">
        <div>{suraName}</div>
        <div className={styles.sura}>
          {sura.map((aya) => {
            return (
              <span
                key={aya.number}
                className={styles.sura}
                onClick={() => {
                  if (!isPlaying) {
                    const audio = new Audio(
                      `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${aya?.number}.mp3`
                    );
                    setIsPlaying(true);
                    audio.onended = () => setIsPlaying(false);
                    audio.play();
                  }
                }}
              >
                {aya?.text} ﴿{aya?.number}﴾
              </span>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Sura;
