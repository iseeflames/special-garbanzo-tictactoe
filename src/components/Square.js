import React, { useState } from "react";
import "./Square.css";

export default function Square({
  action,
  currentPlayer,
  playerMovePositions,
  value,
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          if (!isClicked) {
            action(value);
            setIsClicked(true);
          } else {
            alert("Square already clicked!.");
          }
        }}
        className="button-54"
      >
        <p className="playerMark">{playerMovePositions[value]}</p>
      </button>
    </div>
  );
}
