import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("my-todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);

  // Add new task
  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  };

  // Delete task
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  // Filter based on input (dynamic search)
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(task.toLowerCase())
  );

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add or filter tasks..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
