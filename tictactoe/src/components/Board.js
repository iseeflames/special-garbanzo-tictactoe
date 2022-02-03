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
    //use a copy of the state
    const playerMoves = [...playerMovePositions];

    if (currentPlayer === "X") {
      playerMoves[index] = "X";
      setCurrentPlayer("O");
    } else {
      playerMoves[index] = "O";
      setCurrentPlayer("X");
    }

    // console.log(currentPlayer);
    // let newPlayer = currentPlayer === "X" ? "O" : "X";
    // console.log(newPlayer);
    // console.log("Index " + index);
    // playerMoves[index] = newPlayer;
    // setCurrentPlayer(newPlayer);
    setPlayerMovePosition(playerMoves);
  }

  // console.log(playerMovePositions);

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
