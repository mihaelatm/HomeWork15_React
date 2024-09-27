import styles from "./styles.module.css";

function UserList({ users }) {
  return (
    <ul className={styles.user_list}>
      {users.map((user) => (
        <li key={user.id} className={styles.user_list_item}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
