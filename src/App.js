import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = value => {
    setTodo(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, todo]);
  };

  return (
    <div className="page">
      <form
        type="submit"
        onSubmit={e => handleSubmit(e)}
        className="formContainer"
      >
        <HiMenu className="menuIcon" />
        <input
          value={todo}
          onChange={e => handleOnChange(e.target.value)}
          placeholder="Enter todo list"
          type="text"
        />
      </form>
      {list.map((list, i) => (
        <p key={i}>{list}</p>
      ))}
    </div>
  );
};

export default App;
