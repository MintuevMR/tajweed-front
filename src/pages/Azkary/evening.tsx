import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAzkary } from "../../redux/slices/azkarySlices";
import styles from "./azkary.module.css";
import ProfileSidebar from "../../components/ProfileSidebar/index";
import strelkaup from "../../assets/strelkaup.png";
import vnimanie from "../../assets/vnimanie.png";
import { AppDispatch, RootState } from "../../redux/store/store";

interface AzkaryItem {
  id: string;
  headerText: string;
  number: number;
  arabText: string;
  translateText: string;
  transcriptText: string;
  footerCount: number;
  footerName: string;
  discriptionText?: string;
}

const Evening: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const azkary: any = useSelector((state: RootState) => state.azkary.azkary);

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
    <div className={styles.container}>
      <div className={styles.modal} onClick={handleCounterClick}>
        Счетчик
      </div>

      {modalOpen && (
        <div className={styles.modalContent}>
          <div className={styles.counter}>
            <p>
              Счётчик: <b>{counter}</b>{" "}
            </p>
            <div className={styles.counter_plus} onClick={handleCounterPlus}>
              {" "}
              +{" "}
            </div>
            <div className={styles.counter_reset} onClick={handleResetCounter}>
              {" "}
              Сброс{" "}
            </div>
          </div>
        </div>
      )}

      <div className={styles.body_evering}>
        <ProfileSidebar />

        <div className={styles.container}>
          <h2>Вечерние азкары</h2>
          {azkary.map((item: any) => {
            if (item.discriptionText && item.headerText === "Вечерний ") {
              return (
                <div key={item.id} className={styles.card_azkar}>
                  <h1 className={styles.header_text}>
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
            if (item.headerText === "Вечерний азкар") {
              return (
                <div key={item.id} className={styles.card_azkar}>
                  <h1 className={styles.header_text}>
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
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {showScrollButton && (
        <div className={styles.scrollButton} onClick={handleScrollUp}>
          <img src={strelkaup} alt="strelka-up" />
        </div>
      )}
    </div>
  );
};


