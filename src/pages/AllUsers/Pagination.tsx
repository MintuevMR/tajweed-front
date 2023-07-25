import React from "react";

const Pagination = ({ usersAllPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersAllPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
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
