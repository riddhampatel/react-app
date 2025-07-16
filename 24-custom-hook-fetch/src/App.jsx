import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1>📡 User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
