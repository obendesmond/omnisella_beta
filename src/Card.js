import React from "react";

export default function Card({ title, number }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{number}</h3>
      {/* condition ? dothis_if_true : dothis_if_false */}
      {title.length > 6 && <p>Best</p>}
      {title.length > 6 || <p>Another</p>}
    </div>
  );
}
