import React from "react";
import styles from "./usersList.module.css";
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Pagination = ({ usersAllPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

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
