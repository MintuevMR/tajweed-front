import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { LessonsItem, fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../Profile/ProfileSidebar';
import styles from "./temp.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from '../../redux/store/store';


function Madda() {
    const lessons = useSelector((state: RootState) => state.lessons.lessons)

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

              if(item.name === "Мадда")
                return (
                    <div className={styles.s}>
                    <div className={styles.lessonsTitle}>{item.title}</div>
                    <h4 className={styles.lessonsDesc}> { item.description }</h4>
                    <div className={styles.TextDesc}>
                    <div className={styles.lessonsText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente distinctio aliquid, soluta corrupti rem voluptas saepe! Error natus maiores, at debitis consequatur enim quam ipsam placeat nulla sit a?</div>
                    </div>
                    <div className={styles.prevNext}>
          <button className={styles.left_btn}><Link to={"/lessons/forms "}>Предыдущий урок</Link></button>
          <button className={styles.right_btn}><Link to={"/lessons/sukun"}>Следующий урок</Link></button> 
        </div>
                    </div>
                    )
            }
        )
      }
    </div>
  )
}

export default Madda