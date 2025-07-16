import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, []); // runs once on mount

  return (
    <div style={{ padding: "30px" }}>
      <h2>Random Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            {user.name.first} {user.name.last} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
