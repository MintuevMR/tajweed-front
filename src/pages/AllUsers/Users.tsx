import React from "react";

const Users = ({ user, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div key={user._id}>
      <p>Имя: {user.firstName}</p>
      <p>Фамилия: {user.lastName}</p>
      <button>+</button>
      <button>x</button>
    </div>
  );
};
export default Users;
