import React, { useEffect, useRef, useState } from "react";
import styles from "./azkary.module.css";

import logo from "../../assets/logo.png";
import strelka from "../../assets/strelka_vniz.png";
import strelkaup from "../../assets/strelkaup.png";
import vnimanie from "../../assets/vnimanie.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAzkary } from "../../redux/slices/azkarySlices";

const evening = () => {
  const [counter, setCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const azkary = useSelector((state) => state.azkary.azkary);

  const handleScrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCounterClick = () => {
    setModalOpen(!modalOpen);
  };

  const handleCounterPlus = () => {
    setCounter(counter + 1);
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchAzkary());
  }, []);

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ""}`}>
      <button className={styles.modal} onClick={handleCounterClick}>
        Счетчик
      </button>

      {modalOpen && (
        <div className={styles.modalContent}>
          <div className={styles.counter}>
            <p>
              Счётчик: <b>{counter}</b>{" "}
            </p>
            <button className={styles.counter_plus} onClick={handleCounterPlus}>
              {" "}
              +{" "}
            </button>
            <button
              className={styles.counter_reset}
              onClick={handleResetCounter}
            >
              {" "}
              Сброс{" "}
            </button>
          </div>
        </div>
      )}

      <div className={styles.body_morning_img}>
        <div className={styles.header_azkary}>
          <div className={styles.logo}>
            <div className={styles.logo_name}>
              <a href="/">
                <img src={logo} alt="logo-img" />
              </a>
              <a className={styles.tajweed} href="/">
                Tajweed
              </a>
            </div>
            <a className={styles.logo_a} href="/azkary">
              Азкары
            </a>
            <button className={styles.themeButton} onClick={toggleDarkMode}>
              Сменить тему
            </button>
          </div>
        </div>
        <div className={styles.header_main}>
          <h1>Утренние азкары</h1>
          <div className={styles.strelka} onClick={handleScrollDown}>
            <img src={strelka} alt="strelka" />
          </div>
        </div>
      </div>

      <div className={styles.container} ref={scrollRef}>
        <div>
          {azkary.map((item) => {
            if (item.discriptionText && item.headerText === 'Утренний азкар') {
              return (
                <div
                  key={item.id}
                  className={`${styles.card_azkar} ${
                    darkMode ? styles.darkCard : ""
                  }`}
                >
                  <h1 className={styles.header_text} ref={scrollRef}>
                    {item.headerText} {item.number}
                  </h1>
                  <p className={styles.arab_text}>{item.arabText}</p>
                  <p className={styles.translate_text}>{item.translateText}</p>
                  <p className={styles.transcript_text}>
                    {item.transcriptText}
                  </p>
                  <div className={styles.footer_text}>
                    <p>Повторение {item.footerCount}</p>
                    <p>Источник {item.footerName}</p>
                  </div>
                  <div className={styles.discription}>
                    {" "}
                    <div className={styles.description_img}>
                      <img src={vnimanie} alt="vnimanie" />
                    </div>
                    {item.discriptionText}
                  </div>
                </div>
              );
            }
            if(item.headerText === 'Утренний азкар'){

            return (
              <div
                  key={item.id}
                  className={`${styles.card_azkar} ${
                    darkMode ? styles.darkCard : ""
                  }`}
                >
                  <h1 className={styles.header_text} ref={scrollRef}>
                    {item.headerText} {item.number}
                  </h1>
                  <p className={styles.arab_text}>{item.arabText}</p>
                  <p className={styles.translate_text}>{item.translateText}</p>
                  <p className={styles.transcript_text}>
                    {item.transcriptText}
                  </p>
                  <div className={styles.footer_text}>
                    <p>Повторение {item.footerCount}</p>
                    <p>Источник {item.footerName}</p>
                  </div>
                  <div className={styles.discription}>
                    {" "}
                  </div>
                </div>
            )
          }
          })}
        </div>
      </div>

      {/* ----------------------------------------------11------------------------------------------------ */}
      {showScrollButton && (
        <div className={styles.scrollButton} onClick={handleScrollUp}>
          <img src={strelkaup} alt="strelka-up" />
          {/* <p>вверх</p> */}
        </div>
      )}
    </div>
  );
};

export default evening;
