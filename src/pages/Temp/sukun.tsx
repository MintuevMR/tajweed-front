import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../Profile/ProfileSidebar';
import styles from "./temp.module.css";
import { Link } from 'react-router-dom';

function Sukun() {
    const lessons = useSelector((state) => state.lessons.lessons)

    const dispatch = useDispatch();
    
    console.log(lessons);
    
    
    useEffect(()=> {
      dispatch(fetchLessons())
    }, [])

  return (
    <div className={styles.votingMain}>
      <ProfileSidebar />
      {
        lessons.map((item)=> {

              if(item.name === "Сукун")
                return (
                    <div className={styles.s}>
                    <div className={styles.lessonsTitle}>{item.title}</div>
                    <h4 className={styles.lessonsDesc}> { item.description }</h4>
                    <div className={styles.TextDesc}>
                    <div className={styles.lessonsText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore unde ab ea dolores doloremque magnam hic optio officia nihil aliquid distinctio alias sint ad nisi consequuntur, sit quidem assumenda eligendi.</div>
                    </div>
                    <div className={styles.prevNext}>
          <button className={styles.left_btn}><Link to={"/lessons/madda "}>Предыдущий урок</Link></button>
          <button className={styles.right_btn}><Link to={"/lessons/tanvin"}>Следующий урок</Link></button> 
        </div>
                    </div>
                    )
            }
        )
      }
    </div>
  )
}

export default Sukun