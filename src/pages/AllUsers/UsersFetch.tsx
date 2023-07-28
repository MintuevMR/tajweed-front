import React, { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search/Search";
import Pagination from "./Pagination";
import styles from "./usersList.module.css";
import GroupFetch from "../Groups/GroupFetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../redux/slices/groupsSlice";
import { userAll } from "../../redux/slices/userSlices";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAllPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  const groups = useSelector(state => state.groups.groups)
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userAll())
    dispatch(fetchGroups())
  }, []);

  const filteredUsers = users.filter((user) =>
    user.lastName.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const lastUsersIndex = currentPage * usersAllPerPage;
  const firstUsersIndex = lastUsersIndex - usersAllPerPage;
  const currentUsers = filteredUsers.slice(firstUsersIndex, lastUsersIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.content}>
      <Search onSearch={(query) => setSearchQuery(query)} />
      {currentUsers.map((user) => (
        <Users key={user._id} user={user} loading={loading} groups={groups} />
      ))}
      <div className={styles.button_container}>
        <div className={styles.button_wrapper}>
          <button
            className={styles.user_btn}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Предыдущая {"\n"} страница
          </button>
        </div>
        <Pagination
          usersAllPerPage={usersAllPerPage}
          totalUsers={filteredUsers.length}
          paginate={paginate}
        />
        <div className={styles.button_wrapper}>
          <button
            className={styles.user_btn}
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(users.length / usersAllPerPage)}
          >
            Следующая {"\n"} страница
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
