import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import GameOver from "./GameOver";

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

        <button className="button-27" onClick={() => restartGame()}>
          Restart Game
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <GameOver />
        <h1 className="gameOver-message">The Game is Over.</h1>
        <p className="gameOver-instruction">
          (Click the button below to restart the game)
        </p>
        <button className="button-27" onClick={() => restartGame()}>
          Restart Game
        </button>
      </div>
    );
  }
}
