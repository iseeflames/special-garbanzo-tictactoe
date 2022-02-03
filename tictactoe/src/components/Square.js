import React, { useState } from "react";
import "./Square.css";

export default function Square({
  action,
  currentPlayer,
  playerMovePositions,
  value,
}) {
  return (
    <div>
      <button onClick={() => action(value)} className="square">
        {playerMovePositions[value]}
      </button>
    </div>
  );
}
