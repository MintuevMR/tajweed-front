import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../Profile/ProfileSidebar';
import styles from "./temp.module.css";


function Voting() {
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

              if(item.name === "Оглосовки")
                return (
                    <>
                    <div>{item.title}</div>
                    <div>{item.name}</div>
                    <div> { item.description }</div>
                    </>
                    )
            }
        )
      }
    </div>
  )
}

export default Voting