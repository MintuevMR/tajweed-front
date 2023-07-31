import { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search/index";
import Pagination from "./Pagination";
import styles from "./usersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../redux/slices/groupsSlice";
import { userAll } from "../../redux/slices/userSlices";
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { RootState } from "@/redux/store/store";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAllPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  const groups = useSelector((state: RootState) => state.groups.groups);
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAll());
    dispatch(fetchGroups());
  }, []);

  const filteredUsers = users.filter((user) =>
    user.lastName.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const lastUsersIndex = currentPage * usersAllPerPage;
  const firstUsersIndex = lastUsersIndex - usersAllPerPage;
  const currentUsers = filteredUsers.slice(firstUsersIndex, lastUsersIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="content">
      <div>
        <div>
          <Search onSearch={(query) => setSearchQuery(query)} />
        </div>
        {currentUsers.map((user) => (
          <Users key={user._id} user={user} loading={loading} groups={groups} />
        ))}

        <div className={styles.button_container}>
          <Button
            icon={<LeftOutlined />}
            onClick={prevPage}
            disabled={currentPage === 1}
          />
          <Pagination
            usersAllPerPage={usersAllPerPage}
            totalUsers={filteredUsers.length}
            paginate={paginate}
          />
          <Button
            icon={<RightOutlined />}
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(users.length / usersAllPerPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
