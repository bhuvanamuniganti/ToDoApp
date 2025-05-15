import { useState } from "react";
import "./styles.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
