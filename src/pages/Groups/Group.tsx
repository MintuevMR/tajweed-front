import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../redux/slices/groupsSlice";
import { Link, useParams } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar";
import styles from "./groups.module.css";
import { Button } from "antd";

import { UserAddOutlined } from "@ant-design/icons";

const Group = () => {
  const { id } = useParams();
  const groups = useSelector((state) => state.groups.groups);
  const group = groups.find((item) => item._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className="content">
      {group ? (
        <div className={styles.centerContent}>
          <div className={styles.heading}>
            <h2>{group.groups}</h2>
            <Link to={"/students"}>
              <Button icon={<UserAddOutlined />}> +</Button>
            </Link>
          </div>
          {group.users.length > 0 ? (
            <div className={styles.rodTable}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Список группы</th>
                  </tr>
                </thead>
                <tbody>
                  {group.users.map((student, index) => (
                    <tr key={student._id}>
                      <td>{index + 1}</td>
                      <td>
                        {student.firstName} {student.lastName}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>Нет студентов</div>
          )}
        </div>
      ) : (
        <div>Группа не найдена</div>
      )}
      </div>

    </main>
  );
};

export default Group;
