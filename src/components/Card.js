import React from "react";

export default function Card({ list, handleClick }) {
  return (
    <div className="card">
      {list.map((list, i) => (
        <p onClick={() => handleClick(i)} key={i} className="todo">
          {list}
        </p>
      ))}
    </div>
  );
}
