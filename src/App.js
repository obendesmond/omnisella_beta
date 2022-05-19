import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import TodoField from "./components/TodoField";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = value => {
    setTodo(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
  };

  const handleClick = i => {
    const result = list.filter((item, index) => index !== i);
    setList(result);
  };

  return (
    <div className="page">
      <TodoField
        todo={todo}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
      <Card handleClick={handleClick} list={list} />
    </div>
  );
};

export default App;
