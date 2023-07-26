import React, { useState, useEffect } from 'react';
import Users from './Users';
import Search from './Search/Search';
import Pagination from './Pagination';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAllPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');

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
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <div>
      <h2>Все пользователи</h2>
      <Search onSearch={(query) => setSearchQuery(query)} />
      {filteredUsers.map((user) => (
        <Users key={user._id} user={user} loading={loading} />
      ))}
      <Pagination
        usersAllPerPage={usersAllPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
      />
		<button onClick={prevPage}>Предыдущая страница</button>
		<button onClick={nextPage}>Следующая страница</button>

    </div>
  );
};

export default AllUsers;
