import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { LessonsItem, fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../Profile/ProfileSidebar';
import styles from "./temp.module.css";
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store/store';

function Tashdid() {
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

              if(item.name === "Ташдид")
                return (
                 <div className={styles.s}>
                    <div className={styles.lessonsTitle}>{item.title}</div>
                    <h4 className={styles.lessonsDesc}> { item.description }</h4>
                    <div className={styles.TextDesc}>
                    <div className={styles.lessonsText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum enim quia cum omnis! Impedit temporibus cumque quod perferendis vero culpa. Expedita eos natus reprehenderit debitis modi recusandae doloribus cum!</div>
                    </div>
                    
                    <div className={styles.prevNext}>
                    <button className={styles.left_btn}><Link to={"/lessons/tanvin "}>Предыдущий урок</Link></button>
                    <button className={styles.right_btn}><Link to={"/lessons"}>Выйти</Link></button> 
                  </div>
                    </div>
                    )
            }
        )
      }
    </div>
  )
}

export default Tashdid