import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahs } from "../../redux/slices/quranSlice";
import ProfileSidebar from "../Profile/ProfileSidebar";
import styles from "./quran.module.css";
import { Link } from "react-router-dom";

const Quran = () => {
  const surahs = useSelector((state) => state.quran.surahs);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchSurahs());
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className={styles.content}>
        {surahs.map((sura) => {
          return (
            <Link to={`/quran/${sura.number}`}>
              <div className={styles.card}>
                <div className={styles.number}>{sura.number}</div>
                <div className={styles.enName}>{sura.englishName}</div>
                <div className={styles.name}>{sura.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Quran;
