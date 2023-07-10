import teacherImg from "../../assets/man.svg";
import styles from "./Home.module.css";
import teacherWomanImg from "../../assets/woman.svg";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/Telegram.svg";
import tiktok from "../../assets/tiktok.svg";
import video from "../../assets/video.mp4";
import booksImg from "../../assets/bookIcon.svg";
import playIcon from "../../assets/playIcon.svg";
import studentCap from "../../assets/student-cap.svg";

function HomeMain() {
  return (
    <>
      <div className={styles.teachersBlock}>
        <span className={styles.headerSpan}>Наши преподаватели</span>
      </div>
      <div className={styles.teachers}>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Арабский язык</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img
              src={teacherWomanImg}
              className={styles.surtTeacher}
              alt="surt"
            />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Асия</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img src={teacherImg} className={styles.surtTeacher} alt="surt" />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Мухьаммад</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
        <div className={styles.teacher}>
          <div className={styles.teachersImgBlock}>
            <img
              src={teacherWomanImg}
              className={styles.surtTeacher}
              alt="surt"
            />
          </div>
          <div className={styles.teachersInfo}>
            <h2 className={styles.teacherName}>Фатима</h2>
            <hr />
            <span className={styles.teacherDirection}>Таджвид</span>
          </div>
        </div>
      </div>
      <div className={styles.Contacts}>
        <div className={styles.greenDiv}>
          <div>
            <a href="https://developer.mozilla.org/ru/docs/Web/CSS/background-image">
              <img className={styles.facebook} src={facebook} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className={styles.whatsapp} src={whatsapp} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className={styles.telegram} src={telegram} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className={styles.twitter} src={twitter} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className={styles.tiktok} src={tiktok} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.textContacts}>
          Нажми на иконку для обратной связи
        </div>
      </div>
      <div className={styles.videoBlock}>
        <video autoPlay muted loop id={styles.myVideo}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.intro_content}>
          <div className={styles.icon_content}>
            <img id={styles.videoIcon} src={booksImg} alt="" />
            <h2>
              10 <br /> Модулей
            </h2>
          </div>
          <div className={styles.icon_content}>
            <img id={styles.videoIcon} src={playIcon} alt="" />
            <h2>
              54 <br /> уроков
            </h2>
          </div>
          <div className={styles.icon_content}>
            <img id={styles.videoIcon} src={studentCap} alt="" />
            <h2>
              1000 <br /> выпускников
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
