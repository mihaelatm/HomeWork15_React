import { useCallback, useMemo, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const userList = [
    { id: 1, name: "Emma" },
    { id: 2, name: "James" },
    { id: 3, name: "Olivia" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Ethan" },
    { id: 6, name: "Fiona" },
  ];

  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div className="container">
      <h2 className="title">User Filter App</h2>
      <input
        type="text"
        placeholder="Search Users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="input"
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
