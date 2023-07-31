import React from "react";
import styles from "./usersList.module.css";
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

interface PaginationProps {
  usersAllPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  usersAllPerPage,
  totalUsers,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersAllPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={styles.pagination}>
        {/* <Button icon={<LeftOutlined />} /> */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
