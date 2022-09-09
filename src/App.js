import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // input state
  const [todos, setTodos] = useState([]); // todo list

  const handleAddTodo = () => {
    setTodos([input, ...todos]); // push to set of todos
    setInput(""); // reset input
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add New Todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo, i) => (
          <p key={i}>{todo}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
