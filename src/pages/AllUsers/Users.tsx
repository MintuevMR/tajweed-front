import styles from './usersList.module.css'

const Users = ({ user, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.card_user} key={user._id}>
      <p className={styles.user_name}>
        Имя: {user.firstName} <br /> Фамилия: {user.lastName}
      </p>
      <div className={styles.btn_userClick}>
        <button className={styles.user_btnClick}>+</button>
        <button className={styles.user_btnDelClick}>x</button>
      </div>
    </div>
  )
};
export default Users;
