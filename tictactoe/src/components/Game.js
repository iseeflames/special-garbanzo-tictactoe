import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [playerMovePositions, setPlayerMovePosition] = useState(
    Array(9).fill("")
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  return (
    <div>
      <Board
        playerMovePositions={playerMovePositions}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setPlayerMovePosition={setPlayerMovePosition}
        setGameOver={setGameOver}
      />
    </div>
  );
}
