import React, { useState, useEffect } from "react";
import styles from "./quran.module.css";
import ProfileSidebar from "../Profile/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Sura = () => {
  const [sura, setSura] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const { number } = useParams();
  const delimiter = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${number}/ar.alafasy`)
      .then((res) => res.json())
      .then((data) => setSura(data.data.ayahs));
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content} dir="rtl">
        <div className={styles.main}>
          <div className={styles.sura}>{delimiter}</div>
          {sura.map((aya) => {
            return (
              <div
                key={aya.number}
                className={styles.sura}
                onClick={() => {
                  // Проверяем, не проигрывается ли аудио в данный момент
                  if (!isPlaying) {
                    const audio = new Audio(
                      `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${aya?.number}.mp3`
                    );
                    // Устанавливаем состояние воспроизведения на true
                    setIsPlaying(true);

                    // Обработчик для события окончания воспроизведения
                    audio.onended = () => {
                      // Когда аудио закончится, устанавливаем состояние воспроизведения на false
                      setIsPlaying(false);
                    };

                    // Запускаем воспроизведение
                    audio.play();
                  }
                }}
              >
                {aya?.text.split(delimiter)}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Sura;
