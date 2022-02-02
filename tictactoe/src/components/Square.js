import React from "react";
import "./Square.css";

export default function Square({ playerMark }) {
  if (playerMark === "X") {
    return (
      <div>
        <button className="square">{playerMark}</button>
      </div>
    );
  } else if (playerMark === "O") {
    return (
      <div>
        <button className="square">{playerMark}</button>
      </div>
    );
  }

  return (
    <div>
      <button className="square"></button>
    </div>
  );
}
