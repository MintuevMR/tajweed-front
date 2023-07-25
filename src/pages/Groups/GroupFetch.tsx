import React, { useEffect } from "react";
import { fetchGroup } from "../../redux/slices/groupsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./groups.module.css";

const GroupFetch = () => {
  const groups = useSelector((state) => state.groups.groups);
  console.log(groups);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroup());
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {groups.map((item) => {
          return (
            <div className={styles.card} key={item._id}>
              <span>{item.groups}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupFetch;
