import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import { calculateWinner } from "../helpers/calculateWinner";

export default function Game() {
  const [playerMovePositions, setPlayerMovePosition] = useState(
    Array(9).fill("")
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <div>
      <Board
        playerMovePositions={playerMovePositions}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setPlayerMovePosition={setPlayerMovePosition}
      />
    </div>
  );
}
