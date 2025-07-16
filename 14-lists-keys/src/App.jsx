import React from 'react';

const users = [
  { id: 1, name: "Riyank", email: "riyank@example.com" },
  { id: 2, name: "Jiya", email: "jiya@example.com" },
  { id: 3, name: "Yash", email: "yash@example.com" }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
