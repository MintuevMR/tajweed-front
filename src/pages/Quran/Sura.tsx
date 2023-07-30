import React, { useState, useEffect } from "react";
import styles from "./quran.module.scss";
import ProfileSidebar from "../../components/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Switch } from "antd";

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
        <div className={styles.rules} dir="ltr">
          <h4>Правила Нун-сакина</h4>
          <div>
            <Switch checkedChildren="Изх1ар" unCheckedChildren="Изх1ар" />
          </div>
          <div>
            <Switch checkedChildren="Идг1ом" unCheckedChildren="Идг1ом" />
          </div>
          <div>
            <Switch checkedChildren="Икълаб" unCheckedChildren="Икълаб" />
          </div>
          <div>
            <Switch checkedChildren="Ихфаъ" unCheckedChildren="Ихфаъ" />
          </div>

          <h4>Правила Мим-Сакина</h4>
          <div>
            <Switch checkedChildren="Изх1ар" unCheckedChildren="Изх1ар" />
          </div>
          <div>
            <Switch checkedChildren="Идг1ом" unCheckedChildren="Идг1ом" />
          </div>
          <div>
            <Switch checkedChildren="Ихфаъ" unCheckedChildren="Ихфаъ" />
          </div>
          <h4>Правила Мадды</h4>

          <div>
            <Switch checkedChildren="Т1обий" unCheckedChildren="Т1обий" />
          </div>
          <div>
            <Switch checkedChildren="Бадаль" unCheckedChildren="Бадаль" />
          </div>
          <div>
            <Switch checkedChildren="Муттасыль" unCheckedChildren="Муттасыль" />
          </div>
          <div>
            <Switch checkedChildren="Мунфасыль" unCheckedChildren="Мунфасыль" />
          </div>
          <div>
            <Switch checkedChildren="1ивад" unCheckedChildren="1ивад" />
          </div>
          <div>
            <Switch checkedChildren="1арид" unCheckedChildren="1арид" />
          </div>
          <div>
            <Switch checkedChildren="Лин" unCheckedChildren="Лин" />
          </div>
          <div>
            <Switch
              checkedChildren="Сылат Суг1ро"
              unCheckedChildren="Сылат Суг1ро"
            />
          </div>
          <div>
            <Switch
              checkedChildren="Сылат Кубро"
              unCheckedChildren="Сылат Кубро"
            />
          </div>
        </div>

        <div className={styles.sura}>
          <div>
            <h1>{suraName}</h1>
          </div>

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
