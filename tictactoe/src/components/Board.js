import React from "react";
import Square from "./Square";
import "./Board.css";

export default function Board({
  playerMovePositions,
  currentPlayer,
  setCurrentPlayer,
  setPlayerMovePosition,
}) {
  function handleClick(index) {
    //use a copy of the state to not mutate the state directly.
    const playerMoves = [...playerMovePositions];

    if (currentPlayer === "X") {
      playerMoves[index] = "X";
      setCurrentPlayer("O");
    } else {
      playerMoves[index] = "O";
      setCurrentPlayer("X");
    }

    setPlayerMovePosition(playerMoves);
  }

  return (
    <div>
      <h2>Current player is {currentPlayer}</h2>
      <div className="board">
        {playerMovePositions.map((square, index) => {
          return (
            <Square
              value={index}
              key={index}
              action={handleClick}
              currentPlayer={currentPlayer}
              playerMovePositions={playerMovePositions}
            />
          );
        })}
      </div>
    </div>
  );
}
