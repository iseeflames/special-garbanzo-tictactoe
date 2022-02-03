import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [playerMovePositions, setPlayerMovePosition] = useState(
    Array(9).fill("")
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isOver, setGameOver] = useState(false);

  function restartGame() {
    setPlayerMovePosition(Array(9).fill(""));
    window.location.reload();
  }

  if (!isOver) {
    return (
      <div>
        <Board
          playerMovePositions={playerMovePositions}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setPlayerMovePosition={setPlayerMovePosition}
          isOver={isOver}
          setGameOver={setGameOver}
        />

        <button onClick={() => restartGame()}>Restart Game</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>The Game is Over. Click the button below to restart the game</h1>
        <button onClick={() => restartGame()}>Restart Game</button>
      </div>
    );
  }
}
