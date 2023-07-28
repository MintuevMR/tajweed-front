import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { LessonsItem, LessonsState, fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import styles from "./temp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from '../../redux/store/store';



function Voting() {
    const lessons = useSelector((state: RootState) => state.lessons.lessons)

    console.log(lessons);
    

  const dispatch = useDispatch<AppDispatch>();
  
  console.log(lessons);
  
  
  useEffect(()=> {
    dispatch(fetchLessons())
  }, [])
  return (
    <div className={styles.votingMain}>
      <ProfileSidebar />
      {
        lessons.map((item: LessonsItem)=> {

              if(item.name === "Огласовки")
                return (
                    <div className={styles.s}>
                    <div className={styles.lessonsTitle}>{item.title}</div>
                    <h4 className={styles.lessonsDesc}> { item.description }</h4>
                    <div className={styles.TextDesc}>
                    <div className={styles.lessonsText}>{item.text}</div>
                    </div>
                    <div className={styles.prevNext}>
          <button className={styles.left_btn}><Link to={"/lessons/alphabet"}>Предыдущий урок</Link></button>
          <button className={styles.right_btn}><Link to={"/lessons/forms"}>Следующий урок</Link></button> 
        </div>
                    </div>
                    )
            }
        )
      }
      
    </div>
  )
}

export default Voting