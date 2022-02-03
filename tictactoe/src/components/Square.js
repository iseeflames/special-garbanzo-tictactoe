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
        className="square"
      >
        {playerMovePositions[value]}
      </button>
    </div>
  );
}
