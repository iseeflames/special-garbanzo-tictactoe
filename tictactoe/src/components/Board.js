import React from "react";
import Square from "./Square";
import "./Board.css";

export default function Board({ playerMovePositions }) {
  //console.log(playerMovePositions);

  return (
    <div>
      <h2>Current player is {}</h2>
      <div className="board">
        {playerMovePositions.map((square, index) => {
          return <Square value={index} key={index} />;
        })}
      </div>
    </div>
  );
}
