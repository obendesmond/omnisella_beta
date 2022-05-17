import React from "react";
import { HiMenu } from "react-icons/hi";

export default function TodoField({ todo, handleSubmit, handleOnChange }) {
  return (
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
  );
}
