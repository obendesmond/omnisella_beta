import React from "react";
import { HiMenu } from "react-icons/hi";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <form type="submit" className="formContainer">
        <HiMenu className="menuIcon" />
        <input placeholder="Enter todo list" type="text" />
      </form>
    </div>
  );
};

export default App;
