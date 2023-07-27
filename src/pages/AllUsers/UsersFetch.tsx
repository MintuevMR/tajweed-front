import React, { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search/Search";
import Pagination from "./Pagination";
import styles from "./usersList.module.css";
import { userAll } from "../../redux/slices/userSlices";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAllPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };
    getUsers();
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
    <div className={styles.container}>
      <h2>Все студенты</h2>
      <Search onSearch={(query) => setSearchQuery(query)} />
      {currentUsers.map((user) => (
        <Users key={user._id} user={user} loading={loading} />
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
