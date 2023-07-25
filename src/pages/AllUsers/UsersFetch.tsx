import { useDispatch, useSelector } from "react-redux";
import { userAll } from "../../redux/slices/userSlices";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store/store";
import Users from "./Users";
import Pagination from "./Pagination";

const AllUsers = () => {
  const dispatch = useDispatch();
  const [usersAll, setUsersAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAllPerPage] = useState(4);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsersAll(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const lastUsersIndex = currentPage * usersAllPerPage;
  const firstUsersIndex = lastUsersIndex - usersAllPerPage;
  const currentUsers = usersAll.slice(firstUsersIndex, lastUsersIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)


  return (
    <div>
      <h2>Все пользователи</h2>
      {currentUsers?.map((user) => (
        <Users user={user} loading={loading} />
      ))}
      <Pagination
        usersAllPerPage={usersAllPerPage}
        totalUsers={usersAll.length}
        paginate={paginate}
      />
		<button onClick={prevPage}>Предыдущая страница</button>
		<button onClick={nextPage}>Следующая страница</button>

    </div>
  );
};

export default AllUsers;
