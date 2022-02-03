import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import { calculateWinner } from "../helpers/calculateWinner";

export default function Game() {
  const [playerMovePositions, setPlayerMovePosition] = useState(
    Array(9).fill("")
  );

  return (
    <div>
      <Board playerMovePositions={playerMovePositions} />
    </div>
  );
}
