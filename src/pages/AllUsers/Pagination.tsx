import React from "react";
import styles from './usersList.module.css'

const Pagination = ({ usersAllPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersAllPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={styles.pagination}>
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
